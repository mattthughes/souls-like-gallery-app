import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import Button from 'react-bootstrap/Button';
import btnStyles from '../styles/Button.module.css'
import appStyles from '../App.module.css'

function NotFound() {
  // Setting the history variable so a user can return to the previous page they were on
  const history = useHistory();
  return (
    <div>
      <h2 className={appStyles.Headings}>Error page not found</h2>
      <p className={appStyles.Text}>The page you were looking for could not be found. Click the back button to return to the previous page you were on.</p>
      <Button
              className={`${btnStyles.Button} ${btnStyles.Blue}`}
              onClick={() => history.goBack()}
            >
              Back
            </Button>

    </div>
  )
}

export default NotFound