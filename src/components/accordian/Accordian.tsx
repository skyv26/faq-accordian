import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
// import expand_icon from "../../assets/icon-plus.svg";
// import collapse_icon from "../../assets/icon-minus.svg";
import { MinusCircleFilled, PlusCircleFilled } from "@ant-design/icons";

// const CustomIcon = ({ img }: { img: string }) => {
//   return <img src={img} alt="" />;
// };

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: <h2 className="font-bold text-[#2f1533] min-[375px]:text-[16px] leading-5 min-[1366px]:text-lg">What is Frontend Mentor, and how will it help me?</h2>,
    children:
      <p className="text-[#8c6991] leading-[1.3rem] pr-3 py-1 min-[1366px]:text-base min-[1366px]:font-normal min-[1366px]:py-3 min-[1366px]:pr-0">Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.</p>,
  },
  {
    key: "2",
    label: <h3 className="font-bold text-[#2f1533] min-[375px]:text-[16px] leading-5 min-[1366px]:text-lg min-[1366px]:-mt-[6px]">Is Frontend Mentor free?</h3>,
    children:
      <p className="text-[#8c6991] leading-[1.3rem] pr-3 py-1 min-[1366px]:text-base min-[1366px]:font-normal min-[1366px]:py-3 min-[1366px]:pr-0">Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.</p>,
  },
  {
    key: "3",
    label: <h4 className="font-bold text-[#2f1533] min-[375px]:text-[16px] leading-5 min-[1366px]:text-lg min-[1366px]:mt-[6px]">Can I use Frontend Mentor projects in my portfolio?</h4>,
    children:
      <p className="text-[#8c6991] leading-[1.3rem] pr-3 py-1 min-[1366px]:text-base min-[1366px]:font-normal min-[1366px]:py-3 min-[1366px]:pr-0">Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!</p>,
  },
  {
    key: "4",
    label: <h5 className="font-bold text-[#2f1533] min-[375px]:text-[16px] leading-5 min-[1366px]:text-lg min-[1366px]:mt-[6px]">How can I get help if I'm stuck on a challenge?</h5>,
    children:
      <p className="text-[#8c6991] leading-[1.3rem] pr-3 py-1 min-[1366px]:text-base min-[1366px]:font-normal min-[1366px]:py-3 min-[1366px]:pr-0">The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.</p>,
  },
];

const Accordian: React.FC = () => (
  <Collapse
    items={items}
    bordered={false}
    className="collapse-component font-work_sans bg-transparent !w-full"
    expandIconPosition="right" 
    expandIcon={({ isActive }) =>
      isActive ? (
        <MinusCircleFilled className="!text-xl !text-[#2f1533] min-[375px]:!text-2xl min-[1366px]:mt-0 min-[1366px]:mr-1"/>
      ) : (
        <PlusCircleFilled className="!text-[#AD28EB] !text-xl min-[375px]:!text-2xl min-[1366px]:-mt-1 min-[1366px]:mr-1" />
      )
    }
    defaultActiveKey={["1"]}
  />
);

export default Accordian;
