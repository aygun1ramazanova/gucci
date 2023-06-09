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
                    <u className='womensu'>SHOP ALL</u>
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

    )
}