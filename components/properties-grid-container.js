import PropertyCard from "./property-card";

const PropertiesGridContainer = ({ allProperties }) => {
  return (
    <div className="flex flex-row flex-wrap items-start justify-center self-stretch text-left font-body-regular-600 text-[14.51px] text-gray-700">
      <div className="flex flex-1 flex-row flex-wrap items-start justify-center gap-[12px] px-2.5">
        {allProperties.map((property) => (
          <PropertyCard
            key={property.id}
            imgUrl={property.image}
            name={property.name}
            price={property.price}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertiesGridContainer;
