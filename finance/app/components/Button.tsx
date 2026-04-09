export default function Button({text,disabled}: {text?: string,disabled?: boolean}) {
    return (
        <button  type="submit" className="bg-[#201F24] w-full rounded-lg text-white mt-5 font-bold h-12">
            {text}
        </button>
    )
}