import React from "react";

import { Card } from "react-bootstrap";

import Image from "react-bootstrap/Image";



import { Link } from "react-router-dom";



const Post = (props) => {
  const {
    id,
    title,
    image,

  } = props



  return (
      <Link to={`/posts/${id}`}>
        
      <Image height={150} width={150} className="col-6 col-lg-3 justify-content-lg-around pt-5 pl-2 pb-2 border border-dark mb-2 rounded-top" src={image} alt={title} />
    </Link>
    
    
  );
};


export default Post;