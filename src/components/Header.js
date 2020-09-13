import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import header_img from '../pictures/header_img.png';
import Form from './Form';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Container className='space3'>
  <Row>
    <Col xs={12} md={8} lg={8}>
      <h1 className='title' >Explore and<br/> Travel</h1>
      
      <h4> Holiday finder </h4>
      <hr className='hero_line' />

      <div className="row space2">
  <div className="col-6 col-sm-3 space1">
  <Form  for='location' id='location' name='location' 
      disabled='Location'
      value1='Paris' value1name='Paris'
      value2='London' value2name='London'
       />
  </div>
  <div className="col-6 col-sm-3">
  <Form  for='Activity' id='Activity' name='Activity' 
      disabled='Activity'
      value1='Paris' value1name='Paris'
      value2='London' value2name='London'
       />
  </div>
  </div>
  <br/>
      <div className="row">
  <div className="col-6 col-sm-3 space1">
  <Form  for='Grade' id='Grade' name='Grade' 
      disabled='Grade'
      value1='Paris' value1name='Paris'
      value2='London' value2name='London'
       />
  </div>
  <div className="col-6 col-sm-3">
  <Form  for='Date' id='Date' name='Date' 
      disabled='Date'
      value1='Paris' value1name='Paris'
      value2='London' value2name='London'
       />
  </div>
  </div>

  <Link to='/explore'> <button className='button_orange1'> Explore </button></Link>

    </Col>
    <Col xs={6} md={4} lg={4}>
      <img src={header_img} className='hero_img' />
    </Col>
  </Row>
  </Container>
        </div>
    )
}

export default Home
