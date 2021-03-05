import React from "react";
import Header from "../header";
import Survival from "../survival";
import LatestArticles from "../latest-articles";
import Footer from "../footer";

import "./app.scss";
import "../app/wrapper.scss";
import '../../fonts/open-sans/stylesheet.css'
import '../../fonts/roboto/stylesheet.css'


const App = () => {
  return (
    <div className="project">
      <div className="survival-block">
        <div className="wrapper">
          <Header />
          <Survival />
        </div>
      </div>
      <div className="latest-articles-block">
        <div className="wrapper">
          <LatestArticles />
        </div>
      </div>
      <div className="footer">
        <div className="wrapper">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
