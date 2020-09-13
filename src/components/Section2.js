import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Raja from '../pictures/Raja.png'
import Fanjinshan from '../pictures/Fanjinshan.png';
import Vevey from '../pictures/Vevey.png';
import Skadar from '../pictures/Skadar.png'

const Section2 = () => {
    return (
        <div>
            <Container className='space5'>
  <Row>
    <Col xs={12} md={8} >
     <h2 >Featured Destination</h2>
    </Col>
    <Col xs={6} md={4}>
    <Link to='/viewall'> <button className='button_white1'> <strong>
    View all <i class="fas fa-angle-right rightangle" />
    </strong>  </button></Link>
    </Col>
  </Row>
  </Container>

  <div>
  <Container>
<Row>
<Col xs={12} md={3}>
<img src={Raja}  />
<div  className='tag'> <strong>Raja Ampat</strong> <br/> Indonesia</div> 
</Col>
<Col xs={12} md={3}>
<img src={Fanjinshan}  />
<div  className='tag'><strong>Fanjinshan</strong> <br/> China</div> 
</Col>
<Col xs={12} md={3}>
<img src={Vevey} />
<div  className='tag'> <strong>Vevey</strong> <br/> Switzerland</div> 
</Col>
<Col xs={12} md={3}>
<img src={Skadar}  />
<div  className='tag'> <strong>Skadar</strong> <br/> Montenegro</div> 
</Col>
</Row>
</Container>
  </div>
        </div>
    )
}

export default Section2
