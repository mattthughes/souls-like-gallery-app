import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/AxiosDefaults";
import PostDetail from "./Post";


import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";

function PostsPage({ message, filter = "" }) {
  const [posts, setPosts] = useState( []);
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?${filter}`);
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    fetchPosts();
  }, [filter, pathname]);

  return (
    <Row>
      <Col lg={12}>
      <h2 className={appStyles.Headings}>Gallery</h2>
        {hasLoaded ? ( 
           <>
           <div className="border p-2">
           {posts.length ? (
             <InfiniteScroll
               children={posts.map((post) => (
                 <PostDetail key={post.id} {...post} setPosts={setPosts} />
               ))}
               dataLength={posts.length}
               loader={<Asset spinner />}
               hasMore={!!posts.next}
               next={() => fetchMoreData(posts, setPosts)}
             />
           ) : (
             <Container className={appStyles.Content}>
               <Asset  message={message} />
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