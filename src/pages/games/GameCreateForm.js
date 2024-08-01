import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Alert } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import Asset from "../../components/Asset";

import { axiosReq } from "../../api/AxiosDefaults";

import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css"
import { toast } from "react-toastify";

import { useRef } from "react";

function GameCreateForm() {
  const [errors, setErrors] = useState({});
  const imageInput = useRef(null);

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("image", image);
    formData.append("description", description);
    try {
      await axiosReq.post("/games/create/", formData);
      history.push(`/games/`);
      toast.success("Game Created!")
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
        toast.warning("Invalid Data please try again")
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
                      <Image className={appStyles.Image} height={200} width={400} src={image} rounded />
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
  );
}

export default GameCreateForm;