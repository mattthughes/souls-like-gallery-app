import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";

const Comment = (props) => {
  const { profile_id,  owner, updated_at, content } = props;

  return (
    <div>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span>{owner}</span>
          <span>{updated_at}</span>
          <p>{content}</p>
        </Media.Body>
      </Media>
    </div>
  );
};

export default Comment;