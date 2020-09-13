import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CarouselStack1 from "./CarouselStack1";

import "bootstrap";
import $ from "jquery";

const Section4 = () => {
  // $(".carousel").carousel({
  //   interval: false,
  // });

  return (
    <div>
      <Container className="space6">
        <Row>
          <Col className='section4_col' xs={12} md={6} lg={6}>
            <div>
              <h2 className="title3">Testimonials</h2>
              <span className="star"> <i className="fas fa-star"></i></span>
              <span className="star"> <i className="fas fa-star"></i></span>
              <span className="star"> <i className="fas fa-star"></i></span>
              <span className="star"> <i className="fas fa-star"></i></span>
              <span className="star"> <i className="fas fa-star"></i></span>

              <p className="testimonial_p">
              “Quisque in lacus a urna fermentum <br /> euismod. Integer mi nibh, dapibus ac <br /> scelerisque eu, facilisis quis purus. Morbi <br /> blandit sit amet turpis nec”
              </p>

              {/* <div
                id="carousel_2"
                className="carousel slide carol2"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="card" style={{ width: "18rem" }}>
                      <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <a href="#" className="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="card" style={{ width: "18rem" }}>
                      <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        
                        <a href="#" className="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="card">
                      <div className="card-body">
                        <p className="testimonial_p">
                          "Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aliquam ut risus volutpat felis tempor pharetra
                          semper id orci. Donec ac eros tincidunt, viverra diam
                          ac, finibus augue. Donec maximus faucibus diam quis
                          mollis."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

            <div>
              <h3 className="testimonial_h3">Edward Newgate</h3>
              <p className="testimonial_p1">Founder Circle</p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <CarouselStack1 className="avatar1" />
            <div className="tag2"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section4;
