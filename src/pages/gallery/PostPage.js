import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";
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

  return (
    <Row>
      <Col>
        <PostDetail {...post.results[0]} setPost={setPost} postPage />
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
                <InfiniteScroll
                  children={comments.map((comment) => (
                    <Comment
                  key={comment.id}
                  {...comment}
                  setPost={setPost}
                  setComments={setComments}
                />
              ))}
              dataLength={comments.length}
              loader={<Asset spinner />}
              hasMore={!!comments.next}
              next={() => fetchMoreData(comments, setComments)}
            />
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