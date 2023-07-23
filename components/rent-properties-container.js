import { useEffect, useState } from "react";
import PropertyCard from "./property-card";
import { createClient } from "@supabase/supabase-js";

const RentPropertiesContainer = () => {
  const client = createClient(
    process.env.NEXT_PUBLIC_URL,
    process.env.NEXT_PUBLIC_KEY
  );

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const result = await client.from("properties").select("*");

      setProperties(result.data.slice(0, 4));
    };

    fetchProperties();
  }, []);

  return (
    <div className="flex flex-col items-center justify-start gap-[39px] self-stretch px-0 py-[86px] text-center font-body-regular-600 text-21xl text-primary-800">
      <div className="flex max-w-[95%px] flex-col items-center justify-start gap-[40px] self-stretch md:box-border md:pl-[60px] md:pr-[60px]">
        <div className="flex w-[688px] max-w-[95%px] flex-col items-center justify-start gap-[24px] lg:max-w-[95%] md:w-auto md:self-stretch">
          <div className="relative self-stretch font-semibold leading-[48px]">
            Latest Properties of Rent
          </div>
          <div className="relative self-stretch text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-[32px] self-stretch px-2.5 py-0">
          {properties.map((property) => (
            <PropertyCard
              name={property.name}
              imgUrl={property.image}
              price={property.price}
            />
          ))}
        </div>
      </div>
      <button className="flex cursor-pointer flex-row items-start justify-start rounded bg-primary-500 px-6 py-3 [border:none]">
        <div className="relative text-center font-body-regular-600 text-base font-medium leading-[24px] text-gray-white">
          Load more listing
        </div>
      </button>
    </div>
  );
};

export default RentPropertiesContainer;
