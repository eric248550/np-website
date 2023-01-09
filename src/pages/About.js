import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import p1 from "../images/team/p.jpeg";

export default function About() {
    return (
        <div className="min-h-screen bg-cover flex flex-col bg-fixed bg-[url('./images/bg.png')]">
            {/* <div className='p-10'></div> */}

            <div className='flex flex-col bg-white bg-opacity-25 w-5/6 m-auto rounded-lg'>
                <div className='p-10'></div>
                <p className='m-auto text-4xl'>why and how NP was created</p>
                
                <p className='m-auto text-2xl'>What is Lorem Ipsum?</p>
                <p className='m-auto text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div className='p-2'></div>

                <p className='m-auto text-2xl'>What is Lorem Ipsum?</p>
                <p className='m-auto text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div className='p-2'></div>
                
                <p className='m-auto text-2xl'>What is Lorem Ipsum?</p>
                <p className='m-auto text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div className='p-2'></div>
                
                <p className='m-auto text-2xl'>What is Lorem Ipsum?</p>
                <p className='m-auto text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div className='p-2'></div>
            
            </div>

            <div className='mt-10 flex flex-col bg-white bg-opacity-25 w-5/6 m-auto rounded-lg'>
                <div className='p-5 flex flex-wrap justify-center'>
                    <div className='flex flex-col justify-center w-72 h-auto border-white border-4 m-2 rounded-3xl'>
                        <div className='mt-2 m-auto rounded-3xl w-11/12 bg-white h-auto border-4 border-white'>
                            <img src={p1} className='mt-2 m-auto rounded-3xl w-11/12 h-auto transition duration-300 hover:scale-105 hover:drop-shadow-xl'/>
                            <p className='mt-2 text-[#BB2CFF] text-center text-lg font-extrabold'> Project Assistant</p>
                        </div>
                        <p className='mt-2 text-center text-2xl font-extrabold text-[#004D65]'>
                            Shazer
                        </p>
                    </div>
                    <div className='flex flex-col justify-center w-72 h-auto border-white border-4 m-2 rounded-3xl'>
                        <div className='mt-2 m-auto rounded-3xl w-11/12 bg-white h-auto border-4 border-white'>
                            <img src={p1} className='mt-2 m-auto rounded-3xl w-11/12 h-auto transition duration-300 hover:scale-105 hover:drop-shadow-xl'/>
                            <p className='mt-2 text-[#BB2CFF] text-center text-lg font-extrabold'> Project Assistant</p>
                        </div>
                        <p className='mt-2 text-center text-2xl font-extrabold text-[#004D65]'>
                            Shazer
                        </p>
                    </div>
                    <div className='flex flex-col justify-center w-72 h-auto border-white border-4 m-2 rounded-3xl'>
                        <div className='mt-2 m-auto rounded-3xl w-11/12 bg-white h-auto border-4 border-white'>
                            <img src={p1} className='mt-2 m-auto rounded-3xl w-11/12 h-auto transition duration-300 hover:scale-105 hover:drop-shadow-xl'/>
                            <p className='mt-2 text-[#BB2CFF] text-center text-lg font-extrabold'> Project Assistant</p>
                        </div>
                        <p className='mt-2 text-center text-2xl font-extrabold text-[#004D65]'>
                            Shazer
                        </p>
                    </div>
                    <div className='flex flex-col justify-center w-72 h-auto border-white border-4 m-2 rounded-3xl'>
                        <div className='mt-2 m-auto rounded-3xl w-11/12 bg-white h-auto border-4 border-white'>
                            <img src={p1} className='mt-2 m-auto rounded-3xl w-11/12 h-auto transition duration-300 hover:scale-105 hover:drop-shadow-xl'/>
                            <p className='mt-2 text-[#BB2CFF] text-center text-lg font-extrabold'> Project Assistant</p>
                        </div>
                        <p className='mt-2 text-center text-2xl font-extrabold text-[#004D65]'>
                            Shazer
                        </p>
                    </div>
                </div>

            </div>
            


        </div>
    );
}
