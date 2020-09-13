import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../pictures/logo.png";

const Footer = () => {
  return (
    <Fragment>
      <div className=" footer">
        <div className="footer_div">
          <img src={logo} className="logo" />
          <br />
          <p className="footer_p">
            Plan and book your perfect trip with expert advice, travel tips
            destination information from us
          </p>

          <p>&copy; 2020 Thousand Sunny. All rights reserved</p>
        </div>

        <div className="mine">
          <h4 className='heads'>Destinations</h4>
    
          <p>Africa</p>
          <p>Antarctica</p>
          <p>Asia</p>
          <p>Europe</p>
          <p>America</p>
        </div>

        <div className="mine">
          <h4 className='heads'>Shop</h4>
    
      <p>Destination Guide</p>
      <p>Pictorial & Gifts</p>
      <p>Special Offers</p>
      <p>Delivery Times</p>
      <p>FAQs</p>
        </div>

        <div className="mine">
          <h4 className='heads'>Interests</h4>
          
      <p>Adventure Travel</p>
      <p>Art And Culture</p>
      <p>Wildlife And Nature</p>
      <p>Family Holidays</p>
      <p>Food And Drink</p>
        </div>
    <hr className="footer_line" />
      </div>
      <div className='footer_icons'>
      <i className="fab fa-twitter twitter" />
      <i class="fab fa-facebook-f facebook" />
      <i class="fab fa-instagram instagram"/>
      <i class="fab fa-linkedin-in linkedin" />
      <i class="fab fa-youtube youtube" />
      </div>
    </Fragment>
  );
};

export default Footer;
