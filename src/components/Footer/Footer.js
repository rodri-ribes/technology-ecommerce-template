import style from "./Footer.module.scss"
import SocialNetworks from './SocialNetworks/SocialNetworks'

function Footer() {
    return (
        <footer className={style.container}>
            <div className={style.container__wrapper}>

                <div className={style.container__wrapper__logo}>
                    <h4>RIBES-TECH</h4>
                    <p>Culpa laboris sint cupidatat veniam id nisi culpa officia.</p>
                    <SocialNetworks
                        social={{
                            instagram: "#",
                            linkedin: "#",
                            facebook: "#",
                            twitter: "#",
                        }}
                    />
                </div>

                <div className={style.container__wrapper__links}>
                    <b>Quick Links</b>
                    <p>Home</p>
                    <p>About</p>
                    <p>Shop</p>
                    <p>Contact</p>
                </div>

                <div className={style.container__wrapper__contact}>
                    <b>Contact</b>
                    <p>Irure irure adipisicing aute irure duis excepteur duis ad proident esse quis pariatur do.</p>
                </div>

                <div className={style.container__wrapper__subscription}>
                    <b>Subscribe to Our Email</b>
                    <h4>For Latest News & Updates</h4>
                    <div className={style.container__wrapper__suscription__input}>
                        <input type={"email"} placeholder="Enter Your Email" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <p className={style.container__copy}>Copyright © {new Date().getFullYear()} All rights reserved | This template is made with ♥ by <a href="https://rodrigoribes.netlify.app/" target="_blank" rel="noreferrer" >Ribes</a></p>

        </footer>
    );
}

export default Footer;