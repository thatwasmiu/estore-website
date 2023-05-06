import { Outlet } from "react-router-dom";
import "./About.style.css"
import { Col, Image, Row } from "react-bootstrap";

export function About() {
  return <>
    <Outlet />
    <h1>About</h1>
    <Row>
      <Col>
      <Image src="imgs/fumo.jpeg" thumbnail />
      </Col>
      <Col>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, odio in. Nulla sunt blanditiis quod ratione labore dolorum, distinctio possimus consequatur magni non et earum, deserunt praesentium? Quos, molestiae illo?
      </Col>
    </Row>
    
  </>
}
