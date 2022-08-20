import React from 'react'
import Banner from "../images/banner-1.jpg"
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

export const Main = () => {
  const items = [
    { img: Pic1, text: "" },
    { img: Pic2, text: "" },
    { img: Pic3, text: "" },
    { img: Pic4, text: "" },
    { img: Pic5, text: "" },
    { img: Pic6, text: "" },
    { img: Pic7, text: "" },
    { img: Pic8, text: "" },
    { img: Pic9, text: "" },
    { img: Pic10, text: "" },
    { img: Pic11, text: "" },
    { img: Pic12, text: "" },
    { img: Pic13, text: "" },
    { img: Pic14, text: "" },
    { img: Pic15, text: "" },
    { img: Pic16, text: "" },
  ]
  return (
    <>
      <div className="top">
        <div className="container">
          <div className="top__inner">
            <h1 className="top__title">Luminarc</h1>
            <p className="top__text">Высокое искусство для высокой кухни</p>

            <div className="top__label">
              <p className="top__label-name">Set</p>
              <p className="top__label-text">Jacinthe</p>
            </div>
          </div>
        </div>
      </div>
      <section className="catalog">
        <div className="container">
          <div className="catalog__banner">
            <img className="catalog__banner-img" src={Banner} alt="" />
          </div>
          <div className="catalog__tiles">
            {items.map(({ img, text }) => 
              <div className="catalog__tile" key={text}>
                <img className="catalog__tile-img" src={img} alt="" />
                <p className="catalog__tile-name">{text}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
