export default function OverViewCard({
  title,
  money,
  bg_color,
  color
}: {
  title: string
  money: number
  bg_color: string
  color: string
}) {
  return (
    <div
      className="w-full flex flex-col p-5 gap-3 rounded-lg"
      style={{ backgroundColor: bg_color } }
    >
      <h3 className="text-[18px]" style={{ color }}>
        {title}
      </h3>
      <p className="text-[32px] font-bold" style={{ color }}>
        ${money.toFixed(2)}
      </p>
    </div>
  )
}