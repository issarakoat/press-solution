import React from 'react';
import {Row,Accordion, Card, Button} from 'react-bootstrap'
import PhotoesGallery from '../components/PhotoesGallery'
import SLAB2Data from '../data/Repair_SLAB2Data'
import ChinFongData from '../data/Repair_ChinFongData'
import SchulerData from '../data/Repair_SchulerData'
import AIDA_Data from '../data/Repair_AIDA_Data'
function VTErepair(){
    const SLAB2 = SLAB2Data.map(item=>
        <PhotoesGallery id={item.id} img={item.img}/>)
    const ChinFong = ChinFongData.map(item=>
        <PhotoesGallery id={item.id} img={item.img}/>)
    const Schuler = SchulerData.map(item=>
        <PhotoesGallery id={item.id} img={item.img}/>)
    const AIDA = AIDA_Data.map(item=>
        <PhotoesGallery id={item.id} img={item.img}/>)

    return(
    <div>
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    SLAB2 Change Hight Speed Shaft (JIER)
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Row>{SLAB2}</Row>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    CHIN FONG
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                <Row>{ChinFong}</Row>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    Cushion repairing for “Schuler” Press
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                <Row>{Schuler}</Row>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    Repairing works for -AIDA- Press 60 tons
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                <Row>{AIDA}</Row>
                </Accordion.Collapse>
            </Card>
    
        </Accordion>
    </div>
)}
export default VTErepair;