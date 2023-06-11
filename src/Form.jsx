import { Component } from "react";
import { Link } from "react-router-dom";
import "./Form.css";
import location from '/gucci/location.png';
import main from '/gucci/main.img1.jpg';
import bag from '/gucci/bag1.webp';
import tag from '/gucci/bag2.webp';
import cag from '/gucci/bag3.webp';
import photo1 from '/gucci/main.img3.jpg';
import photo2 from '/gucci/main.img4.jpg';
import photo3 from '/gucci/main.img5.jpg';

class Form extends Component {


    render() {
        return (
            <div>
                <div className="main-2">
                    <div className="header2">
                        <div className="header-img">
                            <img className="location" src={location} alt="" />
                            <p className="turk">Turkey</p>
                            <p className="gucci-head"> GUCCI </p>
                        </div>
                        <div className="header-ul">
                            <ul className="ul">
                                <li>
                                    <div className="li-1">
                                        <Link data-di-id="data-fathers-day_1" to="/gift">
                                            FATHER'S DAY GIFT
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <Link data-di-id="gifts_2" to="/father">
                                            GIFTS
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <Link data-di-id="gifts_2" to="/new">
                                            WHAT'S NEW
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <Link data-di-id="gifts_2" to="/women">
                                            WOMEN
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <Link data-di-id="gifts_2" to="/men">
                                            MEN
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <Link data-di-id="gifts_2" to="/children">
                                            CHILDREN
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <Link data-di-id="gifts_2" to="/jewelry">
                                            JEWELERY AND WATCHES
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <Link data-di-id="gifts_2" to="/beauty">
                                            BEAUTY
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="main-bag">
                        <div className="button1">
                            <img className="bag1-webp" src={bag} alt="" />
                            <p className="p-bag1">TOTE BAG WITH ROUND INTERLOCKIN G</p>
                            <button className="bag1">
                                <p className="shop-button1">SHOP NOW</p>
                            </button>
                        </div>
                        <div className="button2">
                            <img className="bag2-webp" src={tag} alt="" />
                            <p className="p-bag2">GG MARMONT SMALL SHOULDER BAG</p>
                            <button className="bag2">
                                <p className="shop-button2">SHOP NOW</p>
                            </button>
                        </div>
                        <div className="button3">
                            <img className="bag3-webp" src={cag} alt="" />
                            <p className="p-bag3">GG MARMONT SHOULDER BAG</p>
                            <button className="bag3">
                                <p className="shop-button3">SHOP NOW</p>
                            </button>
                        </div>
                    </div>
                    <div className="main1">
                        <img className="main-img1" src={main} alt="" />
                        <p className="p1">Gucci Summer Stories</p>
                        <button className="button-main1">
                            <p className="shop-button">SHOP NOW</p>

                        </button>

                    </div>

                </div>

                <div className="hh">
                    <div className="hh-inside">
                        <div className="button-class">
                            <button className="class-button">
                                <div className="lastt">
                                    <p className="last-img">
                                        Gucci
                                        <br />
                                        Summer
                                        <br />
                                        Stories
                                    </p>
                                    <u className="discover">
                                        DISCOVER IN
                                        <br />
                                        CAMPAIGN
                                    </u>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="main-title">
                        <h2 className="title">STORIES</h2>
                    </div>
                    <div className="main">
                        <div>
                            <img className="photo1" src={photo1} alt="" />
                            <p className="photo11">Cruise 2024 Fashion Show</p>
                            <u className="photo111">THE FULL VIDEO</u>
                        </div>
                        <div>
                            <img className="photo2" src={photo2} alt="" />
                            <p className="photo22">The 21 with Halle Bailey</p>
                            <u className="photo222">READ MORE</u>
                        </div>
                        <div>
                            <img className="photo3" src={photo3} alt="" />
                            <p className="photo33">Vault Summer</p>
                            <u className="photo333">DISCOVER ME</u>
                        </div>
                    </div>
                    <div className="end">
                        <button className="end-button">
                            <div className="endbtnf">
                                <div>
                                    <p className="pp111">MAY WE HELP YOU?</p>
                                    <br />
                                    <div>
                                    <a className="href1" href="https://www.gucci.com/us/en/st/contact-us">Contact Us</a>
                                    </div>
                                <br />
                                <div>
                                <a className="href2" href="https://www.gucci.com/us/en/my-account/orders">My Order</a>
                                </div>
                                <br />
                                <div>
                                <a className="href3" href="https://www.gucci.com/us/en/st/faq">FAQS</a>
                                </div>
                                <br />
                                <div>
                                <a className="href4" href="https://www.gucci.com/us/en/newsletters/unsubscribe">Email Unsubcribes</a>
                                </div>
                                <br />
                                <a className="href5" href="https://www.gucci.com/us/en/st/sitemap">Sitemap</a>
                                </div>
                                <div>
                                    <p className="pp222">THE COMPANY</p>
                                    <br />
                                    <div>
                                    <a className="href6" href="https://www.gucci.com/us/en/st/about-gucci">About Gucci</a>
                                    </div>
                                    <br />
                                    <div>
                                    <a className="href7" href="https://equilibrium.gucci.com/">Gucci Eluqilibrim</a>
                                    </div>
                                    <br />
                                    <div>
                                    <a className="href8" href="https://www.gucci.com/us/en/st/code-ethics">Code of Ethics</a>
                                    </div>
                                    <br />
                                    <div>
                                    <a className="href9" href="https://careers.gucci.com/">Careers</a>
                                    </div>
                                    <br />
                                    <div>
                                    <a className="href10" href="https://www.gucci.com/us/en/st/legal-landing">Legal</a>
                                    </div>
                                    <br />
                                    <div>
                                    <a className="href11" href="https://www.gucci.com/us/en/st/privacy-landing">Privacy and Cookie Policy</a>
                                    </div>
                                    <br />
                                    <div>
                                    <a className="href12" href="https://www.gucci.com/us/en/st/corporate-information">Corporate Information</a>
                                    </div>
                                </div>
                                <div>
                                    <p className="pp333">GUCCI SERVICES</p>
                                    <br />
                                    <div>
                                    <a className="href13" href="https://www.gucci.com/us/en//st/capsule/gifts-services">Discovewr our Services</a>
                                    </div>
                                    <br />
                                    <div>
                                    <a className="href14" href="https://www.gucci.com/us/en/st/capsule/book-an-appointment">Book an Appointment</a>
                                    </div>
                                    <br />
                                    <a className="href15" href="https://www.gucci.com/us/en//st/collect-in-store">Collect in Store</a>
                                    <br />
                                    <p className="pp444">SIGN UP FOR GUCCI UPDATES</p>
                                    <br />
                                    <p className="pp555">By entering your email adsress below, you consent to receving our newsletter with </p>
                                    <p className="pp666">acces to our latest collection, events  and initiatives.More details on this</p>
                                    <p className="pp777"> are provided in our <a href="https://www.gucci.com/us/en/st/privacy-landing">Privacy Policy</a></p>
                                </div>
                                </div>
                                <div>
                                    <p className="pp888">GUCCI</p>
                                </div>
                        </button>


                    </div>
                </div>

            </div>



        );
    }
}

export default Form;