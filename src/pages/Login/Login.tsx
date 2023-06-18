import React, { useState } from "react";
import "./Login.css";
import { Form, Button, Row, Col, Navbar, Nav, Toast } from "react-bootstrap";
import logo_w from "./../../assets/images/logo-white.svg";
import logo_c from "./../../assets/images/logo-colorful.svg";
import axios from "axios";
import {Icon} from '@iconify/react';
import { apiURL } from "../../constants";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [danger, setDanger] = useState(false);
  const [dangerMessage, setDangerMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [rememberme, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle login logic here
    await axios.post(`${apiURL}users/login`,{
      email,
      password
    }).then(response => {
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      navigate('/profile');
      // setShowModal(true);
    }).catch(err => {
      console.log(err);
      let msg = '';
      if (err.response) msg = err.response.data.message;
      else msg = err.message;
      setDangerMessage(msg);
      setDanger(true)
    });
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setIsFormValid(validateEmail(email) && validatePassword(event.target.value));
  };

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
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
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setIsFormValid(validateEmail(event.target.value) && validatePassword(password));
  };
  const handleAgreeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(event.target.checked);
  };

  return (
    <Row>
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
              <Form.Label className="hengrown-login-header login">
                Log <p className="painted">In</p>
              </Form.Label>
              <p className="hengrown-subtitle-label login">
                Don't have an account?{" "}
                <Nav.Link href="signup" className="painted">
                  Sign up.
                </Nav.Link>
              </p>
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
                  checked={rememberme}
                  onChange={handleAgreeChange}
                  label={
                    <p className="hengrown-check-label signup">
                      Remember me
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
                className="hengrown-button login"
                disabled={!isFormValid}
              >
                Login
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
