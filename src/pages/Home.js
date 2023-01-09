import React, { useRef, useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import AlertModal from "../alert";



export default function Home() {
    const confirmRef = useRef(false);
    const [alertInformation, setAlertInformation] = useState({
        content: "",
        isDisplayed: false,
        type: "information",
    });

    function getNft() {
        if (!confirmRef.current) {
            setAlertInformation({
                type: "information",
                isDisplayed: true,
                content: (
                    <div className="flex flex-col">
                        <p className='mt-5 text-center text-black text-2xl font-extrabold'>
                            Requirements to get architype NFT:
                        </p>

                        <div className='mt-5 flex flex-col justify-center'>
                            <p className='mt-1 text-center text-2xl text-black font-extrabold'>
                                Req 1
                            </p>
                            <p className='mt-1 text-center text-2xl text-black font-extrabold'>
                                Req 2
                            </p>
                            <p className='mt-1 text-center text-2xl text-black font-extrabold'>
                                Req 3
                            </p>
                        </div>

                        <button className="m-auto mb-5 w-60 h-12 mt-3 bg-green-400 rounded-xl transition duration-500 hover:scale-110"
                            onClick={() => {
                                setAlertInformation({
                                type: "information",
                                isDisplayed: false,
                                content: null,
                                });
                                confirmRef.current = true;
                                location.replace('https://www.myarchitex.com/');
                            }}
                        >
                            <p className='text-xl text-white font-bold'>
                                Yes, take test
                            </p>
                        </button>
                        <button className="m-auto mb-5 w-60 h-12 mt-3 bg-yellow-400 rounded-xl transition duration-500 hover:scale-110"
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

    function provideEmail() {
        // if (!confirmRef.current) {
            setAlertInformation({
                type: "information",
                isDisplayed: true,
                content: (
                    <div className="flex flex-col">
                        <p className='mt-5 text-center text-black text-xl font-extrabold'>
                            Get newest infomation
                        </p>

                        <div className='m-auto flex flex-row'>
                            <input type="text" className='ml-2 rounded-lg border-2 border-black text-xl h-10 text-center' required 
                                // onChange={(event) => {
                                //     setTitle(event.target.value);
                                // }}
                            />
                            <button className='ml-2 m-auto bg-[#4fd1c5] hover:brightness-125 rounded-lg bg-white w-24 h-10'>
                                Subscribe
                            </button>
                        </div>
                    </div>
                ),
            });
            return;
        // }
    }

    return (
        <div className="min-h-screen bg-cover flex flex-col bg-fixed bg-[url('./images/bg.png')]">
            <div className='p-48'></div>

            <div className='mb-12 flex flex-row justify-around'>
                <div className='flex flex-col rounded-lg bg-white bg-opacity-25 w-96'>
                    <p className='m-auto'>NeuralPrint Test and NFT Description</p>
                    <p className='m-auto'>NeuralPrint Test and NFT Description</p>
                    <p className='m-auto'>NeuralPrint Test and NFT Description</p>
                    <p className='m-auto'>NeuralPrint Test and NFT Description</p>
                </div>
                <button onClick={getNft} className='bg-[#4fd1c5] hover:brightness-125 rounded-lg bg-white w-52 h-16'>
                    Get your NeuralPrint NFT
                </button>
            </div>

            <div className='flex flex-col bg-white bg-opacity-25 w-5/6 m-auto rounded-lg'>
                <div className='mt-10 flex flex-row justify-around'>
                    <div className='w-1/2 flex'>
                        <p className='m-auto'>Value prop statement</p>
                    </div>
                    <div className='w-1/2 flex flex-row justify-center'>
                        <button onClick={provideEmail} className='ml-5 m-auto bg-[#4fd1c5] hover:brightness-125 rounded-lg bg-white w-52 h-16'>
                            Provide email
                        </button>
                        <button onClick={getNft} className='ml-5 m-auto bg-[#4fd1c5] hover:brightness-125 rounded-lg bg-white w-52 h-16'>
                            Get your NeuralPrint NFT
                        </button>
                    </div>
                </div>

                <div className='mt-10 flex flex-row justify-around'>
                    <div className='w-1/2 flex'>
                        <p className='m-auto'>Problem / Solution</p>
                    </div>
                    <div className='w-1/2 flex flex-row justify-center'>
                        <button onClick={provideEmail} className='ml-5 m-auto bg-[#4fd1c5] hover:brightness-125 rounded-lg bg-white w-52 h-16'>
                            Provide email
                        </button>
                        <button onClick={getNft} className='ml-5 m-auto bg-[#4fd1c5] hover:brightness-125 rounded-lg bg-white w-52 h-16'>
                            Get your NeuralPrint NFT
                        </button>
                    </div>
                </div>

                <div className='mt-10 flex flex-row justify-around'>
                    <div className='w-1/2 flex'>
                        <p className='m-auto'>{"Key life -> Key web -> Key Web3.0 (Dynamism - Bring power of brain and mind to web3)"}</p>
                    </div>
                    <div className='w-1/2 flex flex-row justify-center'>
                        <button onClick={provideEmail} className='ml-5 m-auto bg-[#4fd1c5] hover:brightness-125 rounded-lg bg-white w-52 h-16'>
                            Provide email
                        </button>
                        <button onClick={getNft} className='ml-5 m-auto bg-[#4fd1c5] hover:brightness-125 rounded-lg bg-white w-52 h-16'>
                            Get your NeuralPrint NFT
                        </button>
                    </div>
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
