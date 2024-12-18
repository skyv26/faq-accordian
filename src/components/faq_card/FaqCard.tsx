import { Col, Row } from "antd"
import STAR_ICON from '../../assets/icon-star.svg';
import Accordian from "../accordian/Accordian";

const FaqCard = () => {
  return (
    <div>
        <Row>
            <Col>
            <img src={STAR_ICON} alt="" />
            </Col>
            <Col>
            <h1>FAQ</h1>
            </Col>
        </Row>
        <Row>
            <Accordian />
        </Row>
    </div>
  )
}

export default FaqCard