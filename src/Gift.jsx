import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Gift.css'
import location from '/gucci/location.png';
import telephone from '/gucci/telephone.png';



export default function Gift() {
    const [show, setShow] = useState(false);
    const clicker = (e) => {
        setShow(!show)
    }
    return (
        <div>
            <div className="main-2">
                <div className="header3">
                    <div className="header-img">
                        <img className="location" src={location} alt="" />
                        <p className="turk">Turkey</p>
                        <p className="gucci-head1"> GUCCI </p>
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
                        <p className='fathers-day'>
                            FATHER'S DAY GIFTS
                        </p>
                    </div>
                </div>
                <div className='before'>
                    <div className='all'>
                        <div className='allgifts'>
                            <div className='allgift'>
                                <div className='aynn1'>
                                    <div className='giftt1'>
                                        <p className='gifts1'>JUMBO GG SMALL DUFFLE BAG</p>
                                        <p className='shopgift1'>$ 3,700</p>
                                        <u className='sg1'>SHOP THIS</u>
                                    </div>
                                    <div className='giftt2'>
                                        <p className='gifts2'>SQUARE-FRAME SUNGLASSES</p>
                                        <p className='shopgift2'>$ $ 610</p>
                                        <u className='sg2'>SHOP THIS</u>
                                    </div>
                                    <div className='giftt3'>
                                        <p className='gifts3'>JUMBO GG WALLET</p>
                                        <p className='shopgift3'>$ 580</p>
                                        <u className='sg3'>SHOP THIS</u>
                                    </div>
                                    <div className='giftt4'>
                                        <p className='gifts4'>MEN'S HORSEBIT LOAFER</p>
                                        <p className='shopgift4'>$ 950</p>
                                        <u className='sg4'>SHOP THIS</u>
                                    </div>
                                </div>
                                <div className='aynn2'>
                                    <div className='giftt5'>
                                        <p className='gifts5'></p>
                                        <p className='shopgift5'> </p>
                                    </div>
                                    <div className='giftt6'>
                                        <p className='gifts6'>GUCCI 25H WATCH, 28MM</p>
                                        <p className='shopgift6'>$ 1,600</p>
                                        <u className='sg6'>SHOP THIS</u>
                                    </div>
                                    <div className='giftt7'>
                                        <p className='gifts7'>MEN'S 1953 HORSEBIT LOAFER</p>
                                        <p className='shopgift7'>$ 920</p>
                                        <u className='sg7'>SHOP THIS</u>
                                    </div>
                                </div>
                                <div className='aynn3'>
                                    <div className='giftt8'>
                                        <p className='gifts8'>JUMBO GG BACKBAG</p>
                                        <p className='shopgift8'>$ 3,890</p>
                                        <u className='sg8'>SHOP THIS</u>
                                    </div>
                                    <div className='giftt9'>
                                        <p className='gifts9'>ORIGINAL GG CANVAS BASEBALL HAT</p>
                                        <p className='shopgift9'>$ 460</p>
                                        <u className='sg9'>SHOP THIS</u>
                                    </div>
                                    <div className='giftt10'>
                                        <p className='gifts10'>JUMBO GG SMALL TOILETRY CASE</p>
                                        <p className='shopgift10'>$ 1,290</p>
                                        <u className='sg10'>SHOP THIS</u>
                                    </div>
                                    <div className='giftt11'>
                                        <p className='gifts11'>MEN'S GUCCI RUN SNEAKER</p>
                                        <p className='shopgift11'>$ 1,100</p>
                                        <u className='sg11'>SHOP THIS</u>
                                    </div>
                                </div>
                                <div className='aynn4'>
                                    <div className='giftt12'>
                                        <p className='gifts12'>GUCCI VALIGERIA PRINT SILK TIE</p>
                                        <p className='shopgift12'>$ 220</p>
                                        <u className='sg12'>SHOP THIS</u>
                                    </div>
                                    <div className='giftt13'>
                                        <p className='gifts13'>GUCCI BLONDIE WIDE BELT</p>
                                        <p className='shopgift13'>$ 580</p>
                                        <u className='sg13'>SHOP THIS</u>
                                    </div>
                                    <div className='giftt14'>
                                        <p className='gifts14'></p>
                                        <p className='shopgift14'></p>
                                    </div>
                                </div>
                                <div className='aynn5'>
                                    <div className='giftt15'>
                                        <p className='gifts15'>ALUMINUM GG CABIN TROLLEY</p>
                                        <p className='shopgift15'>$ 3,800</p>
                                        <u className='sg15'>SHOP THIS</u>
                                    </div>
                                    <div className='giftt16'>
                                        <p className='gifts16'>AVIATOR SUNGLASSES</p>
                                        <p className='shopgift16'>$ 450</p>
                                        <u className='sg16'>SHOP THIS</u>
                                    </div>
                                    <div className='giftt17'>
                                        <p className='gifts17'>OPHIDA TOILETRY CASE</p>
                                        <p className='shopgift17'>$ 920</p>
                                        <u className='sg17'>SHOP THIS</u>
                                    </div>
                                    <div className='giftt18'>
                                        <p className='gifts18'>GUCCI GUILTY POUR HOMME, 90ML EAU DE TOILETTE</p>
                                        <p className='shopgift18'>$ 119</p>
                                        <u className='sg18'>SHOP THIS</u>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {show ? <After /> : null}
                <div>
                    <button className='show-gift' onClick={clicker}>{show ? "HIDE" : "SHOW ALL"}</button>
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

function After() {
    return (
        <div className='after'>
            <div>
                <div>

                    <div className='aynn6'>
                        <div className='giftt19'>
                            <p className='gifts19'>BELT WITH INTERLOCKIN G DETAIL</p>
                            <p className='shopgift19'>$ 410</p>
                            <u className='sg19'>SHOP THIS</u>
                        </div>
                        <div className='giftt20'>
                            <p className='gifts20'> GUCCI 25H WATCH, 34MM</p>
                            <p className='shopgift20'>$ 1,950</p>
                            <u className='sg1'>SHOP THIS</u>
                        </div>
                        <div className='giftt21'>
                            <p className='gifts21'>WALLET WITH CUT-OUT INTERLOCKING G</p>
                            <p className='shopgift21'>$ 490</p>
                            <u className='sg21'>SHOP THIS</u>
                        </div>
                        <div className='giftt22'>
                            <p className='gifts22'>MEN'S LACE-UP SNEAKER</p>
                            <p className='shopgift22'>$ 920</p>
                            <u className='sg22'>SHOP THIS</u>
                        </div>
                    </div>
                    <div className='aynn7'>
                        <div className='giftt23'>
                            <p className='gifts23'></p>
                            <p className='shopgift23'></p>
                        </div>
                        <div className='giftt24'>
                            <p className='gifts24'>MEN'S INTERLOCKING G LIDE SANDAL</p>
                            <p className='shopgift24'>$ 970</p>
                            <u className='sg24'>SHOP THIS</u>
                        </div>
                        <div className='giftt25'>
                            <p className='gifts25'>GEOMETRIC SQUARE G PRINT SILK SHIRT</p>
                            <p className='shopgift25'>$ 1,400</p>
                            <u className='sg25'>SHOP THIS</u>
                        </div>
                    </div>
                    <div className='aynn14'>
                        <div className='giftt49'>
                            <p className='gifts49'>SQUARE-FRAME SUNGLASSES</p>
                            <p className='shopgift49'>$ 610</p>
                            <u className='sg49'>SHOP THIS</u>
                        </div>
                        <div className='giftt50'>
                            <p className='gifts50'>MEN'S GG HIGH TOP SNEAKER</p>
                            <p className='shopgift50'>$ 850</p>
                            <u className='sg50'>SHOP THIS</u>
                        </div>
                        <div className='giftt51'>
                            <p className='gifts51'>GG BLACK BELT BAG</p>
                            <p className='shopgift51'>$ 1,100</p>
                            <u className='sg51'>SHOP THIS</u>
                        </div>
                        <div className='giftt52'>
                            <p className='gifts52'>GG BLACK BRIEFCASE</p>
                            <p className='shopgift52'>$ 1,980</p>
                            <u className='sg52'>SHOP THIS</u>
                        </div>
                    </div>
                        <div className='aynn10'>
                        <div className='giftt33'>
                            <p className='gifts33'>WIDE RING WITH INTERLOCKING G</p>
                            <p className='shopgift33'>$ 310</p>
                            <u className='sg33'>SHOP THIS</u>
                        </div>
                        <div className='giftt34'>
                            <p className='gifts34'>MEN'S GG CANVAS SLIDE SANDAL</p>
                            <p className='shopgift34'>$ 530</p>
                            <u className='sg34'>SHOP THIS</u>
                        </div>
                        <div className='giftt35'>
                            <p className='gifts35'>GG LINEN SHIRT</p>
                            <p className='shopgift35'>$ 1,200</p>
                            <u className='sg35'>SHOP THIS</u>
                        </div>
                        <div className='giftt36'>
                            <p className='gifts36'>OPHIDA GG MINI BAG</p>
                            <p className='shopgift36'>$ 1,590</p>
                        </div>
                    </div>
                    <div className='aynn9'>
                        <div className='giftt30'>
                            <p className='gifts30'></p>
                            <p className='shopgift30'> </p>
                        </div>
                        <div className='giftt31'>
                            <p className='gifts31'>STRAW HAT WITH HORSEBIT</p>
                            <p className='shopgift31'>$ 750</p>
                            <u className='sg22'>SHOP THIS</u>
                        </div>
                        <div className='giftt32'>
                            <p className='gifts32'>WALLET WITH CUT-OUT INTERLOCKING G</p>
                            <p className='shopgift32'>$ 490</p>
                            <u className='sg32'>SHOP THIS</u>
                        </div>
                    </div>   
                    <div className='aynn12'>
                        <div className='giftt41'>
                            <p className='gifts41'>MEN'S GG HIGH TOP SNEAKER</p>
                            <p className='shopgift41'>$ 850</p>
                            <u className='sg41'>SHOP THIS</u>
                        </div>
                        <div className='giftt42'>
                            <p className='gifts42'>POUCH WITH CUT-OUT</p>
                            <p className='shopgift42'>$ 530</p>
                            <u className='sg42'>SHOP THIS</u>
                        </div>
                        <div className='giftt43'>
                            <p className='gifts43'>JUNBO GG MINI BAG</p>
                            <p className='shopgift43'>$ 1,150</p>
                            <u className='sg43'>SHOP THIS</u>
                        </div>
                        <div className='giftt44'>
                            <p className='gifts44'>JUMBO GG MEDIUM MESSENGER BAG</p>
                            <p className='shopgift44'>$ 1,790</p>
                            <u className='sg44'>SHOP THIS</u>
                        </div>
                    </div>         
                    <div className='aynn11'>
                        <div className='giftt37'>
                            <p className='gifts37'>GG COTTON JACQUARD POLO T-SHIRT</p>
                            <p className='shopgift37'>$ 1,500</p>
                            <u className='sg37'>SHOP THIS</u>
                        </div>
                        <div className='giftt38'>
                            <p className='gifts38'>GUCCI JORDAAN LEATHER LOAFER</p>
                            <p className='shopgift38'>$ 920</p>
                            <u className='sg38'>SHOP THIS</u>
                        </div>
                        <div className='giftt39'>
                            <p className='gifts39'>GG LARGE DUFFLE BAG</p>
                            <p className='shopgift39'>$ 2,980</p>
                            <u className='sg39'>SHOP THIS</u>
                        </div>
                        <div className='giftt40'>
                            <p className='gifts40'>GG BELT RECTANGULAR BUCKLE</p>
                            <p className='shopgift40'>$ 450</p>
                            <u className='sg40'>SHOP THIS</u>
                        </div>
                    </div>

                    </div>
                </div>
  
            </div>
    )
}
