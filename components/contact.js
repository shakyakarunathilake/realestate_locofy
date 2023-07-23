const Contact = () => {
  return (
    <div className="flex flex-row flex-wrap items-start justify-center bg-primary-50 px-[5px] py-[86px] text-center font-body-regular-600 text-21xl text-primary-800">
      <div className="box-border flex max-w-[900px] flex-1 flex-col items-center justify-start gap-[40px] px-2.5 py-0">
        <div className="flex w-[688px] max-w-[95%px] flex-col items-center justify-start gap-[24px] lg:max-w-[95%] md:w-auto md:self-stretch">
          <div className="relative font-semibold leading-[48px]">
            Contact us
          </div>
          <div className="relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[17px] rounded-xl bg-gray-white px-[30px] py-7 text-left font-poppins text-5xl text-darkslategray shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)]">
          <div className="flex flex-col items-center justify-start gap-[6px] self-stretch">
            <b className="relative leading-[36px]">Enquiry Form</b>
            <div className="relative font-roboto text-lg leading-[30px] text-slategray">
              Are you looking for details about a certain property? Ask us a
              question using the form below.
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[10px] self-stretch">
            <div className="flex flex-row items-start justify-center gap-[10px] md:flex-col md:items-start md:justify-center md:gap-[10px]">
              <input
                className="flex flex-1 flex-col items-start justify-start rounded border-[1px] border-solid border-gray bg-[transparent] px-3 py-4 font-roboto text-base md:flex-[unset] md:self-stretch"
                type="text"
                placeholder="First name"
                maxLength={100}
                minLength={2}
                required
              />
              <input
                className="flex flex-1 flex-col items-start justify-center rounded border-[1px] border-solid border-gray bg-[transparent] px-3 py-4 font-roboto text-base md:flex-[unset] md:self-stretch"
                type="text"
                placeholder="Last name"
                maxLength={100}
                minLength={2}
                required
              />
            </div>
            <input
              className="flex flex-col items-start justify-start rounded border-[1px] border-solid border-gray bg-[transparent] px-3 py-4 font-roboto text-base"
              type="email"
              placeholder="Email id"
              maxLength={100}
              minLength={2}
              required
            />
            <textarea
              className="box-border flex h-[105px] flex-col items-start justify-start rounded border-[1px] border-solid border-gray bg-[transparent] p-3 font-roboto text-base"
              placeholder="Comments or questions"
              required
              rows={10}
            />
            <button className="flex h-[46px] w-[222px] cursor-pointer flex-col items-center justify-center rounded bg-primary-500 p-0 [border:none]">
              <div className="relative inline-block w-[203.12px] text-center font-roboto text-base text-gray-white">
                Submit
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
