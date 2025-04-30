import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";

function Wrapper() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 3000 
      };
  return (
    <div className="container1">
      <div className=" slider-container" style={{ width: '100%', margin: 'auto'}}>
      <Slider {...settings}>
        <div style={{ backgroundColor: 'lightblue', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img className="w-[100%] rounded-3xl" src="https://s3.fortifai.uz/shop/catalog/carousel/215/1716885790-meta_800x284_ru.png" alt="" />
        </div>
        <div style={{ backgroundColor: 'lightgreen', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
       <img className="w-[100%] rounded-3xl" src="https://s3.fortifai.uz/shop/catalog/carousel/268/1737111160-sokany_ru_800x284.png" alt="" />
        </div>
        <div style={{ backgroundColor: 'lightcoral', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img className="w-[100%] rounded-3xl" src="https://s3.fortifai.uz/shop/catalog/carousel/294/1744973342-Novinka_infinix_ru_800x284.png" alt="" />
        </div>
      </Slider>
    </div>
    </div>
  );
}

export default Wrapper;