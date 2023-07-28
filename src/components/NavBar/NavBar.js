import React, { useState } from 'react'
import style from './NavBar.module.scss';


export default function NavBar() {

    const [clickMobile, setClickMobile] = useState(false)

    const changeClick = () => {
        setClickMobile(false);
    }

    return (
        <div className={style.container}>
            <div className={style.container__wrapper}>
                <div className={style.container__wrapper__logo}>
                    {/* <img src='./img/kfc_logo.png' alt='logo' /> */}
                    <p>RIBES-TECH</p>
                </div>

                <div className={style.container__wrapper__menu} style={{ left: `${clickMobile ? "0" : "-100%"}` }}>
                    <div className={style.container__wrapper__menu__item} onClick={() => changeClick()}>
                        <i className="bi bi-house"></i>
                        <a href='#home'>Home</a>
                    </div>

                    <div className={style.container__wrapper__menu__item} onClick={() => changeClick()}>
                        <i className="bi bi-bag"></i>

                        <a href='#home'>Shop</a>
                    </div>

                    <div className={style.container__wrapper__menu__item} onClick={() => changeClick()}>
                        <i className="bi bi-info-circle"></i>
                        <a href='#home'>About Us</a>
                    </div>
                    <div className={style.container__wrapper__menu__item} onClick={() => changeClick()}>
                        <i className="bi bi-view-list"></i>
                        <a href='#home'>blog</a>
                    </div>
                    <div className={style.container__wrapper__menu__item} onClick={() => changeClick()}>
                        <i className="bi bi-chat-right-dots"></i>
                        <a href='#home'>Contact Us</a>
                    </div>
                </div>

                <div className={style.container__wrapper__secondMenu}>
                    <p>login</p>
                    <i className="bi bi-search"></i>
                    <i className="bi bi-bag"></i>
                </div>

                <div className={style.container__wrapper__iconMobile} onClick={() => setClickMobile(!clickMobile)}>
                    {
                        clickMobile ?
                            <i className="bi bi-x-lg"></i>
                            :
                            <i className="bi bi-list"></i>
                    }
                </div>
            </div>
        </div>
    )
}
