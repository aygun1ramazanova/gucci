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
                                    <div className='gift1'>
                                        <p className='gifts1'>Women</p>
                                        <p className='shopgift1'>SHOP ALL</p>
                                    </div>
                                    <div className='gift2'>
                                        <p className='gifts2'>Men</p>
                                        <p className='shopgift2'>SHOP ALL</p>
                                    </div>
                                    <div className='gift3'>
                                        <p className='gifts3'>Women</p>
                                        <p className='shopgift3'>SHOP ALL</p>
                                    </div>
                                    <div className='gift4'>
                                        <p className='gifts4'>Men</p>
                                        <p className='shopgift4'>SHOP ALL</p>
                                    </div>
                                </div>
                                <div className='aynn2'>
                                    <div className='gift5'>
                                        <p className='gifts5'>Men</p>
                                        <p className='shopgift5'>SHOP ALL</p>
                                    </div>
                                    <div className='gift6'>
                                        <p className='gifts6'>Women</p>
                                        <p className='shopgift6'>SHOP ALL</p>
                                    </div>
                                    <div className='gift7'>
                                        <p className='gifts7'>Men</p>
                                        <p className='shopgift7'>SHOP ALL</p>
                                    </div>
                                </div>
                                <div className='aynn3'>
                                    <div className='gift8'>
                                        <p className='gifts8'>Women</p>
                                        <p className='shopgift8'>SHOP ALL</p>
                                    </div>
                                    <div className='gift9'>
                                        <p className='gifts9'>Men</p>
                                        <p className='shopgift9'>SHOP ALL</p>
                                    </div>
                                    <div className='gift10'>
                                        <p className='gifts10'>Women</p>
                                        <p className='shopgift10'>SHOP ALL</p>
                                    </div>
                                    <div className='gift11'>
                                        <p className='gifts11'>Men</p>
                                        <p className='shopgift11'>SHOP ALL</p>
                                    </div>
                                </div>
                                <div className='aynn4'>
                                    <div className='gift12'>
                                        <p className='gifts12'>Men</p>
                                        <p className='shopgift12'>SHOP ALL</p>
                                    </div>
                                    <div className='gift13'>
                                        <p className='gifts13'>Women</p>
                                        <p className='shopgift13'>SHOP ALL</p>
                                    </div>
                                    <div className='gift14'>
                                        <p className='gifts14'>Men</p>
                                        <p className='shopgift14'>SHOP ALL</p>
                                    </div>
                                </div>
                                <div className='aynn5'>
                                    <div className='gift15'>
                                        <p className='gifts15'>Women</p>
                                        <p className='shopgift15'>SHOP ALL</p>
                                    </div>
                                    <div className='gift16'>
                                        <p className='gifts16'>Men</p>
                                        <p className='shopgift16'>SHOP ALL</p>
                                    </div>
                                    <div className='gift17'>
                                        <p className='gifts17'>Women</p>
                                        <p className='shopgift17'>SHOP ALL</p>
                                    </div>
                                    <div className='gift18'>
                                        <p className='gifts18'>Men</p>
                                        <p className='shopgift18'>SHOP ALL</p>
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
        </div>

    )
}

