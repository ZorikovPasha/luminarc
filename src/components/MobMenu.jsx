import React from 'react'
import { ROUTES } from '../utils/const'
import { Link } from "react-router-dom";
import Logo from "../images/logo.svg";


export const MobMenu = ({ openMenu }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  openMenu.current = setIsOpen

  const onClose = () => {
    document.body.classList.remove("lock")
    setIsOpen(false)
  }

  return (
    <div className={`mobmenu ${isOpen ? "opened": ""}`}>
      <div className={`mobmenu__body ${isOpen ? "opened": ""}`}>
        <button className="mobmenu__close" onClick={onClose}>
          <span></span>
          <span></span>
        </button>

        <Link to={ROUTES.main} className="mobmenu__logo">
          <img src={Logo} alt="" />
        </Link>

        <ul className="mobmenu__list">
          <li className="mobmenu__list-item">
            <span className="mobmenu__list-link">About Us</span>
          </li>
          <li className="mobmenu__list-item">
            <span className="mobmenu__list-link">Delivery</span>
          </li>
          <li className="mobmenu__list-item">
            <span className="mobmenu__list-link">Contact</span>
          </li>
          <li className="mobmenu__list-item">
            <span className="mobmenu__list-link">Guarantee</span>
          </li>
        </ul>

        <a className="header__phone" href="phone:+74951814656">
          +7 (495) 181 46 56
        </a>
        <a className="header__phone" href="phone:+78127483322">
          +7 (812) 748 33 22
        </a>
      </div>
    </div>
  )
}
