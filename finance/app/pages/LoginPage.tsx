"use client";
import { useActionState, useState } from "react";
import FinanceHeader from "../components/FinanceHeader";
import Illustration from "../components/Illustration";
import Message from "../components/Message";
import Button from "../components/Button";
import Password from "../components/Password";
import Email from "../components/Input";
import { login } from '@/app/actions/auth'
export default function LoginPage() {
  
    const [showPassword,setShowPassword] = useState(false)
    const [state, action, pending] = useActionState(login, undefined)
    return (
        <div className="min-h-screen bg-orange-100 flex flex-col">

           
            <FinanceHeader/>

            {/* MAIN */}
            <div className="flex flex-1">

               
                <Illustration/>

                {/* DESNI DEO */}
                <div className="flex flex-1 items-center justify-center">

                    <div className=" bg-white px-6 py-8 space-y-5 w-[90%] sm:w-[80%] md:w-[70%] lg:w-125 xl:w-137.5 2xl:w-125 rounded-lg shadow-lg">

                        <h1 className="text-[32px] font-bold">Login</h1>

                        <form action={action}>

                            <Email text={"Email"} />
                            
                            <Password text={"Password"} showPassword={showPassword} setShowPassword={setShowPassword} />

                            <Button text={"Login"} disabled={pending}/>
                         </form>
                        <Message text={"Don't have an account?"} link={"Sign Up"} />
                        {state?.message && <p>{state.message}</p>}
                        {state?.errors?.email && <p>{state.errors.email}</p>}
                        {state?.errors?.password && <p>{state.errors.password}</p>}
                    </div>

                </div>
            </div>
        </div>
    );
}