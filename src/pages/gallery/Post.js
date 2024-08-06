import React from "react";


import Image from "react-bootstrap/Image";

import styles from '../../styles/Post.module.css'



import { Link } from "react-router-dom";


const Post = (props) => {
  const {
    id,
    title,
    image,

  } = props



  return (
      <Link to={`/posts/${id}`}>
        
      <Image  className={`col-6 col-lg-4 justify-content-lg-around p-2  border border-dark mb-2 rounded-top ${styles.Image}`}src={image} alt={title} />
    </Link>
    
    
  );
};


export default Post;