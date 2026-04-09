export default function Message({ text, link }: { text: string; link: string }) {
    return (
        <p className="text-center">
            {text}
            <span className="underline font-extrabold cursor-pointer">
                {link}
            </span>
        </p>
    )
}