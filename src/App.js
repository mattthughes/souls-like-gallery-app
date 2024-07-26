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

import PostCreateForm from './pages/gallery/PostCreateForm';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import GameLists from './pages/games/GameLists';
import NotFound from './components/NotFound';
import PostPage from './pages/gallery/PostPage';

import PostsPage from './pages/gallery/PostsPage';




function App() {
  
  return (
    <div>
      <ToastContainer position="top-center" theme="dark"  />
      <Container className={styles.Main}>
      <Switch>
          <Route exact path="/" render={() => <Home/>} />
          <Route
            exact
            path="/gallery"
            render={() => (
              <PostsPage message="No results found. Adjust the search keyword." />
            )}
          />
          <Route exact path="/gallery" render={() => <PostPage/>}/>
          <Route exact path="/posts/create" render={() => <PostCreateForm/>}/>
          <Route exact path="/posts/:id" render={() => <PostPage/>}/>
          <Route exact path="/signin" render={() => <SignInForm/>} />
          <Route exact path="/signup" render={() => <SignUpForm/>} />
          <Route exact path="/profile" render={() => <h1>Profile</h1>}/>
          <Route exact path="/trending" render={()=> <h1>Trending</h1>}/>
          <Route exact path="/games/:id" render={() => <GameLists/>}/>
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