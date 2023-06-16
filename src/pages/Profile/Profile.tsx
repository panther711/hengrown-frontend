import React, { useState } from 'react';
import './Profile.css';
import { Navbar, Nav, Row, Col, Card, Button, Form } from "react-bootstrap";
import logo_c from '../../assets/images/logo-colorful.svg';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Profile:React.FC = () => {
    const [state, setState] = useState({file: '', imagePreviewUrl: ''});
    const [info, setInfo] = useState({
        firstname: '',
        lastname: '',
        gender: '',
        birthday: '',
        email: '',
        address: '',
        country: '',
        city: '',
        zipcode: '',
        phone: '',
        telegram: '',
    });
    interface ImgUploadProps {
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
        src: string;
      }
      
    const ImgUpload = ({ onChange, src }: ImgUploadProps) => (
        <label htmlFor="photo-upload" className="custom-file-upload fas hengrown-img-upload">
            <div className="img-wrap img-upload hengrown-img-upload">
                {src ?
                <img src={src} alt='user profile' className='hengrown-img-upload' />:
                <Icon icon="solar:camera-linear" className='hengrown-camera-icon painted' />}
            </div>
            <input className='hengrown-img-upload' id="photo-upload" type="file" onChange={onChange} accept="image/*" />
        </label>
    );
    const photoUpload = (e: any) =>{
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        console.log(reader.result);
        reader.onloadend = () => {
            setState({
                file: file,
                imagePreviewUrl: String(reader.result)
            });
        }
        reader.readAsDataURL(file);
    }
    
    const handleInput = (field: string, value: any) => {
        switch (field) {
            case 'firstname':
                setInfo({
                    ...info,
                    firstname: value
                })
                break;
            case 'lastname':
                setInfo({
                    ...info,
                    lastname: value
                })
                break;
            case 'gender':
                setInfo({
                    ...info,
                    gender: value
                })
                break;
            case 'birthday':
                setInfo({
                    ...info,
                    birthday: value
                })
                break;
            case 'email':
                setInfo({
                    ...info,
                    email: value
                })
                break;
            case 'address':
                setInfo({
                    ...info,
                    address: value
                })
                break;
            case 'country':
                setInfo({
                    ...info,
                    country: value
                })
                break;
            case 'city':
                setInfo({
                    ...info,
                    city: value
                })
                break;
            case 'zipcode':
                setInfo({
                    ...info,
                    zipcode: value
                })
                break;
            case 'phone':
                setInfo({
                    ...info,
                    phone: value
                })
                break;
            case 'telegram':
                setInfo({
                    ...info,
                    telegram: value
                })
                break;
        
            default:
                break;
        }
    }

    const handleSubmit = (data: any) => {
        console.log(data);
    }

    const {firstname, lastname, gender, birthday, email, address, country, city, zipcode, phone, telegram} = info;

    return (
        <div>
            <Navbar className='hengrown-navbar profile'>
                <Navbar.Brand href='#'>
                    <img src={logo_c} height={40} alt='Hengrown Colored Logo' className='hengrown-logo-profile'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav profile" />
                <Navbar.Collapse className='hengrown-navbar-content profile'>
                    <Nav.Link href="#" className='hengrown-nav-link profile'>How it works</Nav.Link>
                    <Nav.Link href="#" className='hengrown-nav-link profile'>FAQ</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
            <div className='hengrown-profile'>
                <Row className='hengrown-profile-content'>
                    <Col md="3" className='hengrown-profile-instruction'>
                        <h3>Setting up your account</h3>
                        <p>Complete all the information below to continue. You may skip this part, but you will need to complete all the fields below to start investing.</p>
                    </Col>
                    <Col md="9" className='hengrown-profile-setup'>
                        <h3>Account Setup</h3>
                        <p className='painted'>
                            <Icon icon="fluent-emoji-high-contrast:information" className='hengrown-profile-icon' />Skip this step
                        </p>
                        <Card className='hengrown-card'>
                            <Card.Header className='hengrown-card-header'>Profile Picture</Card.Header>
                            <Card.Body className='hengrown-card-body'>
                                <Row>
                                    <Col md='auto' className='hengrown-col'>
                                        <ImgUpload onChange={photoUpload} src={state.imagePreviewUrl}/>
                                    </Col>
                                    <Col className='hengrown-col'>
                                        <p>We recommend you to use clear frontal face for your profile picture. Be sure to use a photo that clearly shows your face and doesn’t include any personal or sensitive information.</p>
                                        <Button variant="primary" type="submit" className='hengrown-button profile'>
                                            Upload photo
                                        </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card className='hengrown-card'>
                            <Card.Header className='hengrown-card-header'>Personal Information</Card.Header>
                            <Card.Body className='hengrown-card-body'>
                            <Form className='hengrown-info-form' onSubmit={handleSubmit}>
                                <Form.Group controlId="firstname" className='hengrown-formgroup profile'>
                                    <Row>
                                        <Col md={3} className='d-flex hengrown-label profile'>
                                            <Form.Label className='hengrown-label profile'>First Name</Form.Label>
                                        </Col>
                                        <Col md={9}>
                                            <Form.Control className='hengrown-input profile' type="text"
                                                value={firstname}
                                                onChange={event => handleInput('firstname', event.target.value)}
                                            />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group controlId="lastname" className='hengrown-formgroup profile'>
                                    <Row>
                                        <Col md={3} className='d-flex hengrown-label profile'>
                                            <Form.Label className='hengrown-label profile'>Last Name</Form.Label>
                                        </Col>
                                        <Col md={9}>
                                            <Form.Control className='hengrown-input profile' type="text"
                                                value={lastname}
                                                onChange={event => handleInput('lastname', event.target.value)}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={3} className='d-flex hengrown-label profile'/>
                                        <Col md={9}>
                                            <p style={{marginTop: 10, marginBottom: 10}}>Anyone will only be able to read your first name.</p>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group controlId="gender" className='hengrown-formgroup profile'>
                                    <Row>
                                        <Col md={3} className='d-flex hengrown-label profile'>
                                            <Form.Label className='hengrown-label profile'>Genders</Form.Label>
                                        </Col>
                                        <Col md={9}>
                                            <Form.Select className='hengrown-input profile'
                                                placeholder='Select Gender'
                                                value={gender}
                                                onChange={event => handleInput('gender', event.target.value)}
                                            >
                                                <option className="custom-option"></option>
                                                <option className="custom-option" value="Male">Male</option>
                                                <option className="custom-option" value="Female">Female</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group controlId="birthday" className='hengrown-formgroup profile'>
                                    <Row>
                                        <Col md={3} className='d-flex hengrown-label profile'>
                                            <Form.Label className='hengrown-label profile'>Date of Birth</Form.Label>
                                        </Col>
                                        <Col md={9}>
                                            <Form.Control className='hengrown-input profile' type='date'
                                                placeholder='Select Date'
                                                value={birthday}
                                                onChange={event => handleInput('birthday', event.target.value)}
                                            />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group controlId="email" className='hengrown-formgroup profile'>
                                    <Row>
                                        <Col md={3} className='d-flex hengrown-label profile'>
                                            <Form.Label className='hengrown-label profile'>Email Address</Form.Label>
                                        </Col>
                                        <Col md={9}>
                                            <Form.Control className='hengrown-input profile' type="text"
                                                value={email}
                                                onChange={event => handleInput('email', event.target.value)}
                                            />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group controlId="address" className='hengrown-formgroup profile'>
                                    <Row>
                                        <Col md={3} className='d-flex hengrown-label profile'>
                                            <Form.Label className='hengrown-label profile'>Address</Form.Label>
                                        </Col>
                                        <Col md={9}>
                                            <Form.Control as={'textarea'} className='hengrown-input profile'
                                                onChange={event => console.log(event)}//handleInput('address', event.target.text)}
                                            >
                                                {address}
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group controlId="zipcode" className='hengrown-formgroup profile'>
                                    <Row>
                                        <Col md={3} className='d-flex hengrown-label profile'>
                                            <Form.Label className='hengrown-label profile'>Zip Code</Form.Label>
                                        </Col>
                                        <Col md={9}>
                                            <Form.Control className='hengrown-input profile' type="text"
                                                value={zipcode}
                                                onChange={event => handleInput('zipcode', event.target.value)}
                                            />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group controlId="phone" className='hengrown-formgroup profile'>
                                    <Row>
                                        <Col md={3} className='d-flex hengrown-label profile'>
                                            <Form.Label className='hengrown-label profile'>Phone No.</Form.Label>
                                        </Col>
                                        <Col md={9}>
                                            <Form.Control className='hengrown-input profile' type="text"
                                                value={phone}
                                                onChange={event => handleInput('phone', event.target.value)}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={3} className='d-flex hengrown-label profile'/>
                                        <Col md={9}>
                                            <p style={{marginTop: 10, marginBottom: 10}}>
                                                You will need to verify your phone number. Click to&nbsp;
                                                <Link to={phone ? `/phone-verify?phone=${phone}` : '#'} className='painted verify-link'>
                                                    <p className='responsive-upper'>v</p>erify
                                                </Link>
                                                &nbsp;my phone number.</p>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group controlId="telegram" className='hengrown-formgroup profile'>
                                    <Row>
                                        <Col md={3} className='d-flex hengrown-label profile'>
                                            <Form.Label className='hengrown-label profile'>Telegram No.</Form.Label>
                                        </Col>
                                        <Col md={9}>
                                            <Form.Control className='hengrown-input profile' type="text"
                                                value={telegram}
                                                onChange={event => handleInput('telegram', event.target.value)}
                                            />
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Profile;