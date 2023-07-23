import { useMemo } from "react";

const FooterSection = ({}) => {
  return (
    <div className="flex flex-row items-start justify-start overflow-hidden p-[50px] md:w-auto md:flex-row sm:flex-col">
      <footer className="flex flex-1 flex-row items-start justify-between text-left font-body-regular-400 text-5xl text-gray-black md:flex-col md:gap-[50px] sm:flex-col sm:gap-[50px]">
        <div className="flex w-[312px] flex-col items-start justify-start gap-[20px] text-center font-body-regular-600 text-primary-500">
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <img className="h-11 w-11" alt="" src="/houseline1.svg" />
            <div className="flex flex-col items-start justify-start">
              <div className="font-semibold leading-[24px]">REIS</div>
              <div className="text-sm font-medium leading-[16px]">
                Real State
              </div>
            </div>
          </div>
          <div className="flex h-[168px] flex-col items-start justify-start gap-[13px] text-left font-body-regular-400 text-base text-gray-500">
            <div className="text-5xl font-semibold leading-[32px] text-gray-black">
              Contact Us
            </div>
            <div className="leading-[24px]">Call : +123 400 123</div>
            <div className="flex items-end leading-[24px]">
              Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
              auctor felis.
            </div>
            <div className="leading-[24px] text-gray-700">
              Email: example@mail.com
            </div>
          </div>
          <div className="flex w-[304px] flex-row items-center justify-between">
            <div className="flex flex-col items-center justify-center rounded bg-primary-50 p-3.5">
              <img
                className="h-[21.67px] w-5"
                alt=""
                src="/social-media-logo.svg"
              />
            </div>
            <div className="flex flex-col items-center justify-center rounded bg-primary-50 p-3.5">
              <img
                className="h-5 w-5 shrink-0 overflow-hidden"
                alt=""
                src="/social-media-logo1.svg"
              />
            </div>
            <div className="flex flex-col items-center justify-center rounded bg-primary-50 p-3.5">
              <img
                className="h-5 w-5 shrink-0 overflow-hidden"
                alt=""
                src="/social-media-logo2.svg"
              />
            </div>
            <div className="flex flex-col items-center justify-center rounded bg-primary-50 p-3.5">
              <img
                className="h-5 w-5 shrink-0 overflow-hidden"
                alt=""
                src="/social-media-logo3.svg"
              />
            </div>
            <div className="flex flex-col items-center justify-center rounded bg-primary-50 p-3.5">
              <img
                className="h-5 w-5 shrink-0 overflow-hidden"
                alt=""
                src="/social-media-logo4.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex w-[173px] flex-col items-start justify-start gap-[32px]">
          <div className="font-semibold leading-[32px]">Features</div>
          <div className="flex h-[184px] flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <div className="leading-[24px]">Home</div>
            <div className="leading-[24px]">Become a Host</div>
            <div className="leading-[24px]">Pricing</div>
            <div className="leading-[24px]">Blog</div>
            <div className="leading-[24px]">Contact</div>
          </div>
        </div>
        <div className="flex w-[173px] flex-col items-start justify-start gap-[32px]">
          <div className="font-semibold leading-[32px]">Company</div>
          <div className="flex h-[184px] flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <div className="leading-[24px]">About Us</div>
            <div className="leading-[24px]">Press</div>
            <div className="leading-[24px]">Contact</div>
            <div className="leading-[24px]">Careers</div>
            <div className="leading-[24px]">Blog</div>
          </div>
        </div>
        <div className="flex w-[203px] flex-col items-start justify-start gap-[32px]">
          <div className="font-semibold leading-[32px]">Team and policies</div>
          <div className="flex h-[104px] flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <div className="leading-[24px]">Terms of servies</div>
            <div className="leading-[24px]">Privacy Policy</div>
            <div className="leading-[24px]">Security</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
