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

import { useCurrentUser } from "../../contexts/UserCurrentContext";

import { ProfileEditDropdown } from "../../components/DropDown";

import InfiniteScroll from "react-infinite-scroll-component";

import { Link } from "react-router-dom/cjs/react-router-dom.min";

import btnStyles from '../../styles/Button.module.css'

import PostDetail from "../posts/PostDetail";
import {
    fetchMoreData
} from "../../utils/utils";

function ProfilePage() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const { id } = useParams();
    const currentUser = useCurrentUser();
    const [profile, setProfileData] = useState({ results: [{}] });
    const is_owner = currentUser?.username === profile?.owner;
    const [profilePosts, setProfilePosts] = useState({ results: [] });

    
    // Fetching the logged in users profile
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
                Window.location.reload()
            }
        };
        fetchProfileData();
    }, [id, setProfileData]);

    const mainProfile = (
        <>
        {/* If this is the profile owner show the edit dropdown */}
        {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
            <Row noGutters className="px-3 text-center">
                <Col lg={3} className="text-lg-left">
                    <Image
                        className={styles.ProfileImage}
                        roundedCircle
                        src={profile?.image}
                        alt="profile-image"
                    />
                </Col>
                <Col lg={6}>
                    <h3 className={`m-2 ${appStyles.Headings}`}>{profile?.owner}</h3>
                    <Row className="flex-column align-items-center">
                        <Col xs={6} className={`my-2 col-lg-12 ${appStyles.Text}`}>
                            <div>{profile?.posts_count}</div>
                            <div>posts</div>
                            
                            <div className={`p-1 ${styles.Text}`}>
                                
                                {profile?.bio ? (
                                    <p>Bio: {profile?.bio}</p>
                                ) : (
                                    <div></div>
                                )}

                                {profile?.files ? (
                                    <>
                                    <a className="d-block" target='_blank'
                                    rel='noopener noreferrer' href={profile?.files}>View files</a>
                                    <p>Account Created {profile?.created_at}</p>
                                    </>
                                    
                                ) : (
                                    <div></div>
                                )}
                                
                                    
                            </div>

                        </Col>
                    </Row>
                    {is_owner && (
                        <Link to={`/profiles/${id}/edit`} className={`m-2 text-center ${btnStyles.Button}`}>edit</Link>
                    )}
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
            {/* Using an infinite scroll to check the profile owners posts only */}
            {profilePosts.results.length ? (
                <InfiniteScroll
                    children={profilePosts.results.map((post) => (
                        <PostDetail key={post.id} {...post} setPosts={setProfilePosts} />
                    ))}
                    dataLength={profilePosts.results.length}
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