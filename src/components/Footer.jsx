import React from 'react'
import { Link } from "react-router-dom";

import { ROUTES } from '../utils/const';
import Logo from "../images/footer-logo.svg"
import Up from "../images/up.svg"
import Pay1 from "../images/pay-1.png"
import Pay2 from "../images/pay-2.png"
import Pay3 from "../images/pay-3.png"
import Pay4 from "../images/pay-4.png"
import Pay5 from "../images/pay-5.png"
import Pay6 from "../images/pay-6.png"
import { useScreenSize } from '../hooks/useScreenSize';

export const Footer = () => {

  const onLift = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const isMobile = !useScreenSize(767)

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div className="footer__col footer__col--fg">
            <Link className="footer__logo" to={ROUTES.main}>
              <img src={Logo} alt="" />
            </Link>
            {!isMobile && <div className="footer__col-block">
              <a href="phone:+78127483322" className="footer__phone">+7 (812) 748 33 22</a>
              <a href="phone:+74951814656" className="footer__phone">+7 (495) 181 46 56</a>
              <a href="mailto:info@lum-store.ru" className="footer__mail">info@lum-store.ru</a>
            </div>}
            <div className="footer__col-block footer__col-block--fgrow">
              <p className="footer__label">Mon - Sat: 9:00 - 21:00 </p>
              <p className="footer__label footer__label--pushed">Sun: 9:00 - 19:00</p>
            </div>
          </div>
          {isMobile && <div className="footer__col footer__col--fullwidth">
            <a href="phone:+78127483322" className="footer__phone">+7 (812) 748 33 22</a>
              <a href="phone:+74951814656" className="footer__phone">+7 (495) 181 46 56</a>
              <a href="mailto:info@lum-store.ru" className="footer__mail">info@lum-store.ru</a>
            </div>}
          <div className="footer__col">
            <p className="footer__col-title">Menu</p>
            <ul className="footer__list">
              <li className="footer__list-tem">
                <span className="footer__list-link">Catalog</span>
              </li>
              <li className="footer__list-tem">
                <span className="footer__list-link">Sets</span>
              </li>
              <li className="footer__list-tem">
                <Link to={ROUTES.reviews} className="footer__list-link">Reviews</Link>
              </li>
              <li className="footer__list-tem">
                <span className="footer__list-link">About Luminarc</span>
              </li>
              <li className="footer__list-tem">
                <span className="footer__list-link">Color picks</span>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <p className="footer__col-title">Store</p>
            <ul className="footer__list">
              <li className="footer__list-tem">
                <span className="footer__list-link">About</span>
              </li>
              <li className="footer__list-tem">
                <span className="footer__list-link">Sales</span>
              </li>
              <li className="footer__list-tem">
                <span className="footer__list-link">Garantee</span>
              </li>
              <li className="footer__list-tem">
                <Link to={ROUTES.reviews} className="footer__list-link">Reviews</Link>
              </li>
              <li className="footer__list-tem">
                <span className="footer__list-link">Articles</span>
              </li>
              <li className="footer__list-tem">
                <span className="footer__list-link">Contact</span>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <p className="footer__col-title">Service</p>
            <ul className="footer__list">
              <li className="footer__list-tem">
                <span className="footer__list-link">Working hours</span>
              </li>
              <li className="footer__list-tem">
                <span className="footer__list-link">Shipping and payment</span>
              </li>
              <li className="footer__list-tem">
                <span className="footer__list-link">Terms of exchange and return</span>
              </li>
              <li className="footer__list-tem">
                <span className="footer__list-link">Privacy policy and offer</span>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <p className="footer__col-title footer__col-title--big">We accept</p>
            <div className="footer__pays">
              <img src={Pay1} alt="" />
              <img src={Pay2} alt="" />
              <img src={Pay3} alt="" />
              <img src={Pay4} alt="" />
              <img src={Pay5} alt="" />
              <img src={Pay6} alt="" />
            </div>
            <span className="footer__agree">User agreement</span>
          </div>

          <button className="footer__up" onClick={onLift}>
            <img src={Up} alt="" />
          </button>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <p className="footer__bottom-text">© 2007-2021. Lum-Store</p>
        </div>
      </div>
    </footer>
  )
}
