import React from 'react'
import { news } from '../../data/data'
import style from './RecentNews.module.scss'

export default function RecentNews() {
    return (
        <div className={style.container}>
            <h3>Recent News</h3>
            <p>Ad labore laboris ipsum laborum.</p>
            <div className={style.container__posts}>
                {
                    news.map((p, i) => {
                        return (
                            <div className={style.container__posts__card} key={i}>
                                <img src={p.img} alt={p.title} />
                                <p>{p.date}</p>
                                <b>{p.title}</b>
                                <p>{p.content?.slice(0, 60)} ...</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
