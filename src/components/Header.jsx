import React from 'react'
import Loupe from "../images/loupe.svg"
import Logo from "../images/logo.svg"
import Icon1 from "../images/icon-1.svg"
import Icon2 from "../images/icon-2.svg"
import Icon3 from "../images/icon-3.svg"


export const Header = () => {
  return (
    <header className="header">
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
                <span className="header__top-link">Garantee</span>
              </li>
              <li className="header__top-item">
                <span className="header__top-link">Reviews</span>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header__mid">
          <div className="header__col">
            <a className="header__phone" href="phone:+74951814656">
              <span className="header__phone--color">+7 (495)</span>
              181 46 56
            </a>
            <a className="header__phone" href="phone:+78127483322">
              <span className="header__phone--color">+7 (812)</span>
              748 33 22
            </a>
            <p className="header__text">
            График работы: 
              <span className="header__text--color">ежедневно с 9:00 до 21:00</span>
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
            Оформите заказ и 
              <span className="header__text--color">получите скидку!</span>
            </p>
          </div>
        </div>
      </div>
      <div className="header__bottom">
        <div className="container">
          <div className="header__bottom-inner">
            <nav className="header__bottom-nav">
              <ul className="header__bottom-list">
                <li className="header__bottom-item">
                  <button className="header__bottom-button"></button>
                </li>
                <li className="header__bottom-item">
                  <span className="header__bottom-link">Collections</span>
                </li>
                <li className="header__bottom-item">
                  <span className="header__bottom-link">Reviews</span>
                </li>
                <li className="header__bottom-item">
                  <span className="header__bottom-link">About</span>
                </li>
                <li className="header__bottom-item">
                  <span className="header__bottom-link">Color picks</span>
                </li>
              </ul>
            </nav>
            <div className="header__bottom-search header-search">
              <form className="header-search__form">
                <div className="header-search__field">
                  <input type="text"  />
                  <button className="header-search__find">
                    <img src={Loupe} alt="" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
