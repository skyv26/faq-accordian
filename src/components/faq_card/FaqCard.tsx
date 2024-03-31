import { Col, Row } from "antd"
import STAR_ICON from '../../assets/icon-star.svg';
import Accordian from "../accordian/Accordian";

const FaqCard = () => {
  return (
    <div className="bg-white p-4 w-11/12 m-auto mt-36 rounded-lg min-[375px]:w-[86%] min-[375px]:px-5 md:w-7/12 xl:w-5/12 xl:mt-[168px] xl:rounded-xl min-[1366px]:px-10 min-[1366px]:py-8 min-[1366px]:font-extrabold min-[1366px]:pb-[19px]">
        <Row align="middle" gutter={24} justify="start">
            <Col>
            <img src={STAR_ICON} alt="" className="size-7 min-[1366px]:size-10" />
            </Col>
            <Col>
            <h1 className="font-work_sans font-bold text-[#2f1533] text-[2rem] min-[1366px]:text-[55px] min-[1366px]:tracking-wide">FAQs</h1>
            </Col>
        </Row>
        <Row>
            <Accordian />
        </Row>
    </div>
  )
}

export default FaqCard