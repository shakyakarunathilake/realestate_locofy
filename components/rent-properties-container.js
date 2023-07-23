import PropertyCard from "./property-card";

const RentPropertiesContainer = () => {
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
          <PropertyCard
            propertyImage="/unsplashrlwe8f8anoc7@2x.png"
            car="/car5.svg"
            bathtub="/bathtub5.svg"
            arrowsOut="/arrowsout2.svg"
            ellipse1="/ellipse-1@2x.png"
            shareNetwork="/sharenetwork6.svg"
            heart="/heart2.svg"
            plus="/plus7.svg"
            propWidth="unset"
            propFlex="1"
            propMinWidth="355px"
            propMaxWidth="400px"
          />
          <PropertyCard
            propertyImage="/unsplashrlwe8f8anoc8@2x.png"
            car="/car5.svg"
            bathtub="/bathtub5.svg"
            arrowsOut="/arrowsout2.svg"
            ellipse1="/ellipse-1@2x.png"
            shareNetwork="/sharenetwork6.svg"
            heart="/heart2.svg"
            plus="/plus8.svg"
            propWidth="unset"
            propFlex="1"
            propMinWidth="355px"
            propMaxWidth="400px"
          />
          <PropertyCard
            propertyImage="/unsplashrlwe8f8anoc9@2x.png"
            car="/car6.svg"
            bathtub="/bathtub.svg"
            arrowsOut="/arrowsout3.svg"
            ellipse1="/ellipse-1@2x.png"
            shareNetwork="/sharenetwork7.svg"
            heart="/heart2.svg"
            plus="/plus3.svg"
            propWidth="unset"
            propFlex="1"
            propMinWidth="355px"
            propMaxWidth="400px"
          />
          <PropertyCard
            propertyImage="/unsplashrlwe8f8anoc10@2x.png"
            car="/car6.svg"
            bathtub="/bathtub.svg"
            arrowsOut="/arrowsout3.svg"
            ellipse1="/ellipse-1@2x.png"
            shareNetwork="/sharenetwork7.svg"
            heart="/heart2.svg"
            plus="/plus3.svg"
            propWidth="unset"
            propFlex="1"
            propMinWidth="355px"
            propMaxWidth="400px"
          />
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
