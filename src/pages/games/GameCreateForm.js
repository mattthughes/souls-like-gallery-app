import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Alert } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import Asset from "../../components/Asset";

import Dropdown from "react-bootstrap/Dropdown";

import { axiosReq } from "../../api/AxiosDefaults";

import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css"
import { toast } from "react-toastify";

import Game from "./Game";

import { useCurrentUser } from "../../contexts/UserCurrentContext";

import { useRef } from "react";

function GameCreateForm() {
  const [errors, setErrors] = useState({});
  const imageInput = useRef(null);
  const [games, setGames] = useState({ results: [] });
  const currentUser = useCurrentUser();

  const [gameData, setGameData] = useState({
    title: "",
    slug: "",
    image: "",
    description: ""

  });
  const { title, slug, image, description } = gameData;
  const history = useHistory();

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setGameData({
        ...gameData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleChange = (event) => {
    setGameData({
      ...gameData,
      [event.target.name]: event.target.value,
    });
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
    formData.append("slug", slug);
    formData.append("image", imageInput.current.files[0]);
    formData.append("description", description);
    try {
      await axiosReq.post("/games/create/", formData);
      history.push(`/games/`);
      toast.success("Game Created!")
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
        console.log(err.response.data)
      }

      if (slug === '') {
        toast.warning("Slug can not be empty")
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
        <Form.Label>Slug</Form.Label>
        <Form.Control
          type="text"
          name="slug"
          value={slug}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.slug?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}


      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="description"
          value={description}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.description?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}



      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        type="submit">

        Create
      </Button>
    </div>
  );

  return (
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

<h3 className={`pb-2 pt-2 ${appStyles.Headings}`}>Games List</h3>
                <Dropdown drop="down">
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