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

import PostCreateForm from './pages/posts/PostCreateForm';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import NotFound from './components/NotFound';
import PostPage from './pages/posts/PostPage';
import PostsPage from './pages/posts/PostsPage';
import GameLists from './pages/games/GameLists';
import PostEditForm from "./pages/posts/PostEditForm";
import GameEditForm from './pages/games/GameEditForm';
import ProfilePage from './pages/profiles/PageProfile';
import ProfileEditForm from './pages/profiles/ProfileEditForm';
import TrendingPage from './pages/trending/TrendingPage';

import UsernameForm from './pages/profiles/UsernameForm';
import UserPasswordForm from './pages/profiles/PasswordForm';
import { useCurrentUser } from './contexts/UserCurrentContext';



function App() {

  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div>
      <ToastContainer position="top-center" theme="dark" />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route
            exact
            path="/gallery"
            render={() => (
              <PostsPage message="No results found. Adjust the search keyword." />
            )}
          />
          <Route
            exact
            path="/liked"
            render={() => (
              <PostsPage
                message="No results found. Adjust the search keyword or like a post."
                filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
              />
            )}
          />
          <Route exact path="/gallery" render={() => <PostPage />} />
          <Route exact path="/posts/create" render={() => <PostCreateForm />} />
          <Route exact path="/posts/:id" render={() => <PostPage />} />
          <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route exact path="/profiles/:id/edit" render={() => <ProfileEditForm />} />
          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/trending" render={() => <TrendingPage />} />
          <Route exact path="/games" render={() => <GameLists />} />
          <Route exact path="/games/:id/edit" render={() => <GameEditForm />} />
          <PrivateRoute>
            <Route exact path="/game/create" render={() => <GameCreateForm />} />
          </PrivateRoute>

          <Route render={() => <NotFound />} />




        </Switch>
        <NavBar />
      </Container>

    </div>
  );
}

export default App;