import OverviewCard from "../components/OverviewCard";
import PotCard from "../components/PotCard";
import { getBalance } from "../lib/db/balance";
import { checkAuth } from "../actions/auth"; 
export default  async function HomePage() {
    const user = await checkAuth()

    
    const balance = getBalance(user.id);
    const money = await balance || 0

    return (
        <div className="px-4 py-6">
            <h1 className="mb-8 text-[32px] font-bold">Overview</h1>
            <div className="flex flex-col lg:flex-row lg:gap-5 ">
                <OverviewCard title="Current Balance" money={money} bg_color="#201F24" color="#FFFFFF" />
                <OverviewCard title="Income" money={5000} bg_color="#FFFFFF" color="#000000" />
                <OverviewCard title="Expenses" money={4000} bg_color="#FFFFFF" color="#000000" />
            </div>
            <div className="flex flex-row items-center  justify-between">
                <h1 className="text-[24px] opacity-70 font-bold">Pots</h1>
                <div className="flex flex-row items-center gap-5">
                    <p className=" text-[16px] opacity-70">See Details</p>
                    <img src="/assets/images/icon-caret-right.svg" className="mt-0.5"/>
                </div>
              
            </div>
            <PotCard money={200} />
            
        </div>
    )
}