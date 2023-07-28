import React from 'react'
import style from './ListFeatures.module.scss';
import { features } from '../../data/data';

export default function ListFeatures() {
    return (
        <div className={style.container}>
            {
                features.map((p, i) => {
                    return (
                        <div key={i} className={style.container__card}>
                            <i className={p.svg}></i>
                            <div className={style.container__card__description}>
                                <b>{p.title}</b>
                                <p>{p.content}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
