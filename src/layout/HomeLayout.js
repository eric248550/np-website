import React, { useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom";


import aiLogo from "../images/other_icon/ai-logo-blue.png";
import pondLogo from "../images/other_icon/pong_logo.png";
import logo from "../images/logo.png";
import emoji from "../images/other_icon/emoji.png";


import AlertModal from "../alert";

import twitterIcon from "../images/social/twitter.png";
import igIcon from "../images/social/ig.png";
import fbIcon from "../images/social/fb.png";
import disordIcon from "../images/social/discord.png";

export default function HomeLayout() {
    const [alertInformation, setAlertInformation] = useState({
        content: "",
        isDisplayed: false,
        type: "information",
    });

    return (
        <div>
            {/* A "layout route" is a good place to put markup you want to
                share across all the pages on your site, like navigation. */}
            <nav className="w-full bg-white flex-row border-black border-b-2">
                <ul className="overflow-hidden">
                    <li className="float-left">
                        <Link to="/">
                            <img className='mt-2 ml-2 w-60' src={logo}/>
                        </Link>
                    </li>
                    <div className="flex flex-row float-right">
                        <li>
                            <Link to="/home">
                                <p className="text-base text-black m-6">
                                    Home
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                <p className="text-base text-black m-6">
                                    About
                                </p>
                            </Link>
                        </li>
                        <a target="_blank" href='https://twitter.com/'>
                            <img className='hover:brightness-125 w-10 h-10 mt-4 ml-6' src={twitterIcon}/>
                        </a>
                        <a target="_blank" href='https://www.instagram.com/'>
                            <img className='hover:brightness-125 w-10 h-10 mt-4 ml-2' src={igIcon}/>
                        </a>
                        <a target="_blank" href='https://www.facebook.com/'>
                            <img className='hover:brightness-125 w-10 h-10 mt-4 ml-2' src={fbIcon}/>
                        </a>
                        <a target="_blank" href='https://discord.com/'>
                            <img className='hover:brightness-125 w-10 h-10 mt-4 ml-2 mr-6' src={disordIcon}/>
                        </a>
                    </div>
                </ul>
            </nav>
            <hr />
    
            {/* An <Outlet> renders whatever child route is currently active,
                so you can think about this <Outlet> as a placeholder for
                the child routes we defined above. */}
            <Outlet />
            {alertInformation.isDisplayed && (
                <AlertModal
                type={alertInformation.type}
                animateNumber={alertInformation.animateNumber}
                bgNumber={alertInformation.bgNumber}
                onClose={() =>
                    setAlertInformation({
                    type: "information",
                    isDisplayed: false,
                    content: null,
                    })
                }
                >
                {alertInformation.content}
                </AlertModal>
            )}
            {/* <Footer /> */}
        </div>
    );
}

function Footer() {
    return(
        <div className='relative bottom-0 w-full h-auto bg-[#121212]'>
            <div className='flex flex-col md:flex-row justify-center'>
                <a href='https://twitter.com/AIDEV_cardano' target='_blank' className='md:my-5 flex flex-row justify-center'>
                    <p className=' text-white text-base'>
                        Powered by AIDEV
                    </p>
                    <img className='w-6 h-6' src={aiLogo}/>
                </a>
                <a href='https://twitter.com/lendingpond_ada' target='_blank' className='md:mt-5 flex flex-row justify-center'>
                    <p className=' text-white text-base'>
                        and Stockpicka's Wallet
                    </p>
                    <img className='w-6 h-6' src={pondLogo}/>
                </a>
                <p className='md:ml-10 md:mt-6 text-white text-center text-sm'>
                    © 2022 AIDEV All rights reserved
                </p>
            </div>
            <div className='flex flex-row pb-5 m-auto justify-center'>
                <p className='text-white text-xs'>
                    Stockpicka's gift to The Ape Society
                </p>
                <img className='w-4 h-4' src={emoji}/>
            </div>

        </div>
    )
}