import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { axiosReq } from '../../api/AxiosDefaults'
import Post from './Post';


function PostPage() {
  const { id } = useParams()
  const [post, setPost] = useState({ results: [] });

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
      </Col>
    </Row>
  );
}

export default PostPage;