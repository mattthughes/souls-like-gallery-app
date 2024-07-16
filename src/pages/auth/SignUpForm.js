import React from "react";
import { Link } from "react-router-dom";

import appStyles from "../../App.module.css";
import styles from '../../styles/SignUpSignIn.module.css'

import { Form, Button, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
    return (
        <Row className={styles.Row}>
            <Col className="my-auto py-2 p-md-2" md={6}>
                <Container className={`${appStyles.Content} p-4 `}>
                    <h1 className={styles.Header}>sign up</h1>

                    <Form>
                        <Form.Group controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="email" placeholder="Enter Your Username" />
        
                        </Form.Group>

                        <Form.Group controlId="password1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group controlId="password2">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="confirm password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                </Container>
                <Container className={`mt-3 ${appStyles.Content}`}>
                    <Link className={styles.Link} to="/signin">
                        Already have an account? <span>Sign in</span>
                    </Link>
                </Container>
            </Col>
            
        </Row>
    );
};

export default SignUpForm;