import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import hero_img2 from "../pictures/hero_img2.png";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <div>
     <Container>

  <Row>
    <Col xs={12} md={8} lg={6}>
      <img src={hero_img2} className='hero_img2' />
    </Col>
    <Col xs={12} md={4} lg={5} className='space4'>
    <div >
    <h2 className="title2">A new way to explore the <br/> world</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam ut risus volutpat felis tempor pharetra semper id
                  orci. Donec ac eros tincidunt, viverra diam ac, finibus augue.
                  Donec maximus faucibus diam quis mollis.
                </p>
                </div>
                <Link to='/learnmore'> <button className='button_orange1'> Learn more </button></Link>

    </Col>
  
  </Row>
  </Container>
    </div>
  );
};

export default Section1;


  