import React, { useState, useContext } from "react";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { SetCurrentUserContext } from "../../contexts/UserCurrentContext";

import { Link, useHistory } from "react-router-dom";

import { toast } from "react-toastify";


import styles from '../../styles/SignUpSignIn.module.css'
import appStyles from "../../App.module.css";
import axios from "axios";

function SignInForm() {
  const setCurrentUser = useContext(SetCurrentUserContext);

  const history = useHistory();

  const [signInData, setSignInData] = useState({
    username: "",
    password: ""
  })

  const [errors, setErrors] = useState({});

  const {username, password} = signInData

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const {data} =await axios.post('/dj-rest-auth/login/', signInData)
      setCurrentUser(data.user);
      history.push("/")
      toast.success("Successfully logged in")
      
    } catch (err) {
      setErrors(err.response?.data);
    }
  }

  return (
    <Row className={styles.Row}>
      <Col className="my-auto p-0 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign in</h1>
          
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label className="d-none">username</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Button
              type="submit"
            >
              Sign In
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>


        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signup">
            Don't have an account? <span>Sign up now!</span>
          </Link>
        </Container>
      </Col>
    </Row>
  );
}

export default SignInForm;