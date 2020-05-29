import React from "react";
import Slider from "react-slick";

import ArrowNext from "../images/arrow-right.inline.svg";
import ArrowPrev from "../images/arrow-left.inline.svg";

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <button
      className={className}
      onClick={onClick}
      onKeyDown={onClick}
    >
      <ArrowNext/>
    </button>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button
      className={className}
      onClick={onClick}
      onKeyDown={onClick}
    >
      <ArrowPrev/>
    </button>
  );
}

const SlickSlider = ({ data }) => {
  //console.log("databug = "+JSON.stringify(data))

  const settings = {
      dots: false,
      infinite: true,
      fade: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    }
  return (
    <>
      <Slider {...settings}>
        {data.testimonials.map((testimonial,i) => (
          <div key={i} className="testimonial-wrapper">
            <div className="testimonial-comment"
              dangerouslySetInnerHTML={{ __html: testimonial.comment }}
            />
            <h3
              dangerouslySetInnerHTML={{ __html: testimonial.from }}
            />
          </div>
        ))}
      </Slider>
    </>
  )
}

export default SlickSlider