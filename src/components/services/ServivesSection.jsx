import ServiceCard from "./ServiceCard"
import servicesData from "../../data/services.json"

const ServicesSection = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">
            INTERESTED IN WORKING WITH US?
          </h2>
          <p className="text-lg md:text-xl text-black max-w-3xl mx-auto">
            We work with real estate investors across the country every day. How can we help?
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesSection;
