import React,{useEffect} from 'react';
import styles from "./styles.module.css";
import Slider from "react-slick";
import Aos from 'aos';
import 'aos/dist/aos.css';

const data = [
    {
        image : "https://jthemes.net/themes/wp/olmo/wp-content/uploads/2021/10/review-author-1.jpg",
        name :"Scott Boxer",
        title :"Developer",
    },
    {
        image : "https://jthemes.net/themes/wp/olmo/wp-content/uploads/2021/10/review-author-6.jpg",
        name :"Jonathan Barnes",
        title :"jQuery Programmer"
    },
    {
        image : "https://jthemes.net/themes/wp/olmo/wp-content/uploads/2021/10/review-author-3.jpg",
        name :"Marison Ila",
        title :"Frontend Developer"
    },
    {
        image : "https://jthemes.net/themes/wp/olmo/wp-content/uploads/2021/10/review-author-5.jpg",
        name :"Jennifer Harper",
        title :"App Developer",
    }
]
const Testimonials = () => {   
    useEffect(() => {
        Aos.init({ duration: 1400, delay: 200 });
      }, []);
    
const cardsStyle = {
    display:"flex", flexDirection :'row',justifyContent:"center" ,textAlign:"center",
    '@media screen and (max-width: 996px)': {
        flexDirection :'column'
      },
}
  return (
 <div className={styles.tradecontainer}>
 <div className={styles.testimonials}>
 <h2 style={{fontWeight:400}}>
 We make trading easier &amp; guess what? <br/> They love us for it 
<img alt="🙂" src="https://s.w.org/images/core/emoji/14.0.0/svg/1f642.svg" width="20" height="20"/>
</h2>
</div>
{/*  */}
<div style={cardsStyle}  data-aos="fade-right">
{data.map((item ,index)=>(
  <div
   className={styles.card}
  
  >
  <img className={styles.avatar} src={item.image} alt="Avatar" />
  <div key={index}>
  <h3><b>{item.name}</b></h3> 
  <p>{item.title}</p>
  </div>
</div> 
))}
</div>
</div>
  )
}

export default Testimonials