import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";

import { useParams } from "react-router";
import { axiosReq } from "../../api/AxiosDefaults";
import { Image } from "react-bootstrap";

import InfiniteScroll from "react-infinite-scroll-component";

import PostDetail from "../gallery/PostDetail";
import {
    fetchMoreData
} from "../../utils/utils";

function ProfilePage() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const { id } = useParams();
    const [profile, setProfileData] = useState({ results: [{}] });
    const [profilePosts, setProfilePosts] = useState({ results: [] });

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const [{ data: pageProfile }, { data: profilePosts }] = await Promise.all([
                    axiosReq.get(`/profiles/${id}/`),
                    axiosReq.get(`/posts/?owner__profile=${id}`)
                ]);
                setProfilePosts(profilePosts);
                setProfileData(pageProfile);
                setHasLoaded(true);
            } catch (err) {
                console.log(err.response.data)
            }
        };
        fetchProfileData();
    }, [id, setProfileData]);

    const mainProfile = (
        <>
            <Row noGutters className="px-3 text-center">
                <Col lg={3} className="text-lg-left">
                    <Image
                        className={styles.ProfileImage}
                        roundedCircle
                        src={profile?.image}
                    />
                </Col>
                <Col lg={6}>
                    <h3 className="m-2">{profile?.owner}</h3>
                    <Row className="justify-content-center no-gutters">
                        <Col xs={3} className="my-2">
                            <div>{profile?.posts_count}</div>
                            <div>posts</div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={3} className="text-lg-right">
                </Col>
                {profile?.content && <Col className="p-3">{profile.content}</Col>}
            </Row>
        </>
    );

    const mainProfilePosts = (
        <>
            <hr />
            <p className="text-center">Profile owner's posts</p>
            <hr />
            {profilePosts.length ? (
                                <InfiniteScroll
                                    children={profilePosts.map((post) => (
                                        <PostDetail key={post.id} {...post} setPosts={setProfilePosts} />
                                    ))}
                                    dataLength={profilePosts.length}
                                    loader={<Asset spinner />}
                                    hasMore={!!profilePosts.next}
                                    next={() => fetchMoreData(profilePosts, setProfilePosts)}
                                />
                            ) : (
                                <Asset
                                    message={`No results found, ${profile?.owner} hasn't posted yet.`}
                                />
                            )}
        </>
    );

    return (
        <Row>
            <Col className="py-2 p-3 p-lg-2" lg={12}>
                <Container className={appStyles.Content}>
                    {hasLoaded ? (
                        <>
                            {mainProfile}
                            {mainProfilePosts}
                        </>
                    ) : (
                        <Asset spinner />
                    )}
                </Container>
            </Col>
        </Row>
    );
}

export default ProfilePage;