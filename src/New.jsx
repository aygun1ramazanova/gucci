import { Link } from 'react-router-dom';
import './New.css'
import newimg2 from '/gucci/newimg2.webp';
import newimg3 from '/gucci/newimg3.webp';
import location from '/gucci/location.png';
import telephone from '/gucci/telephone.png';



export default function New() {
    return (
        <div>
             <div className="main-2">
                <div className="header5">
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
                                    <Link data-di-id="gifts_2" to="#">
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
                        <p className='ne'>WOMEN</p>
                        </div>
                        </div>
            <div className='new'>
                <p className='new-in'>NEW IN</p>
            </div>
            <div className='new2'>
                <div>
                    <img className='img1' src={newimg2} alt="" />
                    <p className='women'>Women</p>
                    <u className='womenu'>SHOP ALL</u>
                </div>
                <div>
                    <img className='img2' src={newimg3} alt="" />
                    <p className='man'>Men</p>
                    <u className='manu'>SHOP ALL</u>
                </div>
            </div>
            <div className='discover'>
                <div className='img3'>
                        <p className='p'>AMPLYIFING GG MONOGRAM</p>
                        <button className='b'>DISCOVER MORE</button>
                </div>

            </div>
            <div>
            <div className='img4'>
                        <p className='sum1'>GUCCI SUMMER STORIES</p>
                        <button className='n1'>SHOP NOW</button>
                </div>
            </div>
            <div>
            <div className='img5'>
                        <p className='sum2'>STYLE WITH SIENNA</p>
                        <button className='n2'>SHOP NOW</button>
                </div>
            </div>
            <div>
            <div className='img6'>
                    <div>
                        <p className='sum3'>GUCCI BABMBOO 1947</p>
                        <button className='n3'>DISCOVER THE COLLECTION</button>
                    </div>
                </div>
            </div>
            <div>
            <div className='img7'>
                    <div>
                        <p className='sum4'>GUCCI BLONDIE</p>
                        <button className='n4'>SHOP NOW</button>
                    </div>
                </div>
            </div>
            <div>
            <div className='img10'>
                    <div>
                        <p className='p5'>ADIDASX GUCCI</p>
                        <button className='b5'>SHOP NOW</button>
                    </div>
                </div>
            </div>
            <div>
            <div className='img11'>
                    <div>
                        <p className='p6'>GUCCI HORSEBIT 1955</p>
                        <button className='b6'>SHOP NOW</button>
                    </div>
                </div>
                <div className='img8'>
                    <div>
                        <p className='p7'>GUCCI NOJUM</p>
                        <button className='b7'>DISCOVER THE COLLECTION</button>
                    </div>
                </div>
            </div>
        </div>

    )
}