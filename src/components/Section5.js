import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import hero_img4 from '../pictures/hero_img4.png';
import hero_img5 from '../pictures/hero_img5.png';
import hero_img6 from '../pictures/hero_img6.png';
import hero_img7 from '../pictures/hero_img7.png';

const Section5 = () => {
    return (
        <div className='space3'>
            <Container className='space8'>
  <Row>
    <Col xs={12} md={8} >
     <h2 className='section5_h2' >Trending stories</h2>
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
<img src={hero_img4} className='trending' />
<div  className='tag3'> <p className='heading'>  <strong>The many benefits of taking a healing holiday</strong> </p> <br/> Healing holidays are on the rise to help maximize your health and happiness...<br/>
<Link to='/readmore1'> <button className='button_white2'> <strong>
    Read more 
    </strong>  </button></Link>
</div> 
</Col>
<Col xs={12} md={3}>
<img src={hero_img5} className='trending' />
<div  className='tag4'><p className='heading'><strong>The best koyoto restaurant to try Japanese food</strong> </p> <br/> From tofu to teahouses, here's our guide to koyoto's best restaurants to visit... <br/>
<Link to='/readmore1'> <button className='button_white2'> <strong>
    Read more 
    </strong>  </button></Link>
 </div> 

</Col>
<Col xs={12} md={3}>
<img src={hero_img6} className='trending' />
<div  className='tag5'> <p className='heading'> <strong>Skip Chichen Itza and head
to this remote Yucatan</strong></p> <br/> It’s remote and challenging to get,
but braving the jungle and exploring
these ruins without the...<br/>
<Link to='/readmore1'> <button className='button_white2'> <strong>
    Read more 
    </strong>  </button></Link>
</div> 
</Col>
<Col xs={12} md={3}>
<img src={hero_img7} className='trending' />
<div  className='tag6'> <p className='heading'> <strong>Surf’s up at these beginner
spots around the world</strong></p> <br/> If learning to surf has in on your to-
do list for a while, the good news
is: it’s never too late...<br/>
<Link to='/readmore1'> <button className='button_white2'> <strong>
    Read more 
    </strong>  </button></Link>
</div> 
</Col>
</Row>
</Container>
        </div>
        </div>
    )
}

export default Section5
