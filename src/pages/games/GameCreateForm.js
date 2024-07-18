import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Alert } from "react-bootstrap";

import { axiosReq } from "../../api/AxiosDefaults";

import styles from "../../styles/GameCreateEditForm.module.css";
import appStyles from "../../App.module.css";

function GameCreateForm() {
    const [errors, setErrors] = useState({});

    const [gameData, setGameData] = useState({
        title: "",
    });
    const { title } = gameData;
    const history = useHistory();

    const handleChange = (event) => {
        setGameData({
            ...gameData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("title", title);
        try {
            const { data } = await axiosReq.post("/games/create/", formData);
            history.push(`/games/${data.id}`);
        } catch (err) {
            console.log(err);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };

    const textFields = (
        <div className="text-center">
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors?.title?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Button

                onClick={() => history.goBack()}
            >
                cancel
            </Button>
            <Button type="submit">
                create
            </Button>
        </div>
    );

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
                    <Container
                        className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
                    >
                        <div className="d-md-none">{textFields}</div>
                    </Container>
                </Col>
                <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
                    <Container className={appStyles.Content}>{textFields}</Container>
                </Col>
            </Row>
        </Form>
    );
}

export default GameCreateForm;