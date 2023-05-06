import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import brain from "../images/icons/brain.png";

export default function About() {
    return (
        <div className="min-h-screen flex flex-col bg-[#292929]">

            <div className='flex flex-col w-5/6 m-auto'>
                <p className='text-white text-center text-2xl md:text-5xl font-[SemplicitaPro]'>About Neuralprint</p>

                <p className='mt-5 text-xl text-white text-center'>Neuralprint was founded by a neuroscience PhD and avid consciousness explorer and expert. His passion for the mind and brain came together in a mission to usher a future where the mind is at the center of our digital lives. Gabriel's expansive understanding of consciousness and mind-training revealed how vastly profound the mind is — and how underutilized it is in everyday life and tech.</p>
                {/* <p className='mt-5 text-xl text-white text-center'>Neuralprint is a company on a mission to bring the mind to the forefront of everyday life, to make technology feel like it's barely there, where the mind is able to grant access to all of reality, without barriers.</p>
                <p className='mt-5 text-xl text-white text-center'>To do this, we're crafting products that leverage the stable and dynamic properties of the mind for everyday life. We see many existing technology products as placeholders for what the mind has the capability to do. Less is more. Our tech aims to remove gaps, not fill them.</p>
                <p className='mt-5 text-xl text-white text-center'>Cybersecurity is increasingly a crucial ingredient as our lives are evermore always online. From simple logins to permissioning based on state of mind and task-dependent skill level, Neuralprint is the authentication of the future.</p> */}

                <img className='mx-auto my-10 w-2/3 md:w-80 h-auto' src={brain}/>
            </div>

            <div className='flex flex-col w-5/6 mx-auto'>
                <p className='text-white text-center text-2xl md:text-5xl font-[SemplicitaPro]'>About the Founder</p>

                <p className='mt-10 text-xl text-white'>Neuralprint was founded by two neuroscience PhD's and long-time friends Gabriel Axel Montes & Taylor Kuhn. Their passion for the mind and brain came together in a mission to usher a future where the mind is at the center of our digital lives. Gabriel’s expansive understanding of consciousness and mind-training revealed how vastly profound the mind is—and how underutilized it is in everyday life and tech. Taylor’s expertise in neuroimaging and clinical neuropsychological assessment has lent extensive first-hand practical and scientific experience with the cognitive landscapes of a large number of people.</p>
                <p className='mt-10 text-white text-center text-3xl font-[SemplicitaPro]'>Know more about our Founder</p>
            
                <div className='mt-10 flex flex-col md:flex-row justify-center'>
                    <div className="w-80 h-80 flex flex-col bg-cover bg-[url('./images/team/Gabriel.png')]">
                        <div className='h-2/3'></div>
                        <div className='h-1/3 flex bg-black opacity-50'>
                            <div className='m-auto'>
                                <div className='flex flex-row'>
                                    <p className='text-white text-xs font-bold'>Co-founder, Gabriel Axel Montes, Ph.D.</p>
                                    <a className='text-blue-400 text-xs font-bold' target='_blank' href='https://www.linkedin.com/in/gabrielaxel/'>[LinkedIn]</a>
                                </div>
                                <p className='mt-2 text-white text-xs'>Neuroscientist, educator, musician, futurist. Artificial intelligence and blockchain entrepreneur. Mind-training, wellbeing, Spatial Web, human organization</p>

                            </div>
                        </div>
                    </div>
                    {/* <div className='p-5'></div>
                    <div className="w-80 h-80 flex flex-col bg-cover bg-[url('./images/team/Taylor.png')]">
                        <div className='h-2/3'></div>
                        <div className='h-1/3 flex bg-black opacity-50'>
                            <div className='m-auto'>
                                <div className='flex flex-row'>
                                    <p className='text-white text-xs font-bold'>Co-founder, Taylor Kuhn, Ph.D.</p>
                                    <a className='text-blue-400 text-xs font-bold' target='_blank' href='https://www.linkedin.com/in/taylor-kuhn-a40a9b48/'>[LinkedIn]</a>
                                </div>
                                <p className='mt-2 text-white text-xs'>Award-winning neuropsychologist. Academic researcher, University of California Los Angeles. Cognitive assessment professional.</p>

                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className='p-10'></div>
        </div>
    );
}
