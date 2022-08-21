import React from 'react'
import { Link } from "react-router-dom";

import { ROUTES } from '../utils/const';
import Logo from "../images/footer-logo.svg"
import Up from "../images/up.svg"
import Pay1 from "../images/pay-1.jpg"
import Pay2 from "../images/pay-2.jpg"
import Pay3 from "../images/pay-3.jpg"
import Pay4 from "../images/pay-4.png"
import Pay5 from "../images/pay-5.png"
import Pay6 from "../images/pay-6.png"

export const Footer = () => {
  const onLift = () => window.scrollTo({top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div className="footer__col">
            <Link className="footer__link" to={ROUTES.main}>
              <img src={Logo} alt="" />
            </Link>
            <a href="phone:+78127483322" className="footer__phone">+7 (812) 748 33 22</a>
            <a href="phone:+74951814656" className="footer__phone">+7 (495) 181 46 56</a>
            <a href="mailto:info@lum-store.ru" className="footer__mail">info@lum-store.ru</a>
            <p className="footer__label">Понедельник - Суббота: </p>
            <p className="footer__label">с 9:00 до 21:00 </p>
            <p className="footer__label footer__label--pushed">Воскресенье:</p>
            <p className="footer__label">с 9:00 до 19:00</p>
          </div>
          <div className="footer__col">
            <p className="footer__col-title">Меню сайта</p>
            <ul className="footer__list">
              <li className="footer__list-tem">
                <span className="footer__list-link">Каталог</span>
              </li>
              <li className="footer__list-tem">
                <span className="footer__list-link">Коллекции</span>
              </li>
              <li className="footer__list-tem">
                <span className="footer__list-link">Видеообзоры</span>
              </li>
              <li className="footer__list-tem">
                <span className="footer__list-link">О Люминарк</span>
              </li>
              <li className="footer__list-tem">
                <span className="footer__list-link">Цветовые подборки</span>
              </li>
            </ul>
          </div>
          <div className="footer__col">
          <p className="footer__col-title">Магазин</p>
            <ul className="footer__list">
              <li className="footer__list-tem">
                <span className="footer__list-link">О магазине</span>
              </li>
              <li className="footer__list-tem">
                <span className="footer__list-link">Акции</span>
              </li>
              <li className="footer__list-tem">
                <span className="footer__list-link">Гарантии</span>
              </li>
              <li className="footer__list-tem">
                <span className="footer__list-link">Отзывы</span>
              </li>
              <li className="footer__list-tem">
                <span className="footer__list-link">Статьи</span>
              </li>
              <li className="footer__list-tem">
                <span className="footer__list-link">Контакты</span>
              </li>
            </ul>
          </div>
          <div className="footer__col">
          <p className="footer__col-title">Сервис</p>
            <ul className="footer__list">
              <li className="footer__list-tem">
                <span className="footer__list-link">Время работы</span>
              </li>
              <li className="footer__list-tem">
                <span className="footer__list-link">Доставка и оплата</span>
              </li>
              <li className="footer__list-tem">
                <span className="footer__list-link">Условия обмена и возврата</span>
              </li>
              <li className="footer__list-tem">
                <span className="footer__list-link">Политика конфиденциальности и оферта</span>
              </li>
            </ul>
          </div>
          <div className="footer__col footer__col--max-width">
            <p className="footer__col-title footer__col-title--big">We accept</p>
            <div className="footer__pays">
              <img src={Pay1} alt="" />
              <img src={Pay2} alt="" />
              <img src={Pay3} alt="" />
            </div>
            <div className="footer__pays">
              <img src={Pay4} alt="" />
              <img src={Pay5} alt="" />
              <img src={Pay6} alt="" />
            </div>
            <span className="footer__agree">Пользовательское соглашение</span>
          </div>

          <button className="footer__up" onClick={onLift}>
            <img src={Up} alt="" />
          </button>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <p className="footer__bottom-text">© 2007-2021 г. Lum-Store</p>
        </div>
      </div>
    </footer>
  )
}
