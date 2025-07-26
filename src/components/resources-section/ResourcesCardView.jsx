import Image from "next/image";

const ResourcesCardView = (props) => {
  return (
    <div className="bg-white w-80 shadow-lg rounded-2xl border border-gray-100 flex-shrink-0">
      <figure className="p-2">
        <Image
          className="w-full h-48 object-cover rounded-2xl"
          src={
            props.imageSrc ||
            "/placeholder.png"
          }
          alt={props.imageAlt || props.title}
          width={320}
          height={192}
        />
      </figure>
      <div className="px-6 pb-6">
        <p className="text-sm text-gray-500 mb-3">{props.date}</p>
        <h3 className="text-xl font-semibold text-green-800 mb-3 leading-tight">
          {props.title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default ResourcesCardView;
