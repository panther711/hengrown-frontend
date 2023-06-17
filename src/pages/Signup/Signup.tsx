import React, { useState } from "react";
import "./Signup.css";
import { Form, Button, Row, Col, Navbar, Nav, Toast } from "react-bootstrap";
import logo_w from "./../../assets/images/logo-white.svg";
import logo_c from "./../../assets/images/logo-colorful.svg";
import { useModalContext } from "../../hook/useModalContext";
import MyModal from "../../components/modals/vModal";
import axios from 'axios';
import { Icon } from '@iconify/react';
import { apiURL } from "../../constants";

const Signup: React.FC = () => {
  const { setShowModal } = useModalContext();
  const [danger, setDanger] = useState(false);
  const [dangerMessage, setDangerMessage] = useState("");
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [agree, setAgree] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle login logic here
    await axios.post(`${apiURL}users/signup`,{
      name: username,
      email,
      password,
      passwordConfirm: password
    }).then((response) => {
      console.log(response.data)
      setShowModal(true);
    }).catch(err => {
      // console.log(err);
      let msg = err.response.data.message||err.message;
      if ( msg.substr(0,6) === 'E11000' || msg.substr(0,9) === 'Duplicate' ) msg = "The email you enter has been used. Please Log in!";
      setDangerMessage(msg);
      setDanger(true)
    });
      
  };

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const validateUsername = (value: string) => {
    if (!value) {
      setUsernameError("Username is required");
      return false;
    }
    setUsernameError("");
    return true;
  };

  const validatePassword = (value: string) => {
    if (!value) {
      setPasswordError("Password is required");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const validateEmail = (value: string) => {
    if (!value) {
      setEmailError("Email is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailError("Invalid email format");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    setIsFormValid(validateUsername(event.target.value) &&
      validateEmail(email) &&
      validatePassword(password) &&
      agree);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setIsFormValid(validateUsername(username) &&
      validateEmail(email) &&
      validatePassword(event.target.value) &&
      agree);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setIsFormValid(validateUsername(username) &&
      validateEmail(event.target.value) &&
      validatePassword(password) &&
      agree);
  };

  const handleAgreeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgree(event.target.checked);
    setIsFormValid(validateUsername(username) &&
      validateEmail(email) &&
      validatePassword(password) &&
      event.target.checked);
  };

  return (
    <Row>
      <MyModal />
      <Col md={6} className="login-bg">
        <img
          src={logo_w}
          height={40}
          alt="Hengrown Logo"
          className="hengrown-logo"
        />
      </Col>
      <Col md={6} />
      <Col md={6} className="hengrown-signup-field">
        <Form onSubmit={handleSubmit}>
          <Row className="justify-content-center">
            <Col md={8} sm={10} xs={10}>
              <Navbar expand="md" className="hengrown-navbar">
                <Navbar.Toggle className="hengrown-navbar-nav" />
                <img
                  src={logo_c}
                  height={40}
                  alt="Hengrown Colored Logo"
                  className="hengrown-logo colored"
                />
                <Navbar.Collapse className="hengrown-navbar">
                  <Nav.Link href="#" className="hengrown-nav-link">
                    How it works
                  </Nav.Link>
                  <Nav.Link href="#" className="hengrown-nav-link">
                    FAQ
                  </Nav.Link>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={8} sm={10} xs={10}>
              <Toast onClose={() => setDanger(false)} show={danger} className="hengrown-toast-signup" bg="danger" delay={4000} autohide>
                <Toast.Body>
                  <Icon icon="solar:danger-triangle-linear" className="hengrown-danger-icon"></Icon>
                  {dangerMessage}
                </Toast.Body>
              </Toast>
              <Form.Label className="hengrown-signup-header signup">
                Sign <p className="painted">Up</p>
              </Form.Label>
              <p className="hengrown-subtitle-label signup">
                Already have an account?{" "}
                <Nav.Link href="/login" className="painted">
                  Log in.
                </Nav.Link>
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={8} sm={10} xs={10}>
              <Form.Group controlId="formBasicUsername">
                <Form.Label className="hengrown-label signup">
                  Username
                </Form.Label>
                <Form.Control
                  className={`hengrown-input signup ${
                    usernameError && "is-invalid"
                  }`}
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={8} sm={10} xs={10}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="hengrown-label signup">Email</Form.Label>
                <Form.Control
                  className={`hengrown-input signup ${
                    emailError && "is-invalid"
                  }`}
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={8} sm={10} xs={10} className="justify-content-start">
              <Form.Group controlId="formBasicPassword">
                <Form.Label className="hengrown-label signup">
                  Password
                </Form.Label>
                <Form.Control
                  className={`hengrown-input signup ${
                    passwordError && "is-invalid"
                  }`}
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                />
                <Form.Text
                  className="hengrown-passwd-toggle-btn signup"
                  onClick={handleShowPasswordClick}
                >
                  {showPassword ? "hide" : "show"}
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={8} sm={10} xs={10} className="justify-content-start">
              <Form.Group controlId="formBasicPassword">
                <Form.Check
                  className="hengrown-check signup"
                  color="success"
                  type="checkbox"
                  checked={agree}
                  onChange={handleAgreeChange}
                  label={
                    <p className="hengrown-check-label signup">
                      I agree to Platform{" "}
                      <Nav.Link href="#" className="painted">
                        Terms of Services
                      </Nav.Link>{" "}
                      and{" "}
                      <Nav.Link href="#" className="painted">
                        Privacy Policies
                      </Nav.Link>
                      .
                    </p>
                  }
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={8} sm={10} xs={10} className="justify-content-start">
              <Button
                variant="primary"
                type="submit"
                className="hengrown-button signup"
                disabled={!isFormValid}
              >
                Create my account
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default Signup;
