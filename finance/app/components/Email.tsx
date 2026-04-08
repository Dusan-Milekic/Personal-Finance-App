export default function Email() {
    return (
        <div className="flex flex-col">
            <label className="text-[#696868] font-bold">Email</label>
            <input
                type="text"
                className="w-full indent-5 h-11 rounded-lg border border-stone-400"
            />
        </div>
    )
}