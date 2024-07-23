import NavBar from './components/NavBar';
import { Route, Switch } from "react-router-dom";
import styles from './App.module.css';
import { Container } from 'react-bootstrap';
import './api/AxiosDefaults'

import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import Home from './pages/home/Home';
import GameCreateForm from './pages/games/GameCreateForm';
import PrivateRoute from './components/PrivateRoute';

import GalleryCreateForm from './pages/gallery/GalleryCreateForm';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import GameLists from './pages/games/GameLists';
import NotFound from './components/NotFound';



function App() {
  
  return (
    <div>
      <ToastContainer position="top-center" theme="dark"  />
      <Container className={styles.Main}>
      <Switch>
          <Route exact path="/" render={() => <Home/>} />
          <Route exact path="/gallery" render={() => <h1>Gallery</h1>}/>
          <Route exact path="/posts/create" render={() => <GalleryCreateForm/>}/>
          <Route exact path="/posts/:id" render={() => <h1>Post Detail</h1>}/>
          <Route exact path="/signin" render={() => <SignInForm/>} />
          <Route exact path="/signup" render={() => <SignUpForm/>} />
          <Route exact path="/profile" render={() => <h1>Profile</h1>}/>
          <Route exact path="/trending" render={()=> <h1>Trending</h1>}/>
          <Route exact path="/games/" render={() => <GameLists/>}/>
          <PrivateRoute>
          <Route exact path="/game/create" render={() => <GameCreateForm/>}/>
          </PrivateRoute>
          <Route exact path="/liked" render={() => <h1>Likes</h1>}/>
          <Route render={() => <NotFound/>} />
          
          
          
          
        </Switch>
      <NavBar/>
      </Container>
      
    </div>
  );
}

export default App;