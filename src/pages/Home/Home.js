import React from 'react'
import BestProducts from '../../components/BestProducts/BestProducts'
import Brands from '../../components/Brands/Brands'
import HeadProduct from '../../components/HeadProduct/HeadProduct'
import ListCategory from '../../components/ListCategory/ListCategory'
import ListFeatures from '../../components/ListFeatures/ListFeatures'
import OfferSection from '../../components/OfferSection/OfferSection'
import RecentNews from '../../components/RecentNews/RecentNews'
import style from './Home.module.scss'

export default function Home() {

    return (
        <div className={style.container}>
            <HeadProduct />

            <div className={style.container__twoSection}>
                <ListCategory />
                <ListFeatures />
            </div>

            <OfferSection
                color="red"
                discount={"20% OFF"}
                title={"FINF \nSMID"}
                date={"15 Nov To 7 Dec"}
                img="./img/headphonered.png"
                subtitle={"Beats Solo Air"}
                season={"Summer Sale"}
                description="Labore exercitation tempor nulla aliquip in do veniam eiusmod pariatur."
            />

            <BestProducts />

            <OfferSection
                color="#2DCB6E"
                discount={"20% OFF"}
                title={"HAPPY \nHOURS"}
                date={"15 Nov To 7 Dec"}
                img="./img/watchgold.png"
                subtitle={"Beats Solo Air"}
                season={"Summer Sale"}
                description="Labore exercitation tempor nulla aliquip in do veniam eiusmod pariatur."
            />

            <RecentNews />

            <Brands />
        </div>
    )
}
