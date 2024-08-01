import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import Asset from "../../components/Asset";

import { Dropdown } from "react-bootstrap";


import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useHistory } from "react-router";

import Game from "../games/Game";
import { axiosReq } from "../../api/AxiosDefaults";

import { useCurrentUser } from "../../contexts/UserCurrentContext";
import { useEffect } from "react";

import { Link } from "react-router-dom/cjs/react-router-dom.min";



function PostCreateForm() {
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

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const { data } = await axiosReq.get(`/games/`);
        setGames(data);
        console.log(data)
      } catch (err) {
        console.log(err);

      }
    };

    fetchGames()
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", imageInput.current.files[0]);
    formData.append("game", game);
    formData.append("attachments", attachments)

    try {
      const { data } = await axiosReq.post("/posts/", formData);
      history.push(`/posts/${data.id}`);
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
        console.log(game[title])
        console.log(err.response.data)

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
        <Form.Label>Game</Form.Label>
        <Form.Control
          type="text"
          name="game"
          value={game}
          onChange={handleChange}
        />

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
        create
      </Button>
    </div>
  );

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
            <Container
            >
              <Form.Group className="text-center">
                {image ? (
                  <>
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
                  </>
                ) : (
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload"
                  >
                    <Asset
                      message="Click or tap to upload an image"
                    />
                  </Form.Label>
                )}

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



              <div className="d-md-none">{textFields}</div>
            </Container>
          </Col>
          <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
            <Container className={appStyles.Content}>{textFields}</Container>
          </Col>
        </Row>
      </Form>
      <h3 className={`pb-2 pt-2 ${appStyles.Headings}`}>Games List</h3>
      <Dropdown drop="right">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          View Games List
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>
            {games.length ? (
              games.map((game) => (
                <Game key={game.id} {...game} />
              ))
            ) : currentUser ? (
              <span>No Games to show</span>
            ) : (
              <span>No Games ... yet</span>
            )}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className="pt-3 mr-3">
      <Link to="/games">
      <Button className={`${btnStyles.Blue}`}>View Games Detail here</Button>
      </Link>
      </div>
     

    </div>
  );
}

export default PostCreateForm;