"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            {/* Expand dugme - vidljivo samo kad je nav sklonjen */}
            {collapsed && (
                <button
                    onClick={() => setCollapsed(false)}
                    className="absolute top-6 left-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-black text-white shadow-lg hover:scale-110 hover:bg-gray-800 transition-all duration-200 cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
            )}
            {/* SIDEBAR - desktop */}
            <nav
                className="bg-black flex-col pt-12 w-64 shrink-0 rounded-r-xl relative"
                style={{ display: collapsed ? "none" : undefined }}
            // "hidden 2xl:flex" je izbačeno jer sada state kontroliše vidljivost
            >
                <img src="/assets/images/logo-large.svg" className="w-fit mx-auto" />

                <ul className="text-white font-bold flex flex-col gap-1 mt-10">
                    <Link
                        href="/home"
                        className="flex items-center px-8 py-4 hover:bg-gray-700 cursor-pointer gap-3 rounded-r-full mr-4"
                    >
                        <img src="/assets/images/icon-nav-overview.svg" className="w-6 h-6" />
                        <li>Overview</li>
                    </Link>
                    <Link
                        href="/budgets"
                        className="flex items-center px-8 py-4 hover:bg-gray-700 cursor-pointer gap-3 rounded-r-full mr-4"
                    >
                        <img src="/assets/images/icon-nav-budgets.svg" className="w-6 h-6" />
                        <li>Budgets</li>
                    </Link>
                    <Link
                        href="/pots"
                        className="flex items-center px-8 py-4 hover:bg-gray-700 cursor-pointer gap-3 rounded-r-full mr-4"
                    >
                        <img src="/assets/images/icon-nav-pots.svg" className="w-6 h-6" />
                        <li>Pots</li>
                    </Link>
                    <Link
                        href="/recurring-bills"
                        className="flex items-center px-8 py-4 hover:bg-gray-700 cursor-pointer gap-3 rounded-r-full mr-4"
                    >
                        <img src="/assets/images/icon-nav-recurring-bills.svg" className="w-6 h-6" />
                        <li>Recurring Bills</li>
                    </Link>
                </ul>

                {/* Minimize dugme */}
                <div
                    className="mt-auto mb-8 flex items-center px-8 py-4 hover:bg-gray-700 cursor-pointer gap-3 rounded-r-full mr-4 text-white font-bold absolute bottom-0"
                    onClick={() => setCollapsed(true)}
                >
                    <img src="/assets/images/icon-minimize-menu.svg" className="w-6 h-6" />
                    <span>Minimize Menu</span>
                </div>
            </nav>
        </>
    );
}