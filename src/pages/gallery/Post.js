import React from "react";

import { Card } from "react-bootstrap";



import { Link } from "react-router-dom";



const Post = (props) => {
  const {
    id,
    title,
    image,

  } = props



  return (
    <Link to={`/posts/${id}`}>
      <Card.Img className="col-6 col-lg-3 justify-content-lg-around pt-5 pb-2 mb-2 rounded-1" src={image} alt={title} />
    </Link>
    
  );
};


export default Post;