import React from 'react'
import { brands } from '../../data/data';
import style from './Brands.module.scss';

export default function Brands() {
    return (
        <div className={style.container}>
            {
                brands.map((p, i) => {
                    return (
                        <img className={style.container_img} src={p} alt="brand" key={i} />
                    )
                })
            }
        </div>
    )
}
