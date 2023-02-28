import React, { useRef, useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import AlertModal from "../alert";
// import trangles from "../images/icons/trangles.png";
import trangles from "../images/icons/trangles.svg";
import trangleArrow from "../images/icons/trangleArrow.svg";
import circle from "../images/icons/circle.svg";
import brain from "../images/icons/brain.png";
import finger from "../images/icons/finger.svg";
import logoWhite from "../images/logo_white.png";
import fingerPrint from "../images/icons/fingerPrint.svg";

export default function L() {
    const confirmRef = useRef(false);
    const [alertInformation, setAlertInformation] = useState({
        content: "",
        isDisplayed: false,
        type: "information",
    });
    const [email, setEmail] = useState();

    function getNft() {
        if (!confirmRef.current) {
            setAlertInformation({
                type: "result",
                isDisplayed: true,
                content: (
                    <div className="m-auto flex flex-col bg-[#292929] w-96">
                        <div className='m-auto w-5/6'>
                            <img className='m-auto mt-5 w-40 h-auto' src={logoWhite}/>
                            <p className='mt-5 text-white text-base font-bold'>
                                Requirements to get architype NFT:
                            </p>
                            <div className='mt-5 flex flex-col justify-center'>
                                <div className='mt-2 flex flex-row'>
                                    <img className='my-auto w-6 h-6' src={fingerPrint}/>
                                    <p className='ml-2 text-center text-xs text-white font-extrabold'>
                                        Sed ut perspiciatis unde omnis iste natus error sit
                                    </p>
                                </div>
                                <div className='mt-2 flex flex-row'>
                                    <img className='my-auto w-6 h-6' src={fingerPrint}/>
                                    <p className='ml-2 text-center text-xs text-white font-extrabold'>
                                        Sed ut perspiciatis unde omnis iste natus error sit
                                    </p>
                                </div>
                                <div className='mt-2 flex flex-row'>
                                    <img className='my-auto w-6 h-6' src={fingerPrint}/>
                                    <p className='ml-2 text-center text-xs text-white font-extrabold'>
                                        Sed ut perspiciatis unde omnis iste natus error sit
                                    </p>
                                </div>
                            </div>
                        </div>




                        <button className="mt-5 m-auto bg-[#5E5D7F] hover:brightness-125 text-white w-52 h-12"
                            onClick={() => {
                                setAlertInformation({
                                    type: "information",
                                    isDisplayed: false,
                                    content: null,
                                });
                                confirmRef.current = true;
                                location.replace('/mint');
                            }}
                        >
                            <p className='text-sm text-white font-bold'>
                                TAKE NEURALPRINT TEST
                            </p>
                        </button>
                        <button className="mt-5 m-auto mb-5 text-white text-sm"
                            onClick={() => {
                            confirmRef.current = false;
                            setAlertInformation({
                                type: "information",
                                isDisplayed: false,
                                content: null,
                            });
                            }}
                        >
                            No, take me back to Home
                        </button>
                    </div>
                ),
            });
            return;
        }
    }
    function validateEmail (email) {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    };
    function provideEmail() {

        if (!email) {
            setAlertInformation({
                type: "information",
                isDisplayed: true,
                content: `Fill email first`,
            });
            return;
        }
        if (!validateEmail(email)) {
            setAlertInformation({
                type: "information",
                isDisplayed: true,
                content: 'please input correct email format',
            });
            return;
        }
        try {
            let firstName;
            let lastName;
            setAlertInformation({
                type: "result",
                isDisplayed: true,
                content: (
                    <div className="m-auto flex flex-col bg-[#292929] w-96">
                        <div className='m-auto w-5/6'>
                            <img className='m-auto mt-5 w-40 h-auto' src={logoWhite}/>
                            <p className='mt-5 text-white text-base font-bold'>
                                Subscribe to get newest information
                            </p>
                            <div className='mt-5 flex flex-col justify-center'>
                                <div className='mt-2 flex flex-row'>
                                    <img className='my-auto w-6 h-6' src={fingerPrint}/>
                                    <p className='ml-2 text-center text-xs text-white font-extrabold'>
                                        First Name
                                    </p>
                                    <input type="text" className='ml-2 w-40 h-6 border-[1px] border-[868686] text-xs text-center'
                                        placeholder='Type your first name here..' 
                                        onChange={(event) => {
                                            firstName = event.target.value;
                                        }}
                                    />
                                </div>
                                <div className='mt-2 flex flex-row'>
                                    <img className='my-auto w-6 h-6' src={fingerPrint}/>
                                    <p className='ml-2 text-center text-xs text-white font-extrabold'>
                                        Last Name
                                    </p>
                                    <input type="text" className='ml-2 w-40 h-6 border-[1px] border-[868686] text-xs text-center'
                                        placeholder='Type your last name here..' 
                                        onChange={(event) => {
                                            lastName = event.target.value;
                                        }}
                                    />
                                </div>
                            </div>
                        </div>


                        

                        <button className="mt-5 m-auto bg-[#5E5D7F] hover:brightness-125 text-white w-52 h-12"
                            onClick={async() => {
                                // setAlertInformation({
                                //     type: "information",
                                //     isDisplayed: false,
                                //     content: null,
                                // });
                                confirmRef.current = true;
                                // location.replace('/mint');
                                if (firstName && lastName) subscribeEmail(email, firstName, lastName)

                            }}
                        >
                            <p className='text-sm text-white font-bold'>
                                SUBSCRIBE
                            </p>
                        </button>


                        <button className="mt-5 m-auto mb-5 text-white text-sm"
                            onClick={() => {
                            confirmRef.current = false;
                            setAlertInformation({
                                type: "information",
                                isDisplayed: false,
                                content: null,
                            });
                            }}
                        >
                            No, take me back to Home
                        </button>
                    </div>
                ),
            });
            return;
        }
        catch(e) {
            setAlertInformation({
                type: "information",
                isDisplayed: true,
                content: `${e}`,
            });
            console.log(e)
        }
    }

    async function subscribeEmail(email, firstName, lastName) {
        try {
            const data = {
                "email": email,
                "firstName": firstName,
                "lastName": lastName,
            };
            const response = await (await fetch(
                // 'http://localhost:8787/neuralprint/Subscribe',
                'https://api.aidev-cardano.com/neuralprint/Subscribe',
                {
                    method:'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                }
            )).json();
    
            if (response.error) {
                setAlertInformation({
                    type: "information",
                    isDisplayed: true,
                    content: `${response.error}`,
                });
            }
            else {
                setAlertInformation({
                    type: "information",
                    isDisplayed: true,
                    content: `${response.message}`,
                }); 
            }
        }
        catch(e) {
            setAlertInformation({
                type: "information",
                isDisplayed: true,
                content: `${e}`,
            });
            return;
        }

    }

    return (
        <div className="flex flex-col bg-[#292929]">
            <div className='m-auto w-11/12 flex flex-col md:flex-row'>
                <p className='text-white text-xl font-bold'>
                ———— COMING SOON
                </p>
                <div className='flex flex-row'>

                </div>
                
            </div>


            <div className='mb-10'></div>
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
        </div>
    );
}
