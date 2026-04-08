export default function Illustration() {
    return (
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
    )
}