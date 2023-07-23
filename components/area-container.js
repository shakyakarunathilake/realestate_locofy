import AreaCard from "./area-card";

const AreaContainer = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-start gap-[45px] self-stretch px-[50px] py-[53px] text-center font-body-regular-600 text-21xl text-primary-800">
      <div className="flex flex-col items-center justify-start gap-[24px] self-stretch px-[30px] py-0 md:w-auto md:self-stretch">
        <div className="relative self-stretch font-semibold leading-[48px]">
          Properties by Area
        </div>
        <div className="relative self-stretch text-xl leading-[28px] text-lightslategray">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
        </div>
      </div>
      <div className="box-border flex max-w-[95%px] flex-1 flex-row flex-wrap items-start justify-center self-stretch px-2.5 py-0 text-left text-5xl text-gray-white">
        <div className="flex max-w-[1300px] flex-1 flex-col items-center justify-start gap-[24px] self-stretch">
          <div className="flex flex-row items-start justify-center gap-[26px] self-stretch lg:flex-row md:flex-col">
            <AreaCard cityName="Centerville" />
            <AreaCard
              cityName="Centerville"
              propBackgroundImage={`url("/card-2@3x.png")`}
              propPadding="unset"
              propBoxSizing="unset"
            />
            <AreaCard
              cityName="Centerville"
              propBackgroundImage={`url("/card-3@3x.png")`}
              propPadding="unset"
              propBoxSizing="unset"
            />
          </div>
          <div className="flex flex-row items-start justify-center gap-[24px] self-stretch lg:flex-row md:flex-col">
            <AreaCard
              cityName="Arlington"
              propBackgroundImage={`url("/card-4@3x.png")`}
              propPadding="10px"
              propBoxSizing="border-box"
            />
            <AreaCard
              cityName="Centerville"
              propBackgroundImage={`url("/card-5@3x.png")`}
              propPadding="10px"
              propBoxSizing="border-box"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaContainer;
