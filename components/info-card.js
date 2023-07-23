import { useMemo } from "react";

const InfoCard = ({ homeSaleRentId, homeSaleRentText, propWidth }) => {
  const sellYourHomeStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="box-border flex min-w-[300px] max-w-[340px] flex-col items-start justify-start rounded bg-gray-white p-[22px] text-center font-body-regular-600 text-5xl text-gray-700 shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)]"
      style={sellYourHomeStyle}
    >
      <div className="flex flex-col items-start justify-start gap-[24px]">
        <img
          className="relative h-[78px] w-[78px] shrink-0 overflow-hidden"
          alt=""
          src={homeSaleRentId}
        />
        <div className="flex flex-col items-start justify-start gap-[24px]">
          <div className="relative font-semibold leading-[32px]">
            {homeSaleRentText}
          </div>
          <div className="relative flex w-[268px] items-end text-left text-base leading-[24px] text-lightslategray">
            We do a free evaluation to be sure you want to start selling.
          </div>
          <button className="relative inline-block cursor-pointer bg-[transparent] p-0 text-left font-body-regular-600 text-base leading-[24px] text-primary-500 [border:none]">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
