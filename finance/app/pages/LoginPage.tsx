export default function LoginPage() {
    return (
        <div className="min-h-screen bg-orange-100 flex flex-col">

            {/* HEADER */}
            <div className="bg-[#201F24] flex justify-center py-6 px-10 relative z-10 2xl:hidden">
                <img src="/assets/images/logo-large.svg" alt="Logo" />
            </div>

            {/* MAIN */}
            <div className="flex flex-1">

                {/* LEVI DEO (samo 2xl) */}
                <div
                    className="hidden 2xl:flex 2xl:w-[40%] m-5 rounded-lg bg-[#201F24] p-10 flex-col justify-end"
                    id="banner"
                >
                    <div className="space-y-4">
                        <p className="text-white font-extrabold text-4xl leading-tight">
                            Keep track of your money <br />
                            and save for your future
                        </p>

                        <p className="text-gray-300 text-lg max-w-md">
                            Personal finance app puts you in control of your spending. Track
                            transactions, set budgets, and add to savings pots easily.
                        </p>
                    </div>
                </div>

                {/* DESNI DEO */}
                <div className="flex flex-1 items-center justify-center">

                    <div
                        className="
              bg-white px-6 py-8 space-y-5 
              w-[90%] 
              sm:w-[80%] 
              md:w-[70%] 
              lg:w-[500px] 
              xl:w-[550px]
              2xl:w-[500px]
              rounded-lg shadow-lg
            "
                    >

                        <h1 className="text-[32px] font-bold">Login</h1>

                        <div className="flex flex-col">
                            <label className="text-[#696868] font-bold">Email</label>
                            <input
                                type="text"
                                className="w-full indent-5 h-11 rounded-lg border border-stone-400"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-[#696868] font-bold">Password</label>
                            <input
                                type="password"
                                className="w-full indent-5 h-11 rounded-lg border border-stone-400"
                            />
                        </div>

                        <button className="bg-[#201F24] w-full rounded-lg text-white mt-5 font-bold h-12">
                            Login
                        </button>

                        <p className="text-center">
                            Need to create an account?{" "}
                            <span className="underline font-extrabold cursor-pointer">
                                Sign Up
                            </span>
                        </p>

                    </div>

                </div>
            </div>
        </div>
    );
}