import { useMemo } from "react";
import Link from "next/link";

const AreaCard = ({
  cityName,
  propBackgroundImage,
  propPadding,
  propBoxSizing,
}) => {
  const card11Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
      padding: propPadding,
      boxSizing: propBoxSizing,
    };
  }, [propBackgroundImage, propPadding, propBoxSizing]);

  return (
    <Link
      className="relative flex h-[241px] flex-1 cursor-pointer flex-row items-start justify-start rounded-lg bg-[url(/card-1@3x.png)] bg-cover bg-[top] bg-no-repeat text-left font-body-regular-600 text-5xl text-gray-white [text-decoration:none] md:flex-[unset] md:self-stretch"
      href="/"
      style={card11Style}
    >
      <div className="absolute left-[16px] top-[16px] z-[0] mx-[!important] my-0 flex flex-col items-start justify-start gap-[11px]">
        <div className="relative font-semibold leading-[32px]">{cityName}</div>
        <div className="relative text-center text-base leading-[24px]">
          25 listings
        </div>
      </div>
    </Link>
  );
};

export default AreaCard;
