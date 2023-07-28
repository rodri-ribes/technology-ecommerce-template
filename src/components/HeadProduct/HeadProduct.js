import React from 'react'
import style from './HeadProduct.module.scss';

export default function HeadProduct() {
    return (
        <div className={style.container}>
            <p>Beast Solo</p>
            <h4>Wireless</h4>
            <h3>HEADPHONE</h3>
            <img src='./img/headphoneblack.png' alt="headphone" />
            <div className={style.container__buttonAndDescription}>
                <button>Shop by Category</button>
                <div className={style.container__buttonAndDescription__description}>
                    <b>Description</b>
                    <p>Amet veniam laborum magna irure voluptate nisi esse officia.</p>
                </div>
            </div>
        </div>
    )
}
