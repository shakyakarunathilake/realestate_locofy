import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Pagination } from "antd";
import "antd/dist/antd.min.css";
import FooterSection from "../components/footer-section";
import Header from "../components/header";
import PropertiesGridContainer from "../components/properties-grid-container";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const defaultOrder = [
  {
    key: "1",
    label: <a onClick={(e) => e.preventDefault()}>Popular Properties</a>,
  },
  {
    key: "2",
    label: <a onClick={(e) => e.preventDefault()}>Latest Properties</a>,
  },
  {
    key: "3",
    label: <a onClick={(e) => e.preventDefault()}>Recommended Properties</a>,
  },
];

const PropertiesGridView = () => {
  const client = createClient(
    process.env.NEXT_PUBLIC_URL,
    process.env.NEXT_PUBLIC_KEY
  );

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const result = await client.from("properties").select("*");

      setProperties(result.data);
    };

    fetchProperties();
  }, []);

  return (
    <div className="flex w-full flex-col items-start justify-start bg-gray-white text-center font-body-regular-400 text-33xl text-gray-white">
      <Header hamburger={false} />
      <div className="flex h-60 w-full flex-col items-center justify-center bg-[url(/category@3x.png)] bg-cover bg-top bg-no-repeat">
        <div className="flex flex-col items-center justify-start gap-[12px]">
          <div className="font-semibold leading-[72px]">Properties</div>
          <div className="font-body-regular-600 text-base leading-[24px] text-whitesmoke-200">
            <span>{`Home / `}</span>
            <span className="font-medium text-gray-white">Properties</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start gap-[95px] pb-2 pt-16 text-left font-body-regular-600 text-base text-gray-black lg:box-border lg:pl-[120px] lg:pr-[120px] md:box-border md:pl-[60px] md:pr-[60px] sm:box-border sm:pl-5 sm:pr-5">
        <div className="flex w-[272px] flex-row items-center justify-start">
          <div className="flex flex-row items-end justify-start gap-[16px]">
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
        <PropertiesGridContainer allProperties={properties} />
        <div className="flex flex-row items-end justify-center gap-[8px] text-center text-primary-500">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default PropertiesGridView;
