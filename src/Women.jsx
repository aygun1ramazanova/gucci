import { Link } from 'react-router-dom';
import "./Women.css";
import women from '/gucci/women.webp';
import women1 from '/gucci/women1.webp';
import women2 from '/gucci/women2.webp';
import women3 from '/gucci/women3.webp';
import women4 from '/gucci/women4.webp';
import women5 from '/gucci/women5.webp';
import women6 from '/gucci/women6.webp';
import women7 from '/gucci/women7.webp';
import location from '/gucci/location.png';
import telephone from '/gucci/telephone.png';


export default function Women() {
    return (
        <div>
            <div className="main-2">
                <div className="header6">
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
                        <div className='kkkk'>
                            <div className='asus1'>
                                <div className='wo1'>
                                </div>
                            </div>
                            <div className='asus2'>
                                <div>
                                    <div className='wom2'>
                                        <div className='wo2'></div>
                                        <div className='colm'>
                                            <p className='women2'>SHOP ALL</p>
                                        </div>
                                        <div className='wo3'>
                                            <div className='wom3'>
                                                <p className='women3'>SHOP ALL</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='asus3'>
                            <div className='aynn7'>
                                <div className='wo4'>
                                    <div className='wom4'>
                                        <p className='women4'>SHOP ALL</p>
                                    </div>
                                </div>
                                <div className='wo5'>
                                    <div className='wom5'>
                                        <p className='women5'>SHOP ALL</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='asus4'>
                            <div className='wo6'>
                                <div className='wom6'>
                                    <p className='women6'>SHOP ALL</p>
                                </div>
                            </div>
                            <div className='wo7'>
                                <div className='wom7'>
                                    <p className='women7'>SHOP ALL</p>
                                </div>
                            </div>
                            <div className='wo8'>
                                <div className='wom8'>
                                    <p className='women8'>SHOP ALL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}