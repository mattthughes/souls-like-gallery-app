import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Trending from "../../pages/trending/Trending";



test("renders Trending", () => {
  render(
    <Router>
      <Trending/>
    </Router>
  );

});

