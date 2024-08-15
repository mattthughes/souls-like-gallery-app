import React from "react";

import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import Button from "react-bootstrap/Button";


import Avatar from "../../components/Avatar";

import { Link } from "react-router-dom";

import styles from '../../styles/Trending.module.css'
import appStyles from '../../App.module.css'
import btnStyles from "../../styles/Button.module.css";


// Trending component props
const Trending = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    likes_count,
    title,
    content,
    image,
    game,
    attachments,
    updated_at,

  } = props



  return (
    <Card>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
        <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
        </Media>
      </Card.Body>
      <Link to={`/posts/${id}`} className={styles.Image}>
        <Card.Img className={`col-12 col-lg-10 ${styles.Image}`} src={image} alt={title} />
      </Link>
      <Card.Body className="text-center">
        {title && <Card.Title className={appStyles.Headings}>{title}</Card.Title>}
        {content && <Card.Text className={appStyles.Text}>{content}</Card.Text>}
        {game && <Card.Text className={appStyles.Text}>{game}</Card.Text>}
        <a target='_blank'
          rel='noopener noreferrer' href={attachments}>{attachments}</a>
        <div>
          <i className="fa-solid fa-thumbs-up" />{likes_count}
        </div>
        Post Created {updated_at}
        <div className="pt-2">
          <Link to={`/posts/${id}`}>
            <Button className={`${btnStyles.Blue}`}>View Post</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};


export default Trending;