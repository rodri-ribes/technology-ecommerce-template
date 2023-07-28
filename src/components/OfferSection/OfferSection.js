import React from 'react'
import style from './OfferSection.module.scss';

export default function OfferSection({ color, discount, img, title, date, subtitle, season, description }) {
    return (
        <div className={style.container} style={{ background: color }}>
            <div className={style.container__lefth}>
                <p>{discount}</p>
                <h3>{title}</h3>
                <p>{date}</p>
                <img src={img} alt="offer" />
            </div>
            <div className={style.container__right}>
                <p>{subtitle}</p>
                <h4>{season}</h4>
                <p>{description}</p>
                <button style={{ color: color }}>Shop</button>
            </div>
        </div>
    )
}
