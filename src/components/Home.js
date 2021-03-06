import React from 'react';
import {Container,Carousel,Image,Row,Col, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../styles/landing.css'

class Hompage extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.handleSelect = this.handleSelect.bind(this);
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
      return (
        <div className='home_container'>
            <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}
            >
            <Carousel.Item>
              <div className='img-bg-color'>
                <Nav.Link href='http://www.xuduan.com.cn/Products/straight/index.html' target="_blank" rel="noopener noreferrer">
                    <Image
                    src="/images/xuduan_pics/JE25_wt.png"
                    fluid                  
                    />
                  </Nav.Link>
              </div>              
            </Carousel.Item>
            <Carousel.Item>
              <div className='img-bg-color'>
                <Nav.Link href='http://www.xuduan.com.cn/Products/side/index.html' target="_blank" rel="noopener noreferrer">
                    <Image
                    src="/images/xuduan_pics/YX41-1000_wt.png"
                    fluid                    
                    />
                  </Nav.Link>
                  </div>
            </Carousel.Item>
            <Carousel.Item>
              
            <div className='img-bg-color'>
                <Nav.Link href='http://www.xuduan.com.cn/Products/Servo%20Presses/index.html' target="_blank" rel="noopener noreferrer">
                    <Image
                    src="/images/xuduan_pics/Servo_press_wt.PNG"
                    fluid                    
                    />
                  </Nav.Link>
                    </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className='img-bg-color'>
                <Nav.Link href='http://www.xuduan.com.cn/Products/Precision%20%20High%20Speed%20Presses/index.html' target="_blank" rel="noopener noreferrer">
                    <Image
                    src="/images/xuduan_pics/JF75G-200c.PNG"
                    fluid                    
                    />
                  </Nav.Link>
                    </div>
                    <Carousel.Caption>
                    </Carousel.Caption>
             
            </Carousel.Item>
            <Carousel.Item>
              <div className='img-bg-color'>
                  <Nav.Link href='http://www.xuduan.com.cn/Products/C-Type%20Presses/index.html' target="_blank" rel="noopener noreferrer">
                    <Image
                    src="/images/xuduan_pics/JF36.PNG"
                    fluid                    
                    />
                  </Nav.Link>
                    </div>
            </Carousel.Item>
            </Carousel>

            <div className='marketing'>
              <div className='container_'>
                <Row>
                    
                    <Col lg={5}>
                      <Link to='/vte'>
                      <Container>
                          <Image roundedCircle src="/images/vte/banner_vte.jpg" width="250" height="140" />
                          <h2>VTE</h2>
                          <p>ประกอบกิจการ ซ่อม ติดตั้ง ขนย้าย และงานบำรุงรักษาเชิงป้องกันของเครื่องเพรส(เครื่องปั๊มโลหะ)</p>
                        </Container>
                      </Link>
                    </Col>
                   
                    <Col lg={2}></Col>
                    <Col lg={5}>
                      <Link to='/vte'>
                        <Container>
                          <Image roundedCircle src="/images/vtm/banner_vtm.jpg" width="250" height="140" />
                          <h2>VTM</h2>
                          <p>วีที แมชชีนเนอรี่ เป็นตัวแทนจำหน่ายเครื่องเพรสที่ราคา สมเหตุสมผลและมีคุณภาพตามมาตรฐานสากล</p>
                        </Container>
                        </Link>
                    </Col>
                    {/* <Col lg={4}>
                        <Image roundedCircle src="/test.jpg" width="140" height="140" />
                        <h2>Products Gallery</h2>
                        <p>สินค้าจาก Xuduan ที่เราเป็นผู้แทนจำหน่าย</p> */}
                        {/* <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p> */}
                    {/* </Col> */}
                  </Row>
                </div>
            </div>
            {/* <hr className="featurette-divider" />  */}
            {/* <Row>
            <Col lg={5}>
              <Image
                  // className="d-block w-100"
                  fluid
                  src="/m1.jpg"
                  />
              </Col>
            <Col lg={7}>
              <h2 className="featurette-heading">About Us <span className="text-muted">It'll blow your mind.</span></h2>
              <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </Col>
           </Row>
           <hr className="featurette-divider" />  */}

            
        </div>
      );
    }
  }
  
  export default Hompage