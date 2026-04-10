"use client"
import {useRef, Ref} from "react";
export default function Input({text,name}: {text?: string,name?: string}) {
    return (
        <div className="flex flex-col">
            <label className="text-[#696868] font-bold">{text}</label>
            <input
                type="text"
                name={name}
                className="w-full indent-5 h-11 rounded-lg border border-stone-400"
            />
        </div>
    )
}
