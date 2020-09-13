import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import hero_img3 from "../pictures/hero_img3.png";
const Section3 = () => {
  return (
    <div>
      <Container className="space6">
        <Row>
          <Col xs={12} md={6} lg={6}>
            <div className='section3_div'>
              <h2 className='section3_h2'>Guides by Thousand<br/> Sunny</h2>
              <p className='section3_p'>
              Packed with tips and advice from our on-the-ground <br /> experts, our city guides app (iOS and Android) is the <br /> ultimate resource before and during a trip.
              </p>
            </div>
            <Link to="/learnmore">
              <button className="button_orange1"> Learn more </button>
            </Link>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <img src={hero_img3} className='hero_img3' />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section3;
