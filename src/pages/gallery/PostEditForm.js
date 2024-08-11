import React, { useEffect, useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/AxiosDefaults";

import { useCurrentUser } from "../../contexts/UserCurrentContext";
import { toast } from "react-toastify";

function PostEditForm() {
    const [errors, setErrors] = useState({});
    const [games, setGames] = useState({ results: [] });
    const currentUser = useCurrentUser();

    const [postData, setPostData] = useState({
        title: "",
        content: "",
        game: "",
        image: "",
        attachments: ""
    });
    const { title, content, game, image, attachments } = postData;


    const imageInput = useRef(null);
    const history = useHistory();
    const { id } = useParams();

    // Getting the posts id and setting the fields to the post data,
    // if the post author is logged in populate the edit form or redirect
    // the user to the home page.
    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq.get(`/posts/${id}/`);
                const { title, content, game, image, attachments, is_owner } = data;

                is_owner ? setPostData({ title, content, game, image, attachments }) : history.push("/");
            } catch (err) {
            }
        };

        handleMount();
    }, [history, id]);

    const handleChange = (event) => {
        setPostData({
            ...postData,
            [event.target.name]: event.target.value,
        });
    };

    const handleChangeImage = (event) => {
        if (event.target.files.length) {
            URL.revokeObjectURL(image);
            setPostData({
                ...postData,
                image: URL.createObjectURL(event.target.files[0]),
            });
        }
    };

    // Fetching the games to help the user changing the game field
    useEffect(() => {
        const fetchGames = async () => {
            try {
                const { data } = await axiosReq.get(`/games/`);
                setGames(data);
            } catch (err) {

            }
        };

        fetchGames()
    }, []);
    // On submit append the data the form, if successful inform user via pop up message,
    // otherwise show the error messages.
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("game", game);
        formData.append("attachments", attachments)

        if (imageInput?.current?.files[0]) {
            formData.append("image", imageInput.current.files[0]);
        }

        try {
            await axiosReq.put(`/posts/${id}/`, formData);
            history.push(`/posts/${id}`);
            toast.success("Post edited")
        } catch (err) {
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };

    const textFields = (
        <div className="text-center">
            {/* Setting up the form fields with the correct values */}
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

            <Form.Group>
                <Form.Label>Content</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={6}
                    name="content"
                    value={content}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors?.content?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

<Form.Group>
        <Form.Label className="d-flex flex-column">Game</Form.Label>
        <select name="game" value={game} onChange={handleChange} className="Form-Control p-1">
          {games.length ? (
            games.map((game) => (
              <option  key={game.id}>
                {game.title}
              </option>
            ))
          ) : currentUser ? (
            <option>No Games to show</option>
          ) : (
            <option>No Games ... yet</option>
          )}

        </select>

      </Form.Group>
      {errors?.game?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

            <Form.Group>
                <Form.Label>Attachments</Form.Label>
                <Form.Control
                    name="attachments"
                    type="url"
                    placeholder="https://example.com"
                    value={attachments}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors?.attachments?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}


            <Button
                className={`${btnStyles.Button} ${btnStyles.Blue}`}
                onClick={() => history.goBack()}
            >
                cancel
            </Button>
            <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
                save
            </Button>
        </div>
    );

    return (
        <div>


            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
                        <Container
                            className={`${appStyles.Content} d-flex flex-column justify-content-center`}>
                            <Form.Group className="text-center">
                                <figure>
                                    <Image className={appStyles.Image} src={image} rounded />
                                </figure>
                                <div>
                                    <Form.Label
                                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                                        htmlFor="image-upload"
                                    >
                                        Change the image
                                    </Form.Label>
                                </div>

                                <Form.File
                                    id="image-upload"
                                    accept="image/*"
                                    onChange={handleChangeImage}
                                    ref={imageInput}
                                />
                            </Form.Group>
                            {errors?.image?.map((message, idx) => (
                                <Alert variant="warning" key={idx}>
                                    {message}
                                </Alert>
                            ))}
                            <div className="d-md-none">{textFields}

                            </div>
                        </Container>
                    </Col>
                    <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
                        <Container className={appStyles.Content}>{textFields}</Container>
                    </Col>
                </Row>
            </Form>

        </div>

    );
}

export default PostEditForm;