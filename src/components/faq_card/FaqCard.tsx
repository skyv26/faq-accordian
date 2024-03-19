import { Col, Row } from "antd"
import STAR_ICON from '../../assets/icon-star.svg';
import Accordian from "../accordian/Accordian";

const FaqCard = () => {
  return (
    <div className="bg-white py-4 px-4 w-11/12 m-auto mt-36 rounded-lg">
        <Row align="middle" gutter={24} justify="start" >
            <Col>
            <img src={STAR_ICON} alt="" className="size-6" />
            </Col>
            <Col>
            <h1 className="font-work_sans font-bold text-[#2f1533] text-[2rem]">FAQs</h1>
            </Col>
        </Row>
        <Row>
            <Accordian />
        </Row>
    </div>
  )
}

export default FaqCard