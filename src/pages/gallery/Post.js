import React from "react";
import { useCurrentUser } from "../../contexts/UserCurrentContext";

import { Card, Media } from "react-bootstrap";


import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import { Link } from "react-router-dom";

import Tooltip from "react-bootstrap/Tooltip";

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    likes_count,
    like_id,
    title,
    content,
    game,
    image,
    updated_at,
    postPage,
    setPosts

  } = props

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner


  return (
    <Card>
      <Card.Body>
        <Media>
          <div>
          {is_owner && postPage && ""}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title>{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
        {game && <Card.Text>{game}</Card.Text>}
        <div>
        
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own post!</Tooltip>}
            >
              <i className="fa-solid fa-thumbs-up" />
            </OverlayTrigger>
          ) : like_id ? (
            <span>
              <i className={'fa-solid fa-thumbs-up'} />
            </span>
          ) : currentUser ? (
            <span>
              <i className='fa-solid fa-thumbs-up' />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like posts!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          {likes_count}
          <Link to={`/posts/${id}`}>
            <i className="far fa-comments" />
          </Link>
          {comments_count}
          
        </div>
      </Card.Body>
      <div>
      Post Created {updated_at}
      </div>
      <span></span>
        
    </Card>
  );
};


export default Post;