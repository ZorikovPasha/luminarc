import React from 'react'
import Grid from "../images/tiles.png"
import GridMob from "../images/tiles-mob.png";

import Pic1 from "../images/cat-1.jpg"
import Pic2 from "../images/cat-2.jpg"
import Pic3 from "../images/cat-3.jpg"
import Pic4 from "../images/cat-4.jpg"
import Pic5 from "../images/cat-5.jpg"
import Pic6 from "../images/cat-6.jpg"
import Pic7 from "../images/cat-7.jpg"
import Pic8 from "../images/cat-8.jpg"
import Pic9 from "../images/cat-9.jpg"
import Pic10 from "../images/cat-10.jpg"
import Pic11 from "../images/cat-11.jpg"
import Pic12 from "../images/cat-12.jpg"
import Pic13 from "../images/cat-13.jpg"
import Pic14 from "../images/cat-14.jpg"
import Pic15 from "../images/cat-15.jpg"
import Pic16 from "../images/cat-16.jpg"

export const items = [
  { img: Pic1, text: "Table sets" },
  { img: Pic2, text: "Tea sets" },
  { img: Pic3, text: "Plates" },
  { img: Pic4, text: "Salad bowls" },
  { img: Pic5, text: "Dishes / Herrings" },
  { img: Pic6, text: "Wine Glasses" },
  { img: Pic7, text: "Glasses" },
  { img: Pic8, text: "Cups" },
  { img: Pic9, text: "Tureens / Bouillons" },
  { img: Pic10, text: "Heat-resistant cookware" },
  { img: Pic11, text: "Glass containers" },
  { img: Pic12, text: "Banks for bulk" },
  { img: Pic13, text: "Вrinking sets" },
  { img: Pic14, text: "Зitchers" },
  { img: Pic15, text: "Shelves / Cabinets" },
  { img: Pic16, text: "Children's tableware" },
]

export const Main = () => {  
  return (
    <>
      <div className="top">
        <div className="container">
          <div className="top__inner">
            <h1 className="top__title">Luminarc</h1>
            <p className="top__text">High quality products for your kitchen</p>

            <div className="top__label">
              <p className="top__label-name">Set</p>
              <p className="top__label-text">Jacinthe</p>
            </div>
          </div>
        </div>
      </div>
      <section className="catalog">
        <div className="container">
          <div className="catalog__inner">
            <div className="catalog__tiles">
              {items.map(({ img, text }) => 
                <div className="catalog__tile" key={text}>
                  <div className="catalog__tile-box">
                    <img className="catalog__tile-img" src={img} alt="" />
                  </div>
                  <p className="catalog__tile-name">{text}</p>
                </div>
              )}
            </div>
            <div className="catalog__grid">
              <picture className="catalog__grid-images">
                <source className="catalog__grid-img" srcSet={Grid} media="(min-width: 768px)" />
                <source className="catalog__grid-img" srcSet={GridMob} media="(max-width: 767px)" />
                <img className="catalog__grid-img" src={Grid} alt="logo" />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
