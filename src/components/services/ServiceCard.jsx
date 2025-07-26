import { Handshake, Search, Phone,MoveUpRight } from "lucide-react";

const ServiceCard = ({ service }) => {
  const getIcon = (iconName) => {
    const iconProps = { size: 48, className: "text-primary" };
    switch (iconName) {
      case "handshake":
        return <Handshake {...iconProps} />;
      case "search":
        return <Search {...iconProps} />;
      case "phone":
        return <Phone {...iconProps} />;
      default:
        return <Handshake {...iconProps} />;
    }
  };

  const buttonClass =
    service.buttonStyle === "filled"
      ? "bg-primary hover:bg-green-700 text-white"
      : "border-2 border-primary text-primary hover:text-green-600 bg-white";

  return (
    <div className="border-2 border-gray-200 rounded-2xl p-8 text-center h-full flex flex-col justify-between hover:border-primary transition-colors">
      {/* Icon */}
      <div className="flex justify-center mb-2">
        <div className="p-4 border-2 border-primary rounded-lg">
          {getIcon(service.icon)}
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-primary mb-2">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-2 text-xs md:text-sm">
          {service.description}
        </p>
      </div>

      {/* Button */}
      <button
        className={`${buttonClass} px-2 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2`}
      >
        Find a home
        <MoveUpRight size={16} />
      </button>
    </div>
  );
};

export default ServiceCard;
