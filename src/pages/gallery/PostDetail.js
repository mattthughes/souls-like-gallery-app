import React from "react";
import { useCurrentUser } from "../../contexts/UserCurrentContext";

import { Card, Media } from "react-bootstrap";


import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import { axiosRes } from "../../api/AxiosDefaults";

import { Link } from "react-router-dom";

import styles from '../../styles/PostDetail.module.css'

import Tooltip from "react-bootstrap/Tooltip";
import { DropDown } from "../../components/DropDown";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";

const PostDetail = (props) => {
  const {
    id,
    owner,
    comments_count,
    likes_count,
    like_id,
    title,
    content,
    image,
    attachments,
    updated_at,
    postPage,
    setPost,

  } = props

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner
  const history = useHistory()

  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      toast.success("Post Deleted")
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { post: id});
      console.log(data)
      setPost((prevPosts) => ({
        ...prevPosts,
        
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count + 1, like_id: post.id }
            : post;
            
        }),
        
      }));
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setPost((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count - 1, like_id: null }
            : post;
        }),
      }));
    } catch (err) {
      if (err.response.data) {
        window.location.reload();
      }
    }
    
  };


  return (
      <Card>
        <Card.Body>
          <Media className="align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              {is_owner && postPage && (
                <DropDown handleEdit={handleEdit} handleDelete={handleDelete}
                />
              )}
            </div>
          </Media>
        </Card.Body>
        <Link to={`/posts/${id}`}>
          <Card.Img className="col-lg-6" src={image} alt={title} />
        </Link>
        <Card.Body className={`text-center ${styles.Test}`}>
        {title && <Card.Title>{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
        <a target='_blank'
            rel='noopener noreferrer' href={attachments}>{attachments}</a>
      
        
        <div>

          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own post!</Tooltip>}
            >
              <i className="fa-solid fa-thumbs-up" />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={handleUnlike}>
              <i className={`fa-solid fa-thumbs-up ${styles.Like}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              <i className={`fa-solid fa-thumbs-up ${styles.LikeOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like posts!</Tooltip>}
            >
              <i className="fa-solid fa-thumbs-up" />
            </OverlayTrigger>
          )}
          {likes_count}
          <Link to={`/posts/${id}`}>
            <i className="far fa-comments" />
          </Link>
          {comments_count}

        </div>
        Post Created {updated_at}

        </Card.Body>
      </Card>
  );
};


export default PostDetail;