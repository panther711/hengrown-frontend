import React from 'react';
import './index.css';
import Header from "../../components/Header";
import Sidenav from "../../components/Sidenav";
import Sidebar from "../../components/Sidebar";
import { Col, Row, Alert, Button } from 'react-bootstrap';

import greenhouse from '../../assets/images/greenhouse.svg'
import amnesia from '../../assets/images/amnesia.png'
import Plantcard from '../../components/Plantcard';

const plants:any = [
    {
        img: amnesia,
        name: 'Amnesia'
    },
    {
        img: amnesia,
        name: 'Amnesia'
    },
    {
        img: amnesia,
        name: 'Amnesia'
    },
    {
        img: amnesia,
        name: 'Amnesia'
    },
    {
        img: amnesia,
        name: 'Amnesia'
    }
]

const Greenhouse:React.FC = () => {
    const Empty = () => <div>
        <Alert className='hengrown-alert'>
            All of your plants are listed here. You can see some important information such as cloning & rooting days, vegetation & mass days, and any other information.
        </Alert>
        <div className='hengrown-greenhouse-empty' >
            <div className='hengrown-placeholder'>
                <img alt='Greenhouse Empty' src={greenhouse} />
                <h3>Oops, your green house is empty...</h3>
                <p>Looks like you don’t have any plantations in you green house yet. You can buy your seed at the clone shop. Wanna check it?</p>
                <Button variant="primary" type="submit" className='hengrown-button'>
                    Go to Clone Shop
                </Button>
            </div>
        </div>
    </div>

    const NotEmpty = (Props:any) => {
    return <div>
        {Props.plants.map((plant:any) => <Plantcard data={plant} />)}
    </div>}
    
    return (
        <div>
            <Sidenav page_index={0} />
            <Header />
            <Row className='hengrown-main-page'>
                <Col md='auto' className='hengrown-sidebar-col'>
                    <Sidebar />
                </Col>
                <Col className='hengrown-main-content'>
                    <h1>My Green house</h1>
                    {plants.length ? <NotEmpty plants={plants}/> : <Empty />}
                </Col>
            </Row>
        </div>
    )
}

export default Greenhouse;