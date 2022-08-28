import React from "react";
import Grid from "../images/tiles.png";
import GridMob from "../images/tiles-mob.png";
import Play from "../images/play.svg"
import Pic1 from "../images/video-1.jpg" 
import Pic2 from "../images/video-2.jpg" 
import Pic3 from "../images/video-3.jpg" 
import Pic4 from "../images/video-4.jpg" 
import Pic5 from "../images/video-5.jpg" 
import Pic6 from "../images/video-6.jpg" 
import Pic7 from "../images/video-7.jpg" 
import Pic8 from "../images/video-8.jpg" 

const Reviews = () => {
  const items = [
    { img: Pic1, name: "Set «WATER COLOR»" },
    { img: Pic2, name: "Set «DIWALI»" },
    { img: Pic3, name: "Set «TRIANON»" },
    { img: Pic4, name: "Set «Authentic»" },
    { img: Pic5, name: "Set «FESTON»" },
    { img: Pic6, name: "Set «CADIX»" },
    { img: Pic7, name: "Set «ZELIE»" },
    { img: Pic8, name: "Set «HARENA»" },
    { img: Pic5, name: "Set «PRESTON»" },
    { img: Pic6, name: "Set «CADLIX»" },
    { img: Pic7, name: "Set «ZELINE»" },
    { img: Pic8, name: "Set «HAREMA»" },
  ]
  
  const [itemsToShow, setItemsToShow] = React.useState(8)

  const onShowMore = () => setItemsToShow(itemsToShow + 4)

  return (
    <div className="reviews">
      <div className="container">
        <div className="reviews__items">
          {items.slice(0, itemsToShow).map(({ img, name }) => 
            <div className="reviews__item" key={name}>
              <p className="reviews__item-name">{name}</p>
              <div className="reviews__item-box">
                <img className="reviews__item-img" src={img} alt="" />
                <button className="reviews__item-play">
                  <img src={Play} alt="" />
                </button>
              </div>
              <button className="reviews__item-link">Explore collection</button>
            </div>
          )}
        </div>
        {itemsToShow !== items.length && <div className="reviews__more-wrap">
          <button className="reviews__more" onClick={onShowMore}>Show more</button>
        </div>}
        <div className="catalog__grid">
          <picture className="catalog__grid-images">
            <source srcSet={Grid} media="(min-width: 768px)" />
            <source srcSet={GridMob} media="(max-width: 767px)" />
            <img src={Grid} alt="logo" />
          </picture>
        </div>
      </div>
    </div>
  );
};

export  default Reviews
