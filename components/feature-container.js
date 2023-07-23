import InfoCard from "./info-card";

const FeatureContainer = () => {
  return (
    <div className="flex flex-col items-center justify-start self-stretch bg-primary-50 px-0 py-[70px] text-center font-body-regular-600 text-21xl text-primary-800">
      <div className="box-border flex max-w-[95%px] flex-col items-center justify-start gap-[54px] self-stretch px-0 pb-0 pt-[75px]">
        <div className="box-border flex max-w-[95%px] flex-col items-center justify-start gap-[24px] self-stretch px-[30px] py-0">
          <div className="relative self-stretch font-semibold leading-[48px]">
            Properties by Area
          </div>
          <div className="relative self-stretch text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-[86px] self-stretch text-5xl text-gray-700">
          <InfoCard
            homeSaleRentId="/icon.svg"
            homeSaleRentText="Sell your home"
          />
          <InfoCard
            homeSaleRentId="/icon1.svg"
            homeSaleRentText="Rent your home"
            propWidth="312px"
          />
          <InfoCard
            homeSaleRentId="/icon2.svg"
            homeSaleRentText="Buy a home"
            propWidth="unset"
          />
          <InfoCard
            homeSaleRentId="/icon3.svg"
            homeSaleRentText="Free marketing"
            propWidth="312px"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureContainer;
