import React from 'react'
import { Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import styles from "../../styles/Home.module.css"
import appStyles from '../../App.module.css'

function Home() {
    return (
        <Row>
            <Col className='d-flex flex-column justify-content-center p-sm-2'>
            <h2 className={appStyles.Headings}>Home</h2>
                <p className={styles.p}>Welcome to the Souls Like Gallery where you can share your favourite moments
                    from the popular subgenre souls like. Where you can share photos and videos
                    of any challenge runs, screenshots of your favourite area, any art work we want to see it all.</p>
                <h3 className={appStyles.Headings}>Lets talk about how to get started</h3>
                <ol className={styles.ol}>
                    <li>Create a free account by clicking here to <Link className={appStyles.Link} to="/signup">sign up.</Link></li>
                    <li>If you already have an account you can sign in to your account by clicking here to <Link className={appStyles.Link} to="/signin">sign in.</Link></li>
                    <li>Once the account has been generated <strong>welcome</strong> you have joined our souls like community, as part of the community you can share your own <strong>memories</strong> with others or give feedback to others.</li>
                    <li>To view your own <strong>posts</strong> or a specific user posts its very simple just click on the users <strong>avatar</strong>, which will load the users account showing all there excellent posts!</li>
                    <li>If you wish to customise your avatar or username, you can do that very easily on your profile page via a drop down menu.</li>
                    <li>As part of our community you can share your existing links with others on your posts or even your account as well such as your social media links like your linkedin or facebook links.</li>

                </ol>
            </Col>
        </Row>
    )
}

export default Home