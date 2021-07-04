import React ,{ useState } from "react";
import Slider from "react-slick";
import {nemoneData} from '../data/data'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const Nemoone = () => {
     const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow-nemone next-nemone" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow-nemone prev-nemone" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="nemone-container">
        <h2>نمونه آگهی ثبت شده</h2>
      <Slider {...settings}>
        {nemoneData.map((item, idx) => (
          <div key={item.id} className={idx === imageIndex ? "slide-nemone activeSlide-nemone" : "slide-nemone"}>
              {idx===imageIndex&&<div></div>}
            <img src={item.image} alt={item.id} />
           {idx===imageIndex&& <div className="nemone-text">
                <div className='mini-nemone'>
                    <h3>{item.text}</h3>
                </div>
             </div>} 
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Nemoone
