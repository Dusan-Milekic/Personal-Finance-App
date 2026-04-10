export default function PotCard({money}: {money: number}) {
    return (
        <div className="p-10 flex gap-7 items-center rounded-lg bg-[#F8F4F0] mt-5">
            <img src="/assets/images/icon-pot.svg" className="w-10"/>
            <div className="flex flex-col gap-4">
                <h3 className="text-xl">Total saved</h3>
                <p className="text-3xl font-bold">${money.toFixed(2)}</p>
            </div>
        </div>
    )
}