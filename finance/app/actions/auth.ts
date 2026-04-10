"use server";
import { SignupFormSchema, FormState } from '@/app/lib/definitions'
import * as bcrypt from 'bcrypt-ts'
import {prisma} from "../lib/prisma"
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers'


 async function signup(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  })
 
  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
 
  // Call the provider or db to create a user...
  const { name, email, password } = validatedFields.data
  const hashedPassword = await bcrypt.hash(password, 10)
  


    if (await prisma.user.findUnique({ where: { email } })) {
      return {
        errors: {
          email: ['Email is already in use.'],
        },
      }
    }


    await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: hashedPassword,
      token: crypto.randomUUID(),
    }})

    redirect('/login')
    
  
}
type LoginState = {
  errors?: {
        email?: string[] | undefined;
        password?: string[] | undefined;
    } | undefined;

} | undefined

async function login(state: LoginState, formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    return {
      errors: {
        email: !email ? ['Email is required.'] : undefined,
        password: !password ? ['Password is required.'] : undefined,
      }
    }
  }

  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) {
    return { errors: { email: ['Invalid email or password.'] } }
  }

  const passwordMatch = await bcrypt.compare(password, user.password)
  if (!passwordMatch) {
    return { errors: { password: ['Invalid email or password.'] } }
  }

  const cookieStore = await cookies()
  cookieStore.set('token', user.token, {
    httpOnly: true,
    secure:true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 1 week
  })
  redirect('/home')
}



// u auth.ts
async function checkAuth() {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value
  if (!token) redirect('/login')

  const user = await prisma.user.findFirst(
    { where: { token },
      omit: {password:true}})
  if (!user) redirect('/login')

  return user // vrati usera
}

export { signup, login, checkAuth }