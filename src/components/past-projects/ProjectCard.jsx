import Image from "next/image";
import { Home, Car, Bed, Bath, MapPin } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-sm mx-auto">
      {/* Image Section */}
      <div className="relative">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3 bg-[#0D4022] text-white px-3 py-1 rounded text-sm font-medium">
          For Sale
        </div>
      </div>
      {/* Content Section */}
      <div className="p-4 bg-white ">
        {/* Title and Location */}
        <h3 className="text-lg font-semibold text-primary mb-1 text-center">
          {project.title}
        </h3>
        <div className="flex items-center text-center justify-center text-gray-600 mb-4">
          <MapPin size={14} className="mr-1 text-primary" />
          <span className="text-sm">{project.location}</span>
        </div>
        <hr className="my-4 border-t border-gray-200" />

        {/* Property Details Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center text-sm text-gray-700">
            <Home size={16} className="mr-2 text-primary" />
            <span>{project.squareFeet} Square Feet</span>
          </div>
          <div className="flex items-center text-sm text-gray-700">
            <Car size={16} className="mr-2 text-primary" />
            <span>{project.garages} Garages</span>
          </div>
          <div className="flex items-center text-sm text-gray-700">
            <Bed size={16} className="mr-2 text-primary" />
            <span>{project.bedrooms} Bedrooms</span>
          </div>
          <div className="flex items-center text-sm text-gray-700">
            <Bath size={16} className="mr-2 text-primary" />
            <span>{project.bathrooms} Bathrooms</span>
          </div>
        </div>
        <hr className="my-4 border-t border-gray-200" />
        {/* Financial Details */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-700 mb-4">
          <div>
            • Loan Amount:{" "}
            <span className="font-medium">{project.loanAmount}</span>
          </div>
          <div>
            • LTV: <span className="font-medium">{project.ltv}</span>
          </div>
          <div>
            • Rate: <span className="font-medium">{project.rate}</span>
          </div>
          <div>
            • Term: <span className="font-medium">{project.term}</span>
          </div>
        </div>
      </div>

      {/* Price Section */}
      <div className="bg-[#0D4022] text-white text-center py-3">
        <span className="text-xl font-bold">{project.price}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
