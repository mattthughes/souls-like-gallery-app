/* eslint quotes: ["error", "double"] */

import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/AxiosDefaults";
import { useCurrentUser } from "../../contexts/UserCurrentContext";
import { useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useRedirect } from "../../hooks/useRedirect";
import { toast } from "react-toastify";

function PostCreateForm() {
  useRedirect("loggedOut");

  const [errors, setErrors] = useState({});
  // Setting the games as an empty array titled results which will be mapped over
  const [games, setGames] = useState({ results: [] });
  const currentUser = useCurrentUser();

  // Setting the post data to empty strings
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

  // Fetching the games to help the user changing the game field
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const { data } = await axiosReq.get("/games/");

        setGames(data);

      } catch (err) {
        toast.error(err)

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
    formData.append("image", imageInput.current.files[0]);
    formData.append("game", game);
    formData.append("attachments", attachments);

    try {
      const { data } = await axiosReq.post("/posts/", formData);
      toast.success("Post Created")
      history.push(`/posts/${data.id}`);
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);

        if (!game) {
          toast.warning("Please select a game")
        } 
      }
    }
  };
  
  const textFields = (
    /* Setting the text area field so the user can give there post a title */
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

      {/* Setting the text area allowing a user to create there text for the post*/}
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

      {/* Using a select form field and then mapping over the games array if games.length is true to then show each game as an option in the select field
      allowing the user to pick a game when creating a post */}
      <Form.Group>
        <Form.Label className="d-flex flex-column">Game</Form.Label>
        <select name="game" value={game} onChange={handleChange} className="Form-Control p-1">
        <option>Select a game</option>
          {games.results.length ? (
            games.results.map((game) => (
              <option key={game.id}>
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

      {/* Attachments form control field specified by its type if a user enters the wrong type an error message will appear. */}
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
            <Container>
              <Form.Group className="text-center">
                {/* If there is an image show the image allowing the user to change the image if they would like to*/}
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
                  /* If the image does not exist allow the user to upload an image*/
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
              <div>
                <div className="pt-3 pb-2 mr-3">
                  <Link to="/games">
                    <Button className={`${btnStyles.Button} ${btnStyles.Blue}`}>View Games Detail here</Button>
                  </Link>
                </div>
              </div>
              <div className="d-md-none">{textFields}</div>
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

export default PostCreateForm;