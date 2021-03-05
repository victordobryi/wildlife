import React, { Component } from "react";
import "./latest-articles-slider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";

import bird from "../../img/bird.jpg";
import deer from "../../img/deer.jpg";
import squirrel from "../../img/Squirrel.jpg";
import left from "../../img/left.png";
import right from "../../img/right.png";

const photos = [
  {
    name: "Deer",
    logo: deer,
    subtitle: "Naturalist investigation",
    id: "xaxaxa",
  },
  {
    name: "Squirrel",
    logo: squirrel,
    subtitle: "Kamikaze squirrels",
    id: "adadad",
  },
  {
    name: "Bird",
    logo: bird,
    subtitle: "Birds Fight club",
    id: "adad",
  },
  {
    name: "Deer",
    logo: deer,
    subtitle: "Naturalist investigation",
    id: "dadadareae",
  },
  {
    name: "Squirrel",
    logo: squirrel,
    subtitle: "Kamikaze squirrels",
    id: "dadzc",
  },
  {
    name: "Bird",
    logo: bird,
    subtitle: "Birds Fight club",
    id: "daeae",
  },
];

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={"slick-nextsius slick__arrows"}
      style={{
        left: "1081px",
        backgroundImage: `url(${right})`,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={"slick-previous slick__arrows"}
      style={{
        left: "-88px",
        backgroundImage: `url(${left})`,
      }}
      onClick={onClick}
    />
  );
}

class MainSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      classname: "slides",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    return (
      <div className="slider">
        <Slider {...settings}>
          {photos.map((photo) => {
            const TodoComponent = styled.div`
              background-image: url(${photo.logo});
              width: 300px;
              height: 360px;
              background-repeat: no-repeat;
            `;

            return (
              <TodoComponent>
                <div key={photo.id}>
                  <h2 className="slider__title">{photo.name}</h2>
                  <h3 className="slider__subtitle">{photo.subtitle}</h3>
                </div>
              </TodoComponent>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default MainSlider;
