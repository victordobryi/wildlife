import React from "react";
import MainSlider from "../latest-articles-slider";

import "./latest-articles.scss";

const LatestArticles = () => {
  return (
    <div className="latest-articles">
      <h1 className="latest-articles__title">Latest articles</h1>
      <h2 className="latest-articles__subtitle">Breaking news from the wild</h2>
      <MainSlider />
      <h3 className="latest-articles__h3">
        Get notified about new amazing articles
      </h3>
      <form className="form__block">
        <input type="text" className="form__block__input" placeholder="Email" />
        <input type="submit" className="form__block__button" value="Send" />
      </form>
    </div>
  );
};

export default LatestArticles;
