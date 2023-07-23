import "antd/dist/antd.min.css";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-start self-stretch bg-[url(/hero-section@3x.png)] bg-cover bg-[top] bg-no-repeat px-[30px] py-[120px] text-center font-body-regular-400 text-33xl text-gray-white">
      <div className="flex max-w-[95%px] flex-col items-center justify-center gap-[62px] self-stretch">
        <div className="flex flex-col items-center justify-start gap-[24px] self-stretch md:max-w-full">
          <div className="relative self-stretch font-semibold leading-[72px]">
            Find Your Dream Home
          </div>
          <div className="relative self-stretch font-body-regular-600 text-xl leading-[28px] text-primary-50">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[17px] self-stretch text-left font-body-regular-600 text-base text-primary-700">
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <button className="flex cursor-pointer flex-row items-start justify-start overflow-hidden rounded bg-primary-500 px-6 py-3 [border:none]">
              <div className="relative text-center font-body-regular-600 text-base font-medium leading-[24px] text-gray-white">
                Rent
              </div>
            </button>
            <button className="flex cursor-pointer flex-row items-start justify-start overflow-hidden rounded bg-gray-white px-6 py-3 [border:none]">
              <div className="relative text-center font-body-regular-600 text-base font-medium leading-[24px] text-primary-400">
                Sale
              </div>
            </button>
          </div>
          <div className="flex flex-row flex-wrap items-start justify-center self-stretch">
            <div className="box-border flex max-w-[1400px] flex-1 flex-row items-center justify-between rounded-lg bg-gray-white px-[62px] py-8 md:ml-[auto] md:mr-[auto] md:w-[300px] md:flex-col md:items-start md:justify-start md:gap-[20px]">
              <div className="flex w-[137px] flex-col items-start justify-start gap-[16px] text-center">
                <div className="relative font-semibold capitalize leading-[24px]">
                  Locations
                </div>
                <Dropdown
                  overlay={
                    <Menu>
                      {[{ value: "New York" }, { value: "Los Angeles" }].map(
                        (option, index) => (
                          <Menu.Item key={index}>
                            <a onClick={(e) => e.preventDefault()}>
                              {option.value || ""}
                            </a>
                          </Menu.Item>
                        )
                      )}
                    </Menu>
                  }
                  placement="bottomLeft"
                  trigger={["hover"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    {`Select your city `}
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
              <div className="flex w-[177px] flex-col items-start justify-start gap-[16px]">
                <div className="relative flex w-[150px] items-end font-semibold capitalize leading-[24px]">
                  Property Type
                </div>
                <Dropdown
                  className="self-stretch"
                  overlay={
                    <Menu>
                      {[
                        { value: "Studio apartments" },
                        { value: "One-bedroom apartments" },
                        { value: "Two-bedroom apartments" },
                        { value: "Three-bedroom apartments" },
                        { value: "Four or more bedroom apartments/houses" },
                      ].map((option, index) => (
                        <Menu.Item key={index}>
                          <a onClick={(e) => e.preventDefault()}>
                            {option.value || ""}
                          </a>
                        </Menu.Item>
                      ))}
                    </Menu>
                  }
                  placement="bottomLeft"
                  trigger={["hover"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    {`Select property type `}
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
              <div className="flex w-[155px] flex-col items-start justify-start gap-[16px]">
                <div className="relative flex w-[150px] items-end font-semibold capitalize leading-[24px]">
                  Rent Range
                </div>
                <Dropdown
                  className="self-stretch"
                  overlay={
                    <Menu>
                      {[
                        { value: "$500-$2000" },
                        { value: "$2500-$10000" },
                        { value: "$10000+" },
                      ].map((option, index) => (
                        <Menu.Item key={index}>
                          <a onClick={(e) => e.preventDefault()}>
                            {option.value || ""}
                          </a>
                        </Menu.Item>
                      ))}
                    </Menu>
                  }
                  placement="bottomLeft"
                  trigger={["hover"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    {`Select rent range `}
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
              <button className="box-border flex w-[102px] cursor-pointer flex-row items-center justify-center rounded bg-primary-500 px-6 py-3 [border:none] sm:hover:bg-steelblue">
                <div className="relative text-center font-body-regular-600 text-base font-medium leading-[24px] text-gray-white">
                  Search
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
