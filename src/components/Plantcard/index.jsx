import React from 'react';
import './index.css';
import { Card, CardImg, Col, Row } from 'react-bootstrap';
import MilestoneProgress from '../MilestoneProgress';

const Plantcard = ({data}) => {
  return (
    <Card className='hengrown-plantcard'>
        <Row>
            <div md='auto' className='hengrown-plantcard-imgholder'>
                <CardImg alt='Plant' src={data.img} className='hengrown-plantcard-card-img' />
            </div>
            <Col md={10} className='hengrown-plantcard-card-content'>
                <Row>
                    <Col sm='2' md='3' className='hengrown-plantcard-title'>
                        <h3>Amnesia</h3>
                        <h6>January 6th, 2023</h6>
                    </Col>
                    <Col sm='8' md='6' className='hengrown-plantcard-info'>
                        <Row className='hengrown-info-row'>
                            <Col md='4' className='hengrown-infobox'>
                                <h4>Seed Price</h4>
                                <h6>USD 20/gr</h6>
                            </Col>
                            <Col md='4' className='hengrown-infobox'>
                                <h4>Weight</h4>
                                <h6>20gr</h6>
                            </Col>
                            <Col md='4' className='hengrown-infobox'>
                                <h4>Total Price</h4>
                                <h6>USD 400</h6>
                            </Col>
                        </Row>
                        <Row className='hengrown-info-row'>
                            <Col md='4' className='hengrown-infobox'>
                                <h4>Sell Price</h4>
                                <h6>USD 10/gr</h6>
                            </Col>
                            <Col md='4' className='hengrown-infobox'>
                                <h4>Harvest</h4>
                                <h6>80gr</h6>
                            </Col>
                            <Col md='4' className='hengrown-infobox'>
                                <h4>Total Price</h4>
                                <h6>USD 800</h6>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm='2' md='3' className='hengrown-plantcard-summary'>
                        <h3>USD 400</h3>
                        <h6 className='painted'>Estimated Profits</h6>
                    </Col>
                </Row>
                <Row className='hengrown-milestones'>
                    <MilestoneProgress />
                </Row>  
            </Col>
        </Row>
    </Card>
  );
};

export default Plantcard;