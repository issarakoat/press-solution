import React from 'react';
import {Row,Col} from 'react-bootstrap'
import '../styles/vtm.css'
const VTM = ()=> (
    <div className='vte-home'>
  
        <Row>
        <Col lg={4}>
                <div className='text'>
                <h1>วีที แมชชีนเนอรี่</h1>
                <p>วีที แมชชีนเนอรี่ เป็นตัวแทนจำหน่ายเครื่องเพรสที่ราคา 
                    สมเหตุสมผลและมีคุณภาพตามมาตรฐานสากล โดยเป็นผู้นำเข้าเครื่องเพรส 
                    "Xuduan" ดูแลและให้บริการ โดยทีมงานในประเทศไทย 
                    จึงสะดวกและรวดเร็วทันต่อความต้องการของลูกค้า โดยโรงงานผลิตอยู่ที่ประเทศจีน 
                </p>
                </div>
            </Col>
            <Col lg={8}>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" 
                src="https://www.youtube.com/embed/n6cf6XBuofI" 
                allowfullscreen
                title="vte vid at fair"/>
            </div>
            </Col>         
        </Row>

    </div>
)

export default VTM;