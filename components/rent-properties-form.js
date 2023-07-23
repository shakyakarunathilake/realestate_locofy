import PropertyRendCard from "./property-rend-card";

const RentPropertiesForm = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-[39px] px-0 py-[86px] text-center font-body-regular-600 text-21xl text-primary-800">
      <div className="flex max-w-[95%px] flex-col items-center justify-start gap-[40px] self-stretch">
        <div className="flex w-[688px] max-w-[95%px] flex-col items-center justify-start gap-[24px] lg:max-w-[95%] md:w-auto md:self-stretch">
          <div className="relative font-semibold leading-[48px]">
            Latest Properties of Rent
          </div>
          <div className="relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-start justify-center gap-[40px] text-left text-base text-gray-white">
          <PropertyRendCard />
          <PropertyRendCard propBackgroundImage={`url("/card-21@3x.png")`} />
          <PropertyRendCard propBackgroundImage={`url("/card-31@3x.png")`} />
          <PropertyRendCard propBackgroundImage={`url("/card-41@3x.png")`} />
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

export default RentPropertiesForm;
