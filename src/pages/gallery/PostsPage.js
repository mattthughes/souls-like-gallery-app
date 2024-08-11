import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/AxiosDefaults";
import Post from "./Post";

import { Form } from "react-bootstrap";


import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";

function PostsPage({ message, filter = "" }) {
  const [posts, setPosts] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");


  // Using a get request to target the posts by its filter and search query
  // allowing users to search for posts by game title, the post title, user as well.
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?${filter}search=${query}`);
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPosts();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname]);


  return (
    <Row>
      <Col lg={12}>
        <Form
          onSubmit={(event) => event.preventDefault()}
        >
          {/* Setting up the search field paramater */}
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2 mb-3"
            placeholder="Search for posts by game title, username or post title"
          />
        </Form>

        {hasLoaded ? (
          <>
            <div className="border">
              {/* Using a posts infinite scroll to map 
              over the post component to show all posts on the page
              so the user does not need to refresh. */}
              {posts.length ? (
                <InfiniteScroll
                  children={posts.map((post) => (
                    <Post key={post.id} {...post} setPosts={setPosts} />
                  ))}
                  dataLength={posts.length}
                  loader={<Asset spinner />}
                  hasMore={!!posts.next}
                  next={() => fetchMoreData(posts, setPosts)}
                />
              ) : (
                <Container className={appStyles.Content}>
                  <Asset message={message} />
                </Container>
              )}
            </div>

          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col md={4}>
      </Col>
    </Row>
  );
}

export default PostsPage;