function After() {
    return (
        <div className='after'>
            <div>
                <div>

                    <div className='aynn6'>
                        <div className='gift19'>
                            <p className='gifts19'>Women</p>
                            <p className='shopgift19'>SHOP ALL</p>
                        </div>
                        <div className='gift20'>
                            <p className='gifts20'>Men</p>
                            <p className='shopgift20'>SHOP ALL</p>
                        </div>
                        <div className='gift21'>
                            <p className='gifts21'>Women</p>
                            <p className='shopgift21'>SHOP ALL</p>
                        </div>
                        <div className='gift22'>
                            <p className='gifts22'>Men</p>
                            <p className='shopgift22'>SHOP ALL</p>
                        </div>
                    </div>
                    <div className='aynn7'>
                        <div className='gift23'>
                            <p className='gifts23'>Men</p>
                            <p className='shopgift23'>SHOP ALL</p>
                        </div>
                        <div className='gift24'>
                            <p className='gifts24'>Women</p>
                            <p className='shopgift24'>SHOP ALL</p>
                        </div>
                        <div className='gift25'>
                            <p className='gifts25'>Men</p>
                            <p className='shopgift25'>SHOP ALL</p>
                        </div>
                    </div>
                    <div className='aynn8'>
                        <div className='gift26'>
                            <p className='gifts26'>Women</p>
                            <p className='shopgift26'>SHOP ALL</p>
                        </div>
                        <div className='gift27'>
                            <p className='gifts27'>Men</p>
                            <p className='shopgift27'>SHOP ALL</p>
                        </div>
                        <div className='gift28'>
                            <p className='gifts28'>Women</p>
                            <p className='shopgift28'>SHOP ALL</p>
                        </div>
                        <div className='gift29'>
                            <p className='gifts29'>Men</p>
                            <p className='shopgift29'>SHOP ALL</p>
                        </div>
                    </div>
                    <div className='aynn9'>
                        <div className='gift30'>
                            <p className='gifts30'>Men</p>
                            <p className='shopgift30'>SHOP ALL</p>
                        </div>
                        <div className='gift31'>
                            <p className='gifts31'>Women</p>
                            <p className='shopgift31'>SHOP ALL</p>
                        </div>
                        <div className='gift32'>
                            <p className='gifts32'>Men</p>
                            <p className='shopgift32'>SHOP ALL</p>
                        </div>
                    </div>            
                        <div className='aynn10'>
                        <div className='gift33'>
                            <p className='gifts33'>Women</p>
                            <p className='shopgift33'>SHOP ALL</p>
                        </div>
                        <div className='gift34'>
                            <p className='gifts34'>Men</p>
                            <p className='shopgift34'>SHOP ALL</p>
                        </div>
                        <div className='gift35'>
                            <p className='gifts35'>Women</p>
                            <p className='shopgift35'>SHOP ALL</p>
                        </div>
                        <div className='gift36'>
                            <p className='gifts36'>Men</p>
                            <p className='shopgift36'>SHOP ALL</p>
                        </div>
                    </div>
                    <div className='aynn11'>
                        <div className='gift37'>
                            <p className='gifts37'>Women</p>
                            <p className='shopgift37'>SHOP ALL</p>
                        </div>
                        <div className='gift38'>
                            <p className='gifts38'>Men</p>
                            <p className='shopgift38'>SHOP ALL</p>
                        </div>
                        <div className='gift39'>
                            <p className='gifts39'>Women</p>
                            <p className='shopgift39'>SHOP ALL</p>
                        </div>
                        <div className='gift40'>
                            <p className='gifts40'>Men</p>
                            <p className='shopgift40'>SHOP ALL</p>
                        </div>
                    </div>
                    <div className='aynn12'>
                        <div className='gift41'>
                            <p className='gifts41'>Women</p>
                            <p className='shopgift41'>SHOP ALL</p>
                        </div>
                        <div className='gift42'>
                            <p className='gifts42'>Men</p>
                            <p className='shopgift42'>SHOP ALL</p>
                        </div>
                        <div className='gift43'>
                            <p className='gifts43'>Women</p>
                            <p className='shopgift43'>SHOP ALL</p>
                        </div>
                        <div className='gift44'>
                            <p className='gifts44'>Men</p>
                            <p className='shopgift44'>SHOP ALL</p>
                        </div>
                    </div>
                    <div className='aynn13'>
                        <div className='gift45'>
                            <p className='gifts45'>Women</p>
                            <p className='shopgift45'>SHOP ALL</p>
                        </div>
                        <div className='gift46'>
                            <p className='gifts46'>Men</p>
                            <p className='shopgift46'>SHOP ALL</p>
                        </div>
                        <div className='gift47'>
                            <p className='gifts47'>Women</p>
                            <p className='shopgift47'>SHOP ALL</p>
                        </div>
                        <div className='gift48'>
                            <p className='gifts48'>Men</p>
                            <p className='shopgift48'>SHOP ALL</p>
                        </div>
                    </div>
                    <div className='aynn14'>
                        <div className='gift49'>
                            <p className='gifts49'>Women</p>
                            <p className='shopgift49'>SHOP ALL</p>
                        </div>
                        <div className='gift50'>
                            <p className='gifts50'>Men</p>
                            <p className='shopgift50'>SHOP ALL</p>
                        </div>
                        <div className='gift51'>
                            <p className='gifts51'>Women</p>
                            <p className='shopgift51'>SHOP ALL</p>
                        </div>
                        <div className='gift52'>
                            <p className='gifts52'>Men</p>
                            <p className='shopgift52'>SHOP ALL</p>
                        </div>
                    </div>
                    <div className='aynn16'>
                        <div className='gift55'>
                            <p className='gifts55'>Women</p>
                            <p className='shopgift55'>SHOP ALL</p>
                        </div>
                        <div className='gift56'>
                            <p className='gifts56'>Men</p>
                            <p className='shopgift56'>SHOP ALL</p>
                        </div>
                        <div className='gift59'>
                            <p className='gifts59'>Women</p>
                            <p className='shopgift59'>SHOP ALL</p>
                        </div>
                        <div className='gift60'>
                            <p className='gifts60'>Men</p>
                            <p className='shopgift60'>SHOP ALL</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
