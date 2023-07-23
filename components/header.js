import Link from "next/link";

const Header = ({ hamburger }) => {
  return (
    <header className="sticky top-[0] z-[2] box-border flex h-[98px] w-full flex-row items-center justify-center self-stretch bg-gray-white px-20 py-[22px] text-center font-body-regular-600 text-5xl text-primary-500 [background:white] lg:box-border lg:pl-10 lg:pr-10 md:box-border md:pl-6 md:pr-6">
      <div className="flex flex-1 flex-row items-center justify-between">
        <Link
          href="/"
          className="flex flex-row items-center justify-center gap-[8px]"
        >
          <img className="relative h-11 w-11" alt="" src="/houseline.svg" />
          <div className="flex flex-col items-start justify-start">
            <div className="relative font-semibold leading-[24px]">REIS</div>
            <div className="relative text-sm font-medium leading-[16px]">
              Real State
            </div>
          </div>
        </Link>
        <div className="flex flex-row items-center justify-end gap-[36px] text-sm text-primary-900 sm:flex">
          <div className="flex flex-row items-start justify-start gap-[30px] lg:hidden">
            <div className="relative leading-[22px]">HOME</div>
            <div className="relative leading-[22px]">ABOUT US</div>
            <div className="relative leading-[22px]">OUR AGENTS</div>
            <div className="relative font-semibold leading-[22px]">
              PROPERTIES
            </div>
            <div className="relative leading-[22px]">GALLERY</div>
            <div className="relative leading-[22px]">BLOG</div>
            <div className="relative leading-[22px]">CONTACT US</div>
            <div className="relative leading-[22px]">SEARCH</div>
          </div>
          {!hamburger && (
            <button className="hidden cursor-pointer flex-row items-center justify-center bg-[transparent] p-0 [border:none] lg:flex">
              <img
                className="relative h-6 w-6 shrink-0 overflow-hidden md:flex"
                alt=""
                src="/notification.svg"
              />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
