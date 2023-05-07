
import CarouselSlide from "../../components/carousel-slide/CarouselSlide.componet.jsx";
import { Outlet } from "react-router-dom";
import { Col, Image, Row } from "react-bootstrap";
import HardCard from "../../components/hard-card/HardCard.component.jsx";
import Footer from "../../../../components/footer/Footer.component.jsx";


export function Home() {
  

  return (
    <>
      <Outlet />
      <h1>Feature</h1>
      <CarouselSlide />
      <br></br>
      <h1 className="text-danger">Shopping Now!!</h1>
      <Row>
        <Col>
          <HardCard imgUrl="/imgs/keyboards.jpeg" text="KEYBOARD"/>
        </Col>
        <Col>
          <HardCard imgUrl="/imgs/mouses.jpg" text="MOUSE"/>
        </Col>
        <Col>
          <HardCard imgUrl="/imgs/speakers.jpg" text="SPEAKER"/>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col>
          <HardCard imgUrl="/imgs/ram.jpg" text="RAM"/>
        </Col>
        <Col>
          <HardCard imgUrl="/imgs/cpu.jpg" text="CPU"/>
        </Col>
      </Row>
      <Footer />
    </>
  )
}
