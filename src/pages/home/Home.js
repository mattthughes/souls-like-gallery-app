import React from 'react'
import { Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import styles from "../../styles/Home.module.css"
import appStyles from '../../App.module.css'

function Home() {
    return (
        <Row>
            <Col className='d-flex flex-column justify-content-center p-sm-3'>
            <h2 className={appStyles.Headings}>Home</h2>
                <p className={styles.p}>Welcome to the Souls Like Gallery where you can share your favourite moments
                    from the popular subgenre souls like. You can share photos and videos
                    of any challenge runs, screenshots of your favourite area, any art work we want to see it all.</p>
                <h3 className={appStyles.Headings}>Lets talk about how to get started</h3>
                <ol className={styles.ol}>
                    <li className={styles.li}>Create a free account by clicking here to <Link className={appStyles.Link} to="/signup">sign up.</Link></li>
                    <li className={styles.li}>If you already have an account click here to <Link className={appStyles.Link} to="/signin">sign in.</Link></li>
                    <li className={styles.li}>Once the account has been generated <strong>"Welcome"</strong> you have joined our souls like community. As part of the community you can share your own <strong>memories</strong> and give feedback on others.</li>
                    <li className={styles.li}>To view your own <strong>posts</strong> or a specific user posts its very simple just click on the users <strong>avatar</strong>, which will load the users account showing all there excellent posts!</li>
                    <li className={styles.li}>If you wish to customise your <strong>avatar</strong> or username, you can do that on your profile page via a drop down menu.</li>
                    <li className={styles.li}>As part of our community you can share your existing links with others on your posts or on your account as well, such as your social media links e.g LinkedIn or Facebook links.</li>

                </ol>
            </Col>
        </Row>
    )
}

export default Home