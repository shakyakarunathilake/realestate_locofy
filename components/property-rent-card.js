import { useMemo } from "react";

const PropertyRentCard = ({ propBackgroundImage }) => {
  const card12Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div
      className="box-border flex h-[426px] min-w-[355px] max-w-[370px] flex-1 flex-col items-center justify-end rounded-md bg-[url(/card-11@3x.png)] bg-cover bg-[top] bg-no-repeat p-6 text-left font-body-regular-600 text-base text-gray-white"
      style={card12Style}
    >
      <div className="flex h-6 flex-row items-end justify-center gap-[32px] self-stretch">
        <div className="flex flex-row items-start justify-end gap-[8px]">
          <img className="relative h-6 w-6" alt="" src="/mappin.svg" />
          <div className="relative font-medium leading-[24px]">Washington</div>
        </div>
        <div className="flex flex-row items-start justify-end gap-[8px]">
          <img className="relative h-6 w-6" alt="" src="/arrowsout4.svg" />
          <div className="relative font-medium leading-[24px]">12000</div>
        </div>
      </div>
    </div>
  );
};

export default PropertyRentCard;
