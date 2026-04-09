"use client";
import { useActionState, useState } from "react";
import FinanceHeader from "../components/FinanceHeader";
import Illustration from "../components/Illustration";
import Message from "../components/Message";
import Button from "../components/Button";
import Password from "../components/Password";
import Input from "../components/Input";
import { signup } from '@/app/actions/auth'
export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [state, action, pending] = useActionState(signup, undefined)
    return (
        <div className="min-h-screen bg-orange-100 flex flex-col">


            <FinanceHeader />

            {/* MAIN */}
            <div className="flex flex-1">


                <Illustration />

                {/* DESNI DEO */}
                <div className="flex flex-1 items-center justify-center">

                    <div className=" bg-white px-6 py-8 space-y-5 w-[90%] sm:w-[80%] md:w-[70%] lg:w-125 xl:w-137.5 2xl:w-125 rounded-lg shadow-lg">

                        <h1 className="text-[32px] font-bold">Sign up</h1>
                        {/* FORMA */}
                        <form action={action}>

                            <Input text={"Name"} name={"name"} />
                            {state?.errors?.name && <p>{state.errors.name}</p>}
                            <Input text={"Email"} name={"email"} />
                            {state?.errors?.email && <p>{state.errors.email}</p>}
                            <Password text={"Create Password"} showPassword={showPassword} setShowPassword={setShowPassword} />
                            {state?.errors?.password && (
                                <div>
                                    <p>Password must:</p>
                                    <ul>
                                        {state.errors.password.map((error) => (
                                            <li key={error}>- {error}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        
                        <Button text={"Create Account"} disabled={pending}/>
                        </form>
                        <Message text={"Already have an account?"} link={"Login"} />
                      
                    </div>

                </div>
            </div>
        </div>
    )
}