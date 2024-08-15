import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../../pages/home/Home";



test("renders Home", () => {
  render(
    <Router>
      <Home/>
    </Router>
  );

});

