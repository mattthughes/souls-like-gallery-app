import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from '../../styles/SignUpSignIn.module.css'
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css"
import { useRedirect } from "../../hooks/useRedirect";
import { toast } from "react-toastify";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import axios from "axios";

const SignUpForm = () => {
  // Redirect user if logged in
  useRedirect("loggedIn");
  // Setting the sign up data as empty strings
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = signUpData;

  // Creating the errors state and assigning them to an empty object
  const [errors, setErrors] = useState({});

  // Assigning the history variable
  const history = useHistory();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };
  // Adding the user to application if the data is correct direct the user to the sign in page if successful,
  // showing a pop up message stating account created.
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/signin");
      toast.success("Account created")
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    // Creating the form fields for a new user
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign up</h1>
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

            
            <Form.Group controlId="password1">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Password"
                name="password1"
                value={password1}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password1?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password2">
              <Form.Label className="d-none">Confirm password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Confirm password"
                name="password2"
                value={password2}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password2?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            <Col className="d-flex flex-column justify-content-center">
              <Button
                className={`${btnStyles.Button} ${btnStyles.Blue}`}
                type="submit"
              >
                Sign Up
              </Button>
            </Col>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
        </Container>

        {/* If the user already has an account click the below link which will redirect the user to the sign in page*/}
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>

      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignInCol}`}
      >
        <Image height="400"
          className={`${appStyles.FillerImage}`}
          src={"https://media.istockphoto.com/id/1313854295/vector/vector-illustration-young-gamer-sit-in-front-of-a-screen-and-playing-video-game-wearing.jpg?s=612x612&w=0&k=20&c=tGDvdD63g2nFnnmjrTtcKwi_N9e5PUKhivi__JE39hw="}
        />
      </Col>

    </Row>
  );
};

export default SignUpForm;