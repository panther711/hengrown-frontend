import React, { useState } from 'react';
import './Login.css';
import { Form, Button, Row, Col, Navbar, Nav } from 'react-bootstrap';
import logo_w from './../../assets/images/logo-white.svg';
import logo_c from './../../assets/images/logo-colorful.svg';

const Login: React.FC = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [agree, setAgree] = useState('');
  
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // Handle login logic here
    }

    const handleShowPasswordClick = () => {
        setShowPassword(!showPassword);
    }

    return (
        <Row>
            <Col md={6} className='login-bg'>
                <img src={logo_w} height={40} alt='Hengrown Logo' className='hengrown-logo' />
            </Col>
            <Col md={6}/>
            <Col md={6} className='hengrown-signup-field'>
                <Form onSubmit={handleSubmit}>
                    <Row className="justify-content-center">
                        <Col md={8} sm={10} xs={10}> 
                            <Navbar expand="md" className='hengrown-navbar'>
                                <Navbar.Toggle className="hengrown-navbar-nav" />
                                <img src={logo_c} height={40} alt='Hengrown Colored Logo' className='hengrown-logo colored'/>
                                <Navbar.Collapse className='hengrown-navbar'>
                                    <Nav.Link href="#" className='hengrown-nav-link'>How it works</Nav.Link>
                                    <Nav.Link href="#" className='hengrown-nav-link'>FAQ</Nav.Link>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={8} sm={10} xs={10}>
                            <Form.Label className='hengrown-login-header login'>Log <p className='painted'>In</p></Form.Label>
                            <p className='hengrown-subtitle-label login'>
                                Don't have an account? <Nav.Link href="signup" className='painted'>Sign up.</Nav.Link>
                            </p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={8} sm={10} xs={10}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className='hengrown-label login'>Email</Form.Label>
                                <Form.Control className='hengrown-input login' type="email" value={email} onChange={event => setEmail(event.target.value)} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={8} sm={10} xs={10} className='justify-content-start'>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className='hengrown-label login'>Password</Form.Label>
                                <Form.Control className='hengrown-input login' type={showPassword ? "text" : "password"} value={password} onChange={event => setPassword(event.target.value)} />
                                <Form.Text className='hengrown-passwd-toggle-btn login' onClick={handleShowPasswordClick}>
                                    {showPassword? 'hide' : 'show'}
                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={8} sm={10} xs={10} className='justify-content-start'>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Check className='hengrown-check login' color='success'
                                    type="checkbox"
                                    value={agree}
                                    onChange={event => setAgree(event.target.value)}
                                    label={<p className='hengrown-check-label login'>
                                        I agree to Platform <Nav.Link href="#" className='painted'>Terms of Services</Nav.Link> and <Nav.Link href="#" className='painted'>Privacy Policies</Nav.Link>.
                                    </p>}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={8} sm={10} xs={10} className='justify-content-start'>
                            <Button variant="primary" type="submit" className='hengrown-button login'>
                                Login
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    )
}

export default Login;