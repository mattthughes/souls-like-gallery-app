import NavBar from './components/NavBar';
import { Route, Switch } from "react-router-dom";
import styles from './App.module.css';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div>
      <Container className={styles.Main}>
      <Switch>
          <Route exact path="/" render={() => <h1>Home page</h1>} />
          <Route exact path="/Gallery" render={() => <h1>Gallery</h1>}/>
          <Route exact path="/signin" render={() => <h1>Sign in</h1>} />
          <Route exact path="/signup" render={() => <h1>Sign up</h1>} />
          <Route exact path="/Profile" render={() => <h1>Profile</h1>}/>
          <Route exact path="/Trending" render={()=> <h1>Trending</h1>}/>
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      <NavBar/>
      </Container>
      
    </div>
  );
}

export default App;