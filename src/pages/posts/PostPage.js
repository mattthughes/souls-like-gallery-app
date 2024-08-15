import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { axiosReq } from '../../api/AxiosDefaults'
import PostDetail from './PostDetail';
import CommentCreateForm from "../comments/CommentCreateForm"
import { useCurrentUser } from "../../contexts/UserCurrentContext";
import Comment from '../comments/Comment';
import Container from 'react-bootstrap/Container';

function PostPage() {
  const { id } = useParams();
  // Setting the posts as an empty array called results which will be mapped over later
  const [post, setPost] = useState({ results: [] });
  const currentUser = useCurrentUser();
  // Setting the comments as an empty array called results which will be mapped over later
  const [comments, setComments] = useState({ results: [] });

  // Using a get request to access the posts and comments linked by there id
  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }, { data: comments }] = await Promise.all([
          axiosReq.get(`/posts/${id}`),
          axiosReq.get(`/comments/?post=${id}`)
        ]);
        setPost({ results: [post] });
        setComments(comments);

      } catch (err) {
        window.location.reload()
      };

    }
    handleMount();
  }, [id]);

  return (
    <Row>
      <Col>
      {/* Using the post detail component to only show one post per page */}
        <PostDetail {...post.results[0]} setPost={setPost} postPage />
        <Container>
          {currentUser ? (
            <CommentCreateForm
              profile_id={currentUser.profile_id}
              post={id}
              setPost={setPost}
              setComments={setComments}
            />
          ) : comments.results.length ? (
            "Comments"
          ) : null}
          {/* Using an infinite scroll component meaning a user does not have to refresh to view all the content */}
          {comments.results.length ? (
                <InfiniteScroll
                  children={comments.results.map((comment) => (
                    <Comment
                  key={comment.id}
                  {...comment}
                  setPost={setPost}
                  setComments={setComments}
                />
              ))}
              dataLength={comments.results.length}
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