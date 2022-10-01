import React from 'react'
import Slider from "react-slick";
import Tradinglogo from "../../../assets/tradingwolf-logo.png";
import styles from "./styles.module.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import brandone from "../../../assets/brand-1.png"
import brandtwo from "../../../assets/brand-2.png"
import brandthree from "../../../assets/brand-3.png"
import brandfour from "../../../assets/brand-4.png"
import brandfive from "../../../assets/brand-5.png"

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 2000,
  cssEase: "linear"
};

const Slidercustomer = () => {
  return (
    <div className="container">
    <div className={styles.slider}>
     <h1 style={{fontWeight:800}}>Our Clients</h1>
    <Slider {...settings}>
      <div >
      <img src={brandone} width="150" height="100" alt="customer"/>
      </div>
      <div>
      <img src={brandtwo} width="150" height="100" alt="customer"/>
      </div>
      <div>
      <img src={brandthree} width="150" height="100" alt="customer"/>
      </div>
      <div>
      <img src={brandfour} width="150" height="100" alt="customer"/>
      </div>
      <div>
      <img src={brandfive} width="150" height="100" alt="customer"/>
      </div>
    </Slider>
  </div>
  </div>
  )
}

export default Slidercustomer