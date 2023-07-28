import React from 'react'
import { bestProducts } from '../../data/data';
import style from './BestProducts.module.scss';

export default function BestProducts() {
    return (
        <div className={style.container}>
            <h3>Best Seller Products</h3>
            <p>Officia esse dolor incididunt reprehenderit.</p>
            <div className={style.container__products}>
                {
                    bestProducts.map((p, i) => {
                        return (
                            <div className={style.container__products__card} key={i}>
                                <div className={style.container__products__card__img}>
                                    <p className={style.container__products__card__img_offer} style={{ display: `${p.sale > 0 ? "flex" : "none"}` }}>Sale!</p>
                                    <img src={p.img} alt={p.title} />
                                </div>
                                <p>{p.title}</p>
                                <div className={style.container__products__card__price}>
                                    <b style={{
                                        textDecoration: `${p.sale > 0 ? "line-through" : "none"}`,
                                        color: `${p.sale > 0 ? "gray" : "black"}`
                                    }}>$ {Intl.NumberFormat("es-AR").format(p.price)}</b>
                                    <b style={{ display: `${p.sale > 0 ? "flex" : "none"}` }}>$ {Intl.NumberFormat("es-AR").format(p.sale)}</b>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
