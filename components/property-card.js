const PropertyCard = ({ imgUrl, name, price }) => {
  return (
    <div className="box-border flex h-[466.99px] w-[350px] flex-col items-start justify-start gap-[23px] rounded-3xs border-[1px] border-solid border-whitesmoke-100 bg-gray-white px-[13px] py-[15px] text-left font-body-regular-600 text-[14.51px] text-gray-700 hover:cursor-pointer hover:bg-gainsboro sm:mb-5 sm:w-[100%!important]">
      <img
        className="relative h-[200px] max-w-full shrink-0 self-stretch overflow-hidden rounded-3xs object-cover"
        alt=""
        src={imgUrl}
      />
      <div className="flex flex-row items-start justify-start self-stretch p-2.5">
        <div className="relative flex-1 font-medium leading-[20.32px]">
          {name}
        </div>
      </div>
      <div className="flex flex-row items-start justify-start self-stretch p-2.5 text-[13.55px] text-primary-500">
        <div className="relative font-semibold leading-[18.98px]">
          $ {price}
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[17px] px-2.5 py-0 text-[10.84px] text-gray-500">
        <div className="flex flex-row items-center justify-start gap-[4.35px]">
          <img className="h-[17.42px] w-[17.42px]" alt="" src="/car.svg" />
          <div className="relative font-medium leading-[16.27px]">4</div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[4.35px]">
          <img className="h-[17.42px] w-[17.42px]" alt="" src="/bathtub.svg" />
          <div className="relative font-medium leading-[16.27px]">4</div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[4.35px]">
          <img
            className="h-[17.42px] w-[17.42px]"
            alt=""
            src="/arrowsout.svg"
          />
          <div className="relative font-medium leading-[16.27px]">
            2,096.00 ft
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between self-stretch text-center text-[11.61px]">
        <div className="flex flex-row items-center justify-start gap-[5.81px]">
          <img
            className="h-[27.57px] w-[27.57px] rounded-[50%] object-cover"
            alt=""
            src="/ellipse-1@2x.png"
          />
          <div className="relative font-medium leading-[17.42px]">
            Jenny Wilson
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[8.71px]">
          <div className="flex flex-row items-start justify-start rounded-[1.45px] bg-primary-50 p-[2.902620315551758px]">
            <img
              className="h-[14.51px] w-[14.51px]"
              alt=""
              src="/sharenetwork.svg"
            />
          </div>
          <div className="flex flex-row items-start justify-start rounded-[1.45px] bg-primary-50 p-[2.902620315551758px]">
            <img className="h-[14.51px] w-[14.51px]" alt="" src="/heart.svg" />
          </div>
          <div className="flex flex-row items-start justify-start rounded-[1.45px] bg-primary-50 p-[2.902620315551758px]">
            <img className="h-[14.51px] w-[14.51px]" alt="" src="/plus.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
