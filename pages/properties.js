import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Pagination } from "antd";
import "antd/dist/antd.min.css";
import FooterSection from "../components/footer-section";
import Header from "../components/header";
import PropertiesGridContainer from "../components/properties-grid-container";
import { createClient } from "@supabase/supabase-js";

const defaultOrder = [];

const PropertiesGridView = () => {
  return (
    <div className="flex w-full flex-col items-start justify-start bg-gray-white text-center font-body-regular-400 text-33xl text-gray-white">
      <Header hamburger={false} />
      <div className="flex h-60 flex-col items-center justify-center bg-[url(/category@3x.png)] bg-cover bg-top bg-no-repeat">
        <div className="flex flex-col items-center justify-start gap-[12px]">
          <div className="font-semibold leading-[72px]">Properties</div>
          <div className="font-body-regular-600 text-base leading-[24px] text-whitesmoke-200">
            <span>{`Home / `}</span>
            <span className="font-medium text-gray-white">Properties</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start gap-[95px] pb-2 pt-16 text-left font-body-regular-600 text-base text-gray-black lg:pl-[120px] lg:pr-[120px]">
        <div className="flex flex-row items-center justify-start">
          <div className="flex flex-row flex-wrap items-end justify-start gap-[16px]">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <img className="h-6 w-6" alt="" src="/listbullets.svg" />
              <img className="h-6 w-6" alt="" src="/squaresfour.svg" />
            </div>
            <div className="leading-[24px]">Sort by:</div>
            <Dropdown
              menu={{ items: defaultOrder }}
              placement="bottomLeft"
              trigger={["hover"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                {`Default Order `}
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
        <PropertiesGridContainer />
        <div className="flex flex-row items-end justify-center gap-[8px] text-center text-primary-500">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default PropertiesGridView;
