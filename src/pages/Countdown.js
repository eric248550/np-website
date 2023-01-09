import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useTimer } from 'react-timer-hook';


function Timer({ expiryTimestamp }) {
    const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp, onExpire: () => {
        // setSaleTimer(true);
    }});
    return (
        <div className='m-auto text-black text-center text-xl font-semibold'>
            <span>&nbsp;{`${days} `}</span>D
            <span>&nbsp;{` ${hours} `}</span>H
            <span>&nbsp;{` ${minutes} `}</span>M
            <span>&nbsp;{` ${seconds} `}</span>S
        </div>
    );
}

export default function Coundown() {
    return (
        <div className="min-h-screen bg-cover flex flex-col bg-fixed bg-[url('./images/bg.png')]">
            {/* Date.UTC(year, month-1, day, hour, minute, second, millisecond) */}
            {/* <div className='p-10'></div> */}
            <div className='mt-5 w-full flex flex-row bg-white bg-opacity-25'>
                <div className='flex hidden md:inline md:w-2/3'>
                    <img className='w-2/3 m-auto' src="https://media0.giphy.com/media/KfkRQXMe5q7MLt3CI9/200w.webp?cid=ecf05e472k7rxhom855wif2kma1j0il7rzvfe33a696wv9bk&rid=200w.webp&ct=g"/>
                    {/* <iframe src="https://giphy.com/embed/KfkRQXMe5q7MLt3CI9" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/organic-ai-worm-KfkRQXMe5q7MLt3CI9">via GIPHY</a></p> */}
                </div>
                <div className='w-full flex md:w-1/3'>
                    <div className='m-auto flex bg-white bg-opacity-50 rounded-full w-60 h-60 md:w-60 md:h-60'>
                        <Timer expiryTimestamp={new Date(Date.UTC(2023, 5, 1, 16, 0, 0))} />
                    </div>
                </div>

            </div>


            <div className='m-auto flex flex-col bg-white bg-opacity-25'>
                <p className='m-auto'>Value prop statement</p>
                <p className='m-auto'>Problem / Solution</p>
                <p className='m-auto'>{"Key life -> Key web -> Key Web 3.0 (Dynamism - Bring power of brain and mind to web3)"}</p>
            </div>

            <div className='m-auto flex flex-row'>
                <p className='m-auto text-xl'>Subscribe us</p>

                <input type="text" className='ml-2 w-60 rounded-lg border-2 border-black text-xl h-10 text-center' required 
                    // onChange={(event) => {
                    //     setTitle(event.target.value);
                    // }}
                />
                <button className='ml-5 m-auto bg-[#4fd1c5] hover:brightness-125 rounded-lg bg-white w-32 h-10'>
                    Subscribe
                </button>
            </div>

        </div>
    );
}
