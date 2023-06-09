import { Link } from 'react-router-dom';
import "./Man.css";
import men from '/gucci/men.webp';
import men1 from '/gucci/men1.webp';
import men2 from '/gucci/men2.webp';
import men3 from '/gucci/men3.jpg';
import men4 from '/gucci/men4.webp';
import men5 from '/gucci/men5.webp';
import men6 from '/gucci/men6.webp';
import men7 from '/gucci/men7.webp';
import location from '/gucci/location.png';
import telephone from '/gucci/telephone.png';


export default function Man() {
    return (
        <div>
             <div className="main-2">
                <div className="header4">
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
            </div>
            <div className="main">
            <div className="first">
            <div>
                <img className="men" src={men} alt="" />
                <p></p>
            </div>
            </div>
            <div className="second">
            <div>
                <img className="men1" src={men1} alt="" />
                <p></p>
            </div>
            <div>
                <img className="men2" src={men2} alt="" />
                <p></p>
            </div>
            </div>
            </div>
            <div className="third">
                <div>
                <img className="men3" src={men3} alt="" />
                <p></p>
            </div>
            <div>
                <img className="men4" src={men4} alt="" />
                <p></p>
            </div>
            </div>
            <div className="fourth">
                <div>
                <img className="men5" src={men5} alt="" />
                <p></p>
            </div>
            <div>
                <img className="men6" src={men6} alt="" />
                <p></p>
            </div>
            <div>
                <img className="men7" src={men7} alt="" />
                <p></p>
            </div>
            </div>
        </div>
    )
}