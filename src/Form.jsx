import { Component } from "react";
import { Link } from "react-router-dom";
import "./Form.css";
import location from '/gucci/location.png';
import telephone from '/gucci/telephone.png';
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
                            <div className="header-phone">
                                <img className="phone" src={telephone} alt="" />
                                <p className="telefon"> +39 0550622949</p>
                            </div>
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
                                        <Link data-di-id="gifts_2" to="us/en/ca/jewelry-watches-c-jewelry-watches">
                                            JEWELERY AND WATCHES
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <Link data-di-id="gifts_2" to="us/en/ca/beauty-c-beauty">
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
                            {/* <div>
                            <img className="facebook" src={facebook} alt="" />
                            </div> */}
                        </button>


                    </div>
                </div>

            </div>



        );
    }
}

export default Form;