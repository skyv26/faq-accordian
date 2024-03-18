import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import expand_icon from "./assets/icon-plus.svg";
import collapse_icon from "./assets/icon-minus.svg";

const CustomIcon = ({ img }: { img: string }) => {
  return <img src={img} alt="" />;
};

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "What is Frontend Mentor, and how will it help me?",
    children:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    key: "2",
    label: "Is Frontend Mentor free?",
    children:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    key: "3",
    label: "Can I use Frontend Mentor projects in my portfolio?",
    children:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    key: "4",
    label: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    children:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

const Accordian: React.FC = () => (
  <Collapse
    items={items}
    bordered={false}
    expandIconPosition="right"
    expandIcon={({ isActive }) =>
      isActive ? (
        <CustomIcon img={collapse_icon} />
      ) : (
        <CustomIcon img={expand_icon} />
      )
    }
    defaultActiveKey={["1"]}
  />
);

export default Accordian;
