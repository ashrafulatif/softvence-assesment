import Image from "next/image"

const ReviewCard = ({ name, subtitle, review, avatar }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 shadow-lg w-60 text-center">
      <Image
        src={avatar || "/placeholder.svg"}
        alt={name}
        width={80}
        height={80}
        className="rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="font-semibold text-lg text-primary">{name}</h3>
      <h4 className="text-sm text-primary mb-4">{subtitle}</h4>
      <p className="text-xs text-gray-700 leading-relaxed text-start">{review}</p>
    </div>
  )
}

export default ReviewCard
