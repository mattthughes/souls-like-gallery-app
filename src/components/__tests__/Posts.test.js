import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Post from "../../pages/posts/Post";
import PostCreateForm from "../../pages/posts/PostCreateForm";
import PostEditForm from "../../pages/posts/PostEditForm";
import PostDetail from "../../pages/posts/PostDetail";



test("renders Posts", () => {
  render(
    <Router>
      <Post />
    </Router>
  );

});

test("renders detail view", () => {
  render(
    <Router>
      <PostDetail/>
    </Router>
  )
})

test("loads post create form", async () => {
  <Router>
      <PostCreateForm/>
    </Router>
})
test("loads post edit form", () => {
  <Router>
    <PostEditForm/>
  </Router>
})
