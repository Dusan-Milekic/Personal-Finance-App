import OverviewCard from "../components/OverviewCard";
import PotCard from "../components/PotCard";
import IncomeExpenseChart from "../components/IncomeExpenseChart";
import { getBalance } from "../lib/db/balance";
import { checkAuth } from "../actions/auth";
import { getBills } from "../lib/db/bills";
import { getPot } from "../lib/db/pot";
import { getExpense } from "../lib/db/expense";
import { GetIncome } from "../lib/db/income";

export default async function HomePage() {
    const user = await checkAuth();
    const income = await GetIncome(user.id);
    const bills = await getBills(user.id);
    const pot = await getPot(user.id);
    const expense = await getExpense(user.id);
    const balance = await getBalance(user.id);

    return (
        <div className="flex h-screen overflow-hidden">

            {/* SIDEBAR - desktop */}
            <nav className="bg-black hidden 2xl:flex flex-col pt-12 w-64 shrink-0 rounded-r-xl relative">
                <img src="/assets/images/logo-large.svg" className="w-fit mx-auto" />
                <ul className="text-white font-bold flex flex-col gap-1 mt-10">
                    <div className="flex items-center px-8 py-4 hover:bg-gray-700 cursor-pointer gap-3 rounded-r-full mr-4">
                        <img src="/assets/images/icon-nav-overview.svg" className="w-6 h-6" />
                        <li>Overview</li>
                    </div>
                    <div className="flex items-center px-8 py-4 hover:bg-gray-700 cursor-pointer gap-3 rounded-r-full mr-4">
                        <img src="/assets/images/icon-nav-budgets.svg" className="w-6 h-6" />
                        <li>Budgets</li>
                    </div>
                    <div className="flex items-center px-8 py-4 hover:bg-gray-700 cursor-pointer gap-3 rounded-r-full mr-4">
                        <img src="/assets/images/icon-nav-pots.svg" className="w-6 h-6" />
                        <li>Pots</li>
                    </div>
                    <div className="flex items-center px-8 py-4 hover:bg-gray-700 cursor-pointer gap-3 rounded-r-full mr-4">
                        <img src="/assets/images/icon-nav-recurring-bills.svg" className="w-6 h-6" />
                        <li>Recurring Bills</li>
                    </div>
                </ul>

                {/* Minimize dugme */}
                <div className="mt-auto mb-8 flex items-center px-8 py-4 hover:bg-gray-700 cursor-pointer gap-3 rounded-r-full mr-4 text-white font-bold">
                    <img src="/assets/images/icon-minimize-menu.svg" className="w-6 h-6" />
                    <span>Minimize Menu</span>
                </div>
            </nav>

            {/* MAIN CONTENT */}
            <div className="flex-1 overflow-y-auto pb-24 2xl:pb-6">
                <div className="px-4 py-6 sm:px-6 lg:px-10 max-w-screen-xl mx-auto">

                    <h1 className="mb-8 text-[32px] font-bold">Overview</h1>

                    {/* Overview Cards */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                        <OverviewCard title="Current Balance" money={balance || 0} bg_color="#201F24" color="#FFFFFF" />
                        <OverviewCard title="Income" money={income?.amount || 0} bg_color="#FFFFFF" color="#000000" />
                        <OverviewCard title="Expenses" money={expense?.amount || 0} bg_color="#FFFFFF" color="#000000" />
                    </div>

                    {/* Pots + Budgets - dva u redu na većim ekranima */}
                    <div className="flex flex-col xl:flex-row gap-6 mb-10">

                        {/* Pots */}
                        <div className="flex-1 bg-white rounded-xl p-6 shadow-sm">
                            <div className="flex flex-row items-center justify-between mb-4">
                                <h2 className="text-[20px] font-bold">Pots</h2>
                                <div className="flex flex-row items-center gap-2 cursor-pointer">
                                    <p className="text-[14px] opacity-60">See Details</p>
                                    <img src="/assets/images/icon-caret-right.svg" className="mt-0.5 w-3 h-3" />
                                </div>
                            </div>
                            <PotCard money={pot?.amount || 0} />
                        </div>

                        {/* Budgets + Chart */}
                        <div className="flex-1 bg-white rounded-xl p-6 shadow-sm">
                            <div className="flex flex-row items-center justify-between mb-4">
                                <h2 className="text-[20px] font-bold">Budgets</h2>
                                <div className="flex flex-row items-center gap-2 cursor-pointer">
                                    <p className="text-[14px] opacity-60">See Details</p>
                                    <img src="/assets/images/icon-caret-right.svg" className="mt-0.5 w-3 h-3" />
                                </div>
                            </div>
                            <IncomeExpenseChart />
                        </div>

                    </div>

                    {/* Bills */}
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                        <div className="flex flex-row items-center justify-between mb-6">
                            <h2 className="text-[20px] font-bold">Bills</h2>
                            <div className="flex flex-row items-center gap-2 cursor-pointer">
                                <p className="text-[14px] opacity-60">See Details</p>
                                <img src="/assets/images/icon-caret-right.svg" className="mt-0.5 w-3 h-3" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="w-full rounded-lg border-l-4 border-l-blue-400 bg-gray-50 p-4 flex justify-between items-center">
                                <p className="font-medium">Paid Bills</p>
                                <p className="font-bold">$0.00</p>
                            </div>
                            <div className="w-full rounded-lg border-l-4 border-l-red-400 bg-gray-50 p-4 flex justify-between items-center">
                                <p className="font-medium">Upcoming Bills</p>
                                <p className="font-bold">$0.00</p>
                            </div>
                            <div className="w-full rounded-lg border-l-4 border-l-green-400 bg-gray-50 p-4 flex justify-between items-center">
                                <p className="font-medium">Due Soon</p>
                                <p className="font-bold">$0.00</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* BOTTOM NAV - mobile/tablet */}
            <nav className="2xl:hidden fixed bottom-0 left-0 right-0 bg-black rounded-t-2xl z-50">
                <div className="flex justify-around items-center px-4 pt-3 pb-2">
                    <div className="flex flex-col items-center gap-1 px-4 py-2 border-b-4 border-green-400 cursor-pointer">
                        <img src="/assets/images/icon-nav-overview.svg" className="w-6 h-6" />
                        <span className="text-white text-[10px] font-medium">Overview</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 px-4 py-2 border-b-4 border-transparent hover:border-gray-500 cursor-pointer">
                        <img src="/assets/images/icon-nav-budgets.svg" className="w-6 h-6" />
                        <span className="text-gray-400 text-[10px] font-medium">Budgets</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 px-4 py-2 border-b-4 border-transparent hover:border-gray-500 cursor-pointer">
                        <img src="/assets/images/icon-nav-pots.svg" className="w-6 h-6" />
                        <span className="text-gray-400 text-[10px] font-medium">Pots</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 px-4 py-2 border-b-4 border-transparent hover:border-gray-500 cursor-pointer">
                        <img src="/assets/images/icon-nav-recurring-bills.svg" className="w-6 h-6" />
                        <span className="text-gray-400 text-[10px] font-medium">Bills</span>
                    </div>
                </div>
            </nav>

        </div>
    );
}