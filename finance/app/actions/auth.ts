"use server";
import { SignupFormSchema, FormState } from '@/app/lib/definitions'
import * as bcrypt from 'bcrypt-ts'
import {prisma} from "../lib/prisma"
import { redirect } from 'next/navigation';

type LoginState = {
  errors?: {
        email?: string[] | undefined;
        password?: string[] | undefined;
    } | undefined;
    message?: string | undefined;

} | undefined


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
    }})

    redirect('/login')
    
  
}

async function login(state: LoginState,formData: FormData) {


    const email = formData.get('email')
    const password = formData.get('password')

  if(typeof email !== 'string' || typeof password !== 'string') {
    return {
      message: 'Email and password are required.',
    }
  }

  

  const user = await prisma.user.findUnique({ where: { email: email } })
  
  if (!user) {
    return {
      message: 'Invalid email or password.',
    }
  }

  const passwordMatch = await bcrypt.compare(password, user.password)
  
  if (!passwordMatch) {
    return {
      message: 'Invalid email or password.',
    }
  }

  redirect('/dashboard')

  
}

export { signup, login }