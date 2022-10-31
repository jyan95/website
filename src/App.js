import React from "react";
import "./App.css";
import Home from "./containers/Home";
import Footer from "./components/Footer";

import { makeStyles } from "@material-ui/core/styles";

function App() {
  return (
    <React.Fragment>
      <Home />
      <Footer />
    </React.Fragment>
  );
}

export default App;
