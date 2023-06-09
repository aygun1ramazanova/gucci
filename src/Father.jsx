import { Link } from 'react-router-dom';
import './Father.css'
import location from '/gucci/location.png';
import telephone from '/gucci/telephone.png';
import father1 from '/gucci/father1.webp';
import father2 from '/gucci/father2.jpg';
import father3 from '/gucci/father3.webp';
import father9 from '/gucci/father9.webp';
import father10 from '/gucci/father10.webp';
import father4 from '/gucci/father4.webp';
import father5 from '/gucci/father5.webp';
import father6 from '/gucci/father6.webp';
import father from '/gucci/fatherimg2.webp';
import fathersday54 from '/gucci/fathersday54.webp';
import fathersday55 from '/gucci/fathersday55.webp';
import fathersday56 from '/gucci/fathersday56.webp';

export default function Father() {
    return (
        <div>
            <div className="main-2">
                <div className="header1">
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
            <div>
                <div className='gift-p'>
                    <p className='pg'>This Father's Day , Gucci offers gifting ideas from a curated selection of distinctive </p>
                    <p className='bg'>designs and signature accessories fot the hero you have in mind.</p>
                </div>
                <div className='round'>
                    <div className='fathersday54'>
                        <img className='fathersday54' src={fathersday54} alt="" />
                        <p className='father54'>Father's Day</p>
                    </div>
                    <div className='fathersday55'>
                        <img className='fathersday55' src={fathersday55} alt="" />
                        <p className='father55'>Everyday Gift</p>
                    </div>
                    <div className='fathersday56'>
                        <img className='fathersday56' src={fathersday56} alt="" />
                        <p className='father56'>Special Gift</p>
                    </div>
                </div>
                <div className='father3'>
                    <img className='father3' src={father3} alt="" />
                </div>
                <div className='him-all'>
                    <p className='him'>
                        GIFT FOR HIM
                    </p>
                    <button className='all'>
                        VIEW ALL
                    </button>
                </div>
                <div className='father1'>
                    <img className='father1' src={father1} alt="" />
                    <p className='giftf'>Personalised Gift</p>
                    <u className='u1'>DISCOVER MORE</u>
                </div>
                <div className='fatheral'>
                    <div className='father9'>
                        <img className='father9-img' src={father9} alt="" />
                        <p className='father9-p'>Everyday Gift</p>
                    </div>
                    <div className='father10'>
                        <img className='father10-img' src={father10} alt="" />
                        <p className='father10-p'>Special Gift</p>
                    </div>
                </div>
                <div className='fatherimg'>

                </div>
                <div className='him-all'>
                    <p className='her'>
                        GIFT FOR HER
                    </p>
                    <button className='allher'>
                        VIEW ALL
                    </button>
                </div>
                <div className='father2'>
                    <img className='father2' src={father2} alt="" />
                    <p className='giftf'>Beauty Gift</p>
                    <u className='u2'>DISCOVER MORE</u>
                </div>
                <div>
                    <img className='father' src={father} alt="" />
                </div>
                <div className='f'>
                    <div className='s'>
                        <img className='father4' src={father4} alt="" />
                        <div className='incol'>
                            <p className='col'>Collect</p>
                            <p className='in'>In-Store</p>
                        </div>
                    </div>
                    <div className='g'>
                        <img className='father5' src={father5} alt="" />
                        <div className='flexcheck'>
                            <p className='flex'>Flexible</p>
                            <p className='check'>Checkout</p>
                        </div>
                    </div>
                    <div className='c'>
                        <img className='father6' src={father6} lt="" />
                        <div className='experson'>
                            <p className='person'>Personal Shopping</p>
                            <p className='ex'>Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}