import { Link } from 'react-router-dom';
import './Jewelry.css'
import location from '/gucci/location.png';
import telephone from '/gucci/telephone.png';


export default function Jewelery() {
    return (
        <div>
            <div className="main-2">
                <div className="header11">
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
            </div>
            <div>
                <div className='jeclass'>
                    <div className='jew1'>
                        <div className='je1'></div>
                        <p className='p1'>Fashion Jewelry</p>
                        <u className='u1'>DISCOVER MORE</u>
                    </div>
                    <div className='jew2'>
                        <div className='je2'></div>
                        <p className='p2'>Silver Jewelry</p>
                        <u className='u2'>DISCOVER MORE</u>
                    </div>
                </div>
                <div className='jeclass1'>
                    <div className='jew3'>
                        <div className='je3'></div>
                        <p className='p3'>Fine Jewelery</p>
                        <u className='u3'>DISCOVER MORE</u>
                    </div>
                    <div className='jew4'>
                        <div className='je4'></div>
                        <p className='p4'>Watches</p>
                        <u className='u4'>DISCOVER MORE</u>
                    </div>
                </div>
                <div className='jew5'>
                    <div className='je5'>
                        <p></p>
                        <button>DISCOVER MORE</button>
                    </div>
                    <div className='je6'>
                        <p></p>
                        <button>DISCOVER MORE</button>
                    </div>
                </div>
            </div>
            </div>
            )
  }