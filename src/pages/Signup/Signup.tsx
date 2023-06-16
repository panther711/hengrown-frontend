import React, { useState } from 'react';
import './Signup.css';
import { Form, Button, Row, Col, Navbar, Nav } from 'react-bootstrap';
import logo_w from './../../assets/images/logo-white.svg';
import logo_c from './../../assets/images/logo-colorful.svg';
import { useModalContext } from "../../hook/useModalContext";
import MyModal from "../../components/modals/vModal";

const Signup: React.FC = () => {
    const {setShowModal} = useModalContext();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [agree, setAgree] = useState('');
  
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // Handle login logic here
      setShowModal(true);
    }

    const handleShowPasswordClick = () => {
        setShowPassword(!showPassword);
    }

    return (
        <Row>
            <MyModal />
            <Col md={6} className='login-bg'>
                <img src={logo_w} height={40} alt='Hengrown Logo' className='hengrown-logo' />
            </Col>
            <Col md={6}/>
            <Col md={6} className='hengrown-signup-field'>
                <Form onSubmit={handleSubmit}>
                    <Row className="justify-content-center">
                        <Col md={8} sm={10} xs={10}> 
                            <Navbar expand="md" className='hengrown-navbar signup'>
                                <img src={logo_c} height={40} alt='Hengrown Colored Logo' className='hengrown-logo colored'/>
                                <Navbar.Toggle className="hengrown-navbar-nav signup" />
                                <Navbar.Collapse className='hengrown-navbar-content signup'>
                                    <Nav.Link href="#" className='hengrown-nav-link signup'>How it works</Nav.Link>
                                    <Nav.Link href="#" className='hengrown-nav-link signup'>FAQ</Nav.Link>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={8} sm={10} xs={10}>
                            <Form.Label className='hengrown-signup-header signup'>Sign <p className='painted'>Up</p></Form.Label>
                            <p className='hengrown-subtitle-label signup'>
                                Already have an account? <Nav.Link href="login" className='painted'>Log in.</Nav.Link>
                            </p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={8} sm={10} xs={10}>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Label className='hengrown-label signup'>Username</Form.Label>
                                <Form.Control className='hengrown-input signup' type="text" value={username} onChange={event => setUsername(event.target.value)} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={8} sm={10} xs={10}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className='hengrown-label signup'>Email</Form.Label>
                                <Form.Control className='hengrown-input signup' type="email" value={email} onChange={event => setEmail(event.target.value)} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={8} sm={10} xs={10} className='justify-content-start'>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className='hengrown-label signup'>Password</Form.Label>
                                <Form.Control className='hengrown-input signup' type={showPassword ? "text" : "password"} value={password} onChange={event => setPassword(event.target.value)} />
                                <Form.Text className='hengrown-passwd-toggle-btn signup' onClick={handleShowPasswordClick}>
                                    {showPassword? 'hide' : 'show'}
                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={8} sm={10} xs={10} className='justify-content-start'>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Check className='hengrown-check signup' color='success'
                                    type="checkbox"
                                    value={agree}
                                    onChange={event => setAgree(event.target.value)}
                                    label={<p className='hengrown-check-label signup'>
                                        I agree to Platform <Nav.Link href="#" className='painted'>Terms of Services</Nav.Link> and <Nav.Link href="#" className='painted'>Privacy Policies</Nav.Link>.
                                    </p>}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={8} sm={10} xs={10} className='justify-content-start'>
                            <Button variant="primary" type="submit" className='hengrown-button signup'>
                                Signup
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    )
}

export default Signup;