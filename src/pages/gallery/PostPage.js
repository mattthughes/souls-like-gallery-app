import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { axiosReq } from '../../api/AxiosDefaults'
import Post from './Post';
import CommentCreateForm from "../comments/CommentCreateForm";
import { useCurrentUser } from "../../contexts/UserCurrentContext";

import Container from 'react-bootstrap/Container';


function PostPage() {
  const { id } = useParams()
  const [post, setPost] = useState({ results: [] });
  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }] = await Promise.all([
          axiosReq.get(`/posts/${id}`),
        ]);
        setPost({ results: [post] });
        console.log(post)

      } catch (err) {
        console.log(err)
      };


    }
    handleMount();
  }, [id]);

  return (
    <Row>
      <Col>
      <Post {...post.results[0]} setPost={setPost} postPage />
      <Container>
          {currentUser ? (
            <CommentCreateForm
              profile_id={currentUser.profile_id}
              profileImage={profile_image}
              post={id}
              setPost={setPost}
              setComments={setComments}
            />
          ) : comments.results.length ? (
            "Comments"
          ) : null}
        </Container>
      </Col>
    </Row>
  );
}

export default PostPage;