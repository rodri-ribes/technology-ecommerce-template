import React from 'react'
import style from './ListCategory.module.scss';
import { twosection } from '../../data/data';

export default function ListCategory() {
    return (
        <div className={style.container}>
            {
                twosection.map((p, i) => {
                    return (
                        <div key={i} className={style.container__card}>
                            <img src={p.img} alt={p.name} />
                            <p>{p.subtitle}</p>
                            <b>{p.category}</b>
                            <h4>{p.name}</h4>
                            <button>Browse</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
