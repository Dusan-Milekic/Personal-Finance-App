"use client";
import { useState } from "react";
import FinanceHeader from "../components/FinanceHeader";
import Illustration from "../components/Illustration";
import Message from "../components/Message";
import Button from "../components/Button";
import Password from "../components/Password";
import Email from "../components/Email";
export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false)
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


                        <Email />

                        <Password showPassword={showPassword} setShowPassword={setShowPassword} />

                        <Button />

                        <Message />

                    </div>

                </div>
            </div>
        </div>
    )
}