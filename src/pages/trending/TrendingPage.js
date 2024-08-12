import React, { useEffect, useState } from 'react'

import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import appStyles from '../../App.module.css'
import { fetchMoreData } from "../../utils/utils";
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { axiosReq } from '../../api/AxiosDefaults'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

import Container from 'react-bootstrap/Container';


import Trending from './Trending';

function TrendingPage() {
  const [trendingPost, setTrendingPost] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();


  // Using a get request to find the trending url which has the ordering field of likes count
  // setting the posts to be ordered by there likes.
  useEffect(() => {
    const fetchTrendingPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/trending/?ordering=-likes_count`);
        setTrendingPost(data);
        setHasLoaded(true);
        
      } catch (err) {
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchTrendingPosts();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  return (
    <Row>
      <Col lg={12}>
        <h2 className={appStyles.Headings}>Trending</h2>
        {hasLoaded ? (
          <>
          {/* Using an infinite scroll and the slice array method to limit the items in the new array between 0, 10
          limiting the amount of results on the page. */}
            <div className="border">
              {trendingPost.results.length ? (
                <InfiniteScroll
                
                  children={trendingPost.results.slice(0,10).map((trendingPosts) => (
                    <Trending key={trendingPosts.id} {...trendingPosts} setPosts={setTrendingPost} />
                  ))}
                  dataLength={trendingPost.results.length}
                  loader={<Asset spinner />}
                  hasMore={!!trendingPost.next}
                  next={() => fetchMoreData(trendingPost, setTrendingPost)}
                />
              ) : (
                <div>
                </div>
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

export default TrendingPage