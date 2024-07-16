import NavBar from './components/NavBar';
import { Route, Switch } from "react-router-dom";
import styles from './App.module.css';
import { Container } from 'react-bootstrap';
import './api/AxiosDefaults'

import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <div>
      <ToastContainer position="top-center" theme="dark"  />
      <Container className={styles.Main}>
      <Switch>
          <Route exact path="/" render={() => <h1>Home page</h1>} />
          <Route exact path="/gallery" render={() => <h1>Gallery</h1>}/>
          <Route exact path="/signin" render={() => <SignInForm/>} />
          <Route exact path="/signup" render={() => <SignUpForm/>} />
          <Route exact path="/profile" render={() => <h1>Profile</h1>}/>
          <Route exact path="/trending" render={()=> <h1>Trending</h1>}/>
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      <NavBar/>
      </Container>
      
    </div>
  );
}

export default App;