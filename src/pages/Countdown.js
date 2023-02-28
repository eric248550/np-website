import React, { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";
import { useTimer } from 'react-timer-hook';

import icon2 from "../images/icons/icon2.svg";
import phone from "../images/phone.svg";

// function Timer({ expiryTimestamp }) {
//     const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp, onExpire: () => {
//         // setSaleTimer(true);
//     }});
//     return (
//         <div className='m-auto text-black text-center text-xl font-semibold'>
//             <span>&nbsp;{`${days} `}</span>D
//             <span>&nbsp;{` ${hours} `}</span>H
//             <span>&nbsp;{` ${minutes} `}</span>M
//             <span>&nbsp;{` ${seconds} `}</span>S
//         </div>
//     );
// }

function timer(expiryTimestamp) {
    const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp, onExpire: () => {
        // setSaleTimer(true);
    }});
    return {
        seconds: seconds,
        minutes: minutes,
        hours: hours,
        days: days,
    };
}



export default function Coundown() {

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
            <img src={phone} className='inline md:hidden m-auto w-1/2' />

            <div className='m-auto w-11/12 flex flex-col md:flex-row'>
                <div className='m-auto w-full md:w-2/5 flex flex-col'>
                    <p className='text-white text-xs font-bold'>
                        ——— &nbsp;COMING SOON
                    </p>
                    <p className='mt-2 text-white text-4xl font-extrabold'>
                        Value prop statement goes right here
                    </p>
                    <div className='mt-5 flex flex-row'>
                        <img src={icon2} className='my-auto w-6 h-6'/>
                        <p className='ml-3 text-white text-xs'>
                            Problem/Solution Statement here: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        </p>
                    </div>
                    <div className='mt-5 flex flex-row'>
                        <img src={icon2} className='my-auto w-6 h-6'/>
                        <p className='ml-3 text-white text-xs'>
                            Problem/Solution Statement here: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        </p>
                    </div>


                    <div className='mt-5 flex flex-row'>
                        <input type="text" className='w-3/5 h-10 bg-[#292929] border-[1px] border-[#868686] text-[#868686] text-xs md:text-base text-center'
                            placeholder='Type email here...' 
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                        />
                        <button onClick={provideEmail} className='my-auto w-2/5 h-10 text-xs md:text-base bg-[#5E5D7F] hover:brightness-125 text-white font-bold'>
                            Notify me
                        </button>
                    </div>

                    <div className='flex flex-col'>
                        <div className='mt-5 flex flex-row justify-between'>
                            <div className='flex flex-col'>
                                <div className='flex rounded-xl bg-gradient-to-b from-[#999593] to-[#E5DBCC] w-20 h-24 border-white border-t-2 border-r-2'>
                                    <p className='m-auto text-5xl font-black text-white'>
                                        {timer(new Date(Date.UTC(2023, 5, 1, 16, 0, 0))).days}
                                    </p>
                                </div>

                                <p className='mt-2 text-white text-base m-auto'>
                                    Days
                                </p>
                            </div>

                            <div className='flex flex-col'>

                                <div className='flex rounded-xl bg-gradient-to-b from-[#999593] to-[#E5DBCC] w-20 h-24 border-white border-t-2 border-r-2'>
                                    <p className='m-auto text-5xl font-black text-white'>
                                        {timer(new Date(Date.UTC(2023, 5, 1, 16, 0, 0))).hours}
                                    </p>
                                </div>
                                <p className='mt-2 text-white text-base m-auto'>
                                    Hours
                                </p>
                            </div>

                            <div className='flex flex-col'>
                                <div className='flex rounded-xl bg-gradient-to-b from-[#999593] to-[#E5DBCC] w-20 h-24 border-white border-t-2 border-r-2'>
                                    <p className='m-auto text-5xl font-black text-white'>
                                        {timer(new Date(Date.UTC(2023, 5, 1, 16, 0, 0))).minutes}
                                    </p>
                                </div>
                                <p className='mt-2 text-white text-base m-auto'>
                                    Minutes
                                </p>
                            </div>

                            <div className='flex flex-col'>
                                <div className='flex rounded-xl bg-gradient-to-b from-[#999593] to-[#E5DBCC] w-20 h-24 border-white border-t-2 border-r-2'>
                                    <p className='m-auto text-5xl font-black text-white'>
                                        {timer(new Date(Date.UTC(2023, 5, 1, 16, 0, 0))).seconds}
                                    </p>
                                </div>
                                <p className='mt-2 text-white text-base m-auto'>
                                    Seconds
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <img src={phone} className='hidden md:inline m-auto w-1/3' />
                
            </div>


            <div className='mb-10'></div>
        </div>
    );
}
