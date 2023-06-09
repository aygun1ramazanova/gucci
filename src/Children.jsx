import { Link } from 'react-router-dom';
import './Children.css'
import location from '/gucci/location.png';
import telephone from '/gucci/telephone.png';

export default function Children() {
    return (
        <div>
            <div className="main-2">
                <div className="header10">
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
                    <p className='h'>CHILDREN</p>
                </div>
            </div>
            <div>
                <div className='one'>
                <div className='children1'>
                    <div className='child1'>
                        <p className='p1'>Boys</p>
                        <u className='u1'>DISCOVER MORE</u>
                    </div>
                </div>
                <div className='children2'>
                    <div className='child2'>
                        <p className='p2'>Girls</p>
                        <u className='u2'>DISCOVER MORE</u>
                    </div>
                </div>
                </div>
                <div className='two'>
                <div className='children3'>
                    <div className='child3'>
                        <p className='p3'>Baby</p>
                        <u className='u3'>DISCOVER MORE</u>
                    </div>
                </div>
                <div className='children4'>
                    <div className='child4'>
                        <p className='p4'>Gifts</p>
                        <u className='u4'>DISCOVER MORE</u>
                    </div>
                </div>
                </div>
                
            </div>
            </div>
            )
  }