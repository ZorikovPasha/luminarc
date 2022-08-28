import React from "react";
import { MobMenu } from "./MobMenu";
import { ROUTES } from "../utils/const";
import { Link } from "react-router-dom";
import Loupe from "../images/loupe.svg";
import LoupeWhite from "../images/loupe-white.svg";
import Logo from "../images/logo.svg";
import LogoWhite from "../images/footer-logo.svg";
import Icon1 from "../images/icon-1.svg";
import Icon2 from "../images/icon-2.svg";
import Icon3 from "../images/icon-3.svg";
import Burger from "../images/burger.svg";
import Phone from "../images/phone.svg";
import Cart from "../images/cart.svg";
import Heart from "../images/heart.svg";
import { useScreenSize } from "../hooks/useScreenSize";

import Pic1 from "../images/drop-1.png"
import Pic2 from "../images/drop-2.png"
import Pic3 from "../images/drop-3.png"
import Pic4 from "../images/drop-4.png"
import Pic5 from "../images/drop-5.png"
import Pic6 from "../images/drop-6.png"
import Pic7 from "../images/drop-7.png"
import Pic8 from "../images/drop-8.png"
import Pic9 from "../images/drop-9.png"
import Pic10 from "../images/drop-10.png"
import Pic11 from "../images/drop-11.png"
import Pic12 from "../images/drop-12.png"
import Pic13 from "../images/drop-13.png"
import Pic14 from "../images/drop-14.png"
import Pic15 from "../images/drop-15.png"
import Pic16 from "../images/drop-16.png"

export const Header = () => {
  const items = [
    { img: Pic1, name: "Table sets" },
    { img: Pic2, name: "Tea sets" },
    { img: Pic3, name: "Plates" },
    { img: Pic4, name: "Salad bowls" },
    { img: Pic5, name: "Dishes / Herrings" },
    { img: Pic6, name: "Wine Glasses" },
    { img: Pic7, name: "Glasses" },
    { img: Pic8, name: "Cups" },
    { img: Pic9, name: "Tureens / Bouillons" },
    { img: Pic10, name: "Heat-resistant cookware" },
    { img: Pic11, name: "Glass containers" },
    { img: Pic12, name: "Banks for bulk" },
    { img: Pic13, name: "Вrinking sets" },
    { img: Pic14, name: "Зitchers" },
    { img: Pic15, name: "Shelves / Cabinets" },
    { img: Pic16, name: "Children's tableware" },
  ]
  const isDesktop = useScreenSize();

  const openMenu = React.useRef(null)

  const onOpen = () => {
    openMenu.current(true)
    document.body.classList.add("lock")
  }

  return (
    <header className="header">
      {isDesktop ? (
        <>
          <div className="container">
            <div className="header__top">
              <nav className="header__nav">
                <ul className="header__top-list">
                  <li className="header__top-item">
                    <span className="header__top-link">About Us</span>
                  </li>
                  <li className="header__top-item">
                    <span className="header__top-link">Delivery</span>
                  </li>
                  <li className="header__top-item">
                    <span className="header__top-link">Contact</span>
                  </li>
                  <li className="header__top-item">
                    <span className="header__top-link">Guarantee</span>
                  </li>
                  <li className="header__top-item">
                    <Link to={ROUTES.reviews} className="header__top-link">
                      Reviews
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="header__mid">
              <div className="header__col">
                <a className="header__phone" href="phone:+74951814656">
                  <span className="header__phone--color">+7 (495)</span> 181 46 56
                </a>
                <a className="header__phone" href="phone:+78127483322">
                  <span className="header__phone--color">+7 (812)</span> 748 33 22
                </a>
                <p className="header__text">
                  Schedule:{" "}
                  <span className="header__text--color">Open every day 9:00 21:00</span>
                </p>
              </div>
              <div className="header__col">
                <img src={Logo} alt="logo" className="header__logo" />
              </div>
              <div className="header__col">
                <div className="header__actions">
                  <button className="header__button">
                    <img src={Icon1} alt="" className="header__button-img" />
                  </button>
                  <button className="header__button">
                    <img src={Icon2} alt="" className="header__button-img" />
                    <span className="header__count">3</span>
                  </button>
                  <button className="header__button">
                    <img src={Icon3} alt="" className="header__button-img" />
                    <span className="header__count">3</span>
                  </button>
                </div>
                <p className="header__text">
                  Submit your order <span className="header__text--color">get our discount!</span>
                </p>
              </div>
            </div>
          </div>
          <div className="header__bottom">
            <div className="container">
              <div className="header__bottom-inner">
                <nav className="header__bottom-nav">
                  <ul className="header__bottom-list">
                    <li className="header__bottom-item" data-drop-toggle>
                      <button className="header__bottom-button">Catalog</button>

                      <div className="dropdown">
                        {items.map(({ img, name }) => (
                          <div className="dropdown__item" key={name}>
                            <img className="dropdown__item-img" src={img} alt="" />
                            <p className="dropdown__item-name">{name}</p>
                          </div>
                        ))}
                      </div>
                    </li>
                    <li className="header__bottom-item">
                      <span className="header__bottom-link">Collections</span>
                    </li>
                    <li className="header__bottom-item header__bottom-item--decor">
                      <Link to={ROUTES.reviews} className="header__bottom-link">Reviews</Link>
                    </li>
                    <li className="header__bottom-item header__bottom-item--decor">
                      <span className="header__bottom-link">About</span>
                    </li>
                    <li className="header__bottom-item header__bottom-item--decor">
                      <span className="header__bottom-link">Color picks</span>
                    </li>
                  </ul>
                </nav>
                <div className="header__bottom-search header-search">
                  <form className="header-search__form">
                    <div className="header-search__field">
                      <input
                        className="header-search__input"
                        placeholder="Search..."
                        type="text"
                        name="search"
                      />
                      <button className="header-search__find">
                        <img src={Loupe} alt="" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="container">
            <div className="header__inner">
              <div className="header__left">
                <button className="header__burger header__button" onClick={onOpen}>
                  <img src={Burger} alt="" />
                </button>
                <button className="header__button">
                  <img src={Phone} alt="" />
                </button>
              </div>
              <Link to={ROUTES.main} className="header__logo">
                <img src={LogoWhite} alt="" />
              </Link>
              <div className="header__right">
                <button className="header__button">
                  <img src={LoupeWhite} alt="" />
                </button>
                <button className="header__button">
                  <img src={Heart} alt="" />
                </button>
                <button className="header__button">
                  <img src={Cart} alt="" />
                </button>
              </div>
            </div>
          </div>

        <MobMenu openMenu={openMenu} />
        </>
      )}
    </header>
  );
};
