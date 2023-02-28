import React, { useEffect, useState } from 'react';
import { Outlet, Link, useResolvedPath, useMatch } from "react-router-dom";


import logoWhite from "../images/logo_white.png";
import logoOnlyWhite from "../images/logo_only_white.png";


import AlertModal from "../alert";

import twitterIcon from "../images/social/twitter.svg";
import linkedinIcon from "../images/social/linkedin.svg";

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
            <nav className="pt-5 w-full bg-[#292929] flex flex-row justify-between">
                {/* <ul className="flex flex-row justify-center"> */}
                    <Link className='w-1/3 hidden md:inline' to="/">
                        <img className='ml-20 my-auto w-32 h-auto' src={logoWhite}/>
                    </Link>
                    <Link className='w-1/3 inline md:hidden' to="/">
                        <img className='ml-5 my-auto w-8 h-auto' src={logoOnlyWhite}/>
                    </Link>
                    <div className="w-1/3 flex flex-row justify-center">
                        <CustomLink to="/home">
                            <p className="my-auto mt-2 md:mt-4 text-sm">
                                Home
                            </p>
                        </CustomLink>

                        <div className='p-10 hidden md:inline'></div>
                        <div className='p-5 inline md:hidden'></div>
                        <CustomLink to="/about">
                            <p className="my-auto mt-2 md:mt-4 text-sm">
                                About
                            </p>
                        </CustomLink>
                    </div>
                    <div className="w-1/3 flex flex-row justify-center">
                        <a target="_blank" href='https://twitter.com/neuralprint'>
                            <img className='my-auto hover:brightness-125 w-10 h-10' src={twitterIcon}/>
                        </a>
                        {/* <div className='m-auto mx-5 rounded-full w-10 h-10 border-[#EBEBEB] border-2 opacity-10'> */}
                        <a target="_blank" href='https://www.linkedin.com/company/neuralprint/'>
                            <img className='ml-2 my-auto hover:brightness-125 w-10 h-10' src={linkedinIcon}/>
                        </a>
                        {/* </div> */}
                    </div>

                {/* </ul> */}
            </nav>
            {/* <hr /> */}
    
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
            <Footer />
        </div>
    );
}

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    
    return (
      <div>
        <Link className={`${match ? "text-white" : "text-white opacity-60"}`}
            to={to}
            {...props}
        >
            {children}
            {/* {match
                ?<p className='w-1 h-1 bg-white rounded-full'></p>
                :""
            } */}
        </Link>
        {/* {match && " (active)"} */}
      </div>
    );
}

function Footer() {
    return(
        <div className='relative bottom-0 w-full h-auto bg-[#121212]'>
            <div className='m-auto py-5 w-5/6 flex flex-row justify-between'>
                <div className='flex flex-col'>
                    <img className='w-40 h-auto' src={logoWhite}/>
                    <p className='mt-2 text-white text-[10px] md:text-sm'>
                        Neuralorint - © 2023 All Rights Reserved.
                    </p>
                </div>
                <div className="my-auto flex flex-row justify-center">
                    <a target="_blank" href='https://twitter.com/neuralprint'>
                        <img className='hover:brightness-125 w-10 h-10' src={twitterIcon}/>
                    </a>
                    {/* <div className='m-auto mx-5 rounded-full w-10 h-10 border-[#EBEBEB] border-2 opacity-10'> */}
                    <a target="_blank" href='https://www.linkedin.com/company/neuralprint/'>
                        <img className='ml-2 hover:brightness-125 w-10 h-10' src={linkedinIcon}/>
                    </a>
                    {/* </div> */}
                </div>
            </div>

        </div>
    )
}