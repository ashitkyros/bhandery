import React from 'react';
import logo from '../imges/logo.png'
import menu from '../imges/menu.png'
import water from '../imges/water.png'
import energy from '../imges/Energy.png'
import earth from '../imges/Earth.png'
import air from '../imges/air.png'
import conflict from '../imges/contrac.png'
import lend from '../imges/lend.png'
import infa from '../imges/infa.png'

function Proces(props) {
    return (
        <>
            <div className='header'>
                <div className='container'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div><img src={logo} className='p-3' /></div>
                        <div><img src={menu} /></div>

                    </div>
                </div>

            </div>
            <div className='main-process'>
                <div className='container'>
                    <div className='daimond'>
                        <h2>A REVOLUTIONARY</h2>
                        <span>ARCHETYPE</span>
                    </div>
                </div>

            </div>
            <div className='slider'>
                <div className='water'>
                    <div className='container'>
                        <div className='text-white '>
                            <div className='d-flex justify-content-between '>
                                <div className='water-title'>
                                    <h4>NO<span className='inner-water-text ms-3'>WATER WASTED</span></h4>
                                </div>
                                <div className='water-right'>
                                    <p>Our Advanced Technology Ensures That Every Drop Of Water Used In Our Manufacturing Process Is Recycled, Minimizing Waste And Preserving Precious Resources. We Take Great Pride In Our Environmentally Conscious Approach To Creating Beautiful Diamonds.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='energy'>
                    <div className='container'>
                        <div className='text-white'>
                            <div className='d-flex justify-content-between '>
                                <div className='water-title'>
                                    <h4>NO<span className='inner-water-text ms-3'>POLLUTING ENERGY</span></h4>
                                </div>
                                <div className='water-right'>
                                    <p>We Are Proud To Use Renewable Energy Resources To Power Our Manufacturing Process, Resulting In Gems That Use Only 50% Of The Energy Of Mined Diamonds.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='earth'>
                    <div className='container'>
                        <div className='text-white'>
                            <div className='d-flex justify-content-between '>
                                <div className='water-title earth-title'>
                                    <h4>NO<span className='inner-water-text ms-3'>EARTH UPROOTED</span></h4>
                                </div>
                                <div className='water-right earth-right'>
                                    <p>We Are Committed To Responsible Energy Efficient Diamond Production That Doesn't Involve Any Uprooting, Land Disturbance, Or Excavation That Can Cause Irreversible Damage To The Earth's Surface.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='air'>
                    <div className='container'>
                        <div className='text-white'>
                            <div className='d-flex justify-content-between'>
                                <div className='water-title toxic-air'>
                                    <h4>NO<span className='inner-water-text ms-3 '>TOXIC AIR</span></h4>
                                </div>
                                <div className='water-right toxic-right'>
                                    <p>Our Commitment To Sustainability Extends To The Air We Breathe, Which Is Why We Use Only Clean Energy Sources In Our Production Process Resulting In Cleaner Air For A Healthier Planet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='conflict'>
                    <div className='container'>
                        <div className='text-white'>
                            <div className='d-flex justify-content-between '>
                                <div className='water-title conflict-title'>
                                    <h4>NO<span className='inner-water-text ms-3'>CONFLICT</span></h4>
                                </div>
                                <div className='water-right conflict-right'>
                                    <p>We Are Proud To Offer 100% Conflict-free Diamonds That Are Ethically Grown In Our State-of-the-art Facilities And We Make Responsible Choices That Prioritize The Well-being Of Life On Our Planet</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='lend'>
                    <div className='container'>
                        <div className='text-white'>
                            <div className='d-flex justify-content-between '>
                                <div className='water-title lend-title'>
                                    <h4>NO<span className='inner-water-text ms-3'>DESTRUCTIVE PRODUCTION</span></h4>
                                </div>
                                <div className='water-right lend-right'>
                                    <p>We Are Dedicated To Preventing The Use Of Child Labor, Hazardous Working Conditions, Or Environmental Degradation In The Production Of Our Diamonds. You Can Be Assured That Your Purchase Promotes Moral Principles And Contributes To A Better Future.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='main-infa'>
                <div>
                    <div className='d-flex'>
                        <div>
                            <img src={infa} className='p-0'/>
                        </div>
                        <div>
                            <h5>OUR INFRASTRUCTURE</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Proces;