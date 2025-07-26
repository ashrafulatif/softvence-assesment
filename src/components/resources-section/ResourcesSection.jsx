import ResourcesCardView from "./ResourcesCardView";
import data from "../../data/resources.json";

const ResourcesSection = () => {
  

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl ">
      {/* Header section */}
      <div className="flex justify-between items-end mb-12 ">
        <div className="ml-6">
          <h2 className="text-4xl font-bold text-green-800 leading-tight">
            OTHER RESOURCES
          </h2>
          <h2 className="text-4xl font-bold text-green-800 leading-tight">
            YOU'LL LIKE
          </h2>
        </div>
        <button className="bg-green-800 hover:bg-green-900 text-white px-8 py-3 mr-6 rounded-full text-sm font-medium transition-colors">
          VIEW MORE
        </button>
      </div>

      {/* Cards section */}
      <div className="flex gap-6 overflow-x-auto pb-4 items-center justify-center">
        {data.map((card) => (
          <ResourcesCardView
            key={card.id}
            date={card.date}
            imageSrc={card.imageSrc}
            imageAlt={card.imageAlt}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ResourcesSection;
