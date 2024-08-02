import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { axiosReq } from '../../api/AxiosDefaults'
import PostDetail from './PostDetail';
import CommentCreateForm from "../comments/CommentCreateForm"
import { useCurrentUser } from "../../contexts/UserCurrentContext";

import Comment from '../comments/Comment';


import Container from 'react-bootstrap/Container';


function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });
  const currentUser = useCurrentUser();
  const [comments, setComments] = useState({ results: [] });
  const [currentPostIndex, setCurrentPostIndex] = useState(0);

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }, { data: comments }] = await Promise.all([
          axiosReq.get(`/posts/${id}`),
          axiosReq.get(`/comments/?post=${id}`)
        ]);
        setPost({ results: [post] });
        setComments(comments);
        console.log(post)
        console.log(comments)

      } catch (err) {
        console.log(err.response.data)
      };


    }
    handleMount();
  }, [id]);

  const handlePrevClick = () => {
    if (currentPostIndex > 0) {
      setCurrentPostIndex(currentPostIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPostIndex < post.results.length - 1) {
      setCurrentPostIndex(currentPostIndex + 1);
    }
  };

  return (
    <Row>
      <Col>
        <PostDetail {...post.results[0]} setPost={setPost} postPage />
        <div>
          <button onClick={handlePrevClick}>Previous</button>
          <button onClick={handleNextClick}>Next</button>
          <img src={post.results[currentPostIndex]} alt="Current" />
        </div>
        <Container>
          {currentUser ? (
            <CommentCreateForm
              profile_id={currentUser.profile_id}
              post={id}
              setPost={setPost}
              setComments={setComments}
            />
          ) : comments.length ? (
            "Comments"
          ) : null}
          {comments.length ? (
            comments.map((comment) => (
              <Comment key={comment.id} {...comment} />
            ))
          ) : currentUser ? (
            <span>No comments yet, be the first to comment!</span>
          ) : (
            <span>No comments... yet</span>
          )}

        </Container>
      </Col>
    </Row>
  );
}

export default PostPage;