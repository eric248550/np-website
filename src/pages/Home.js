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

export default function Home() {
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
            <div className='min-h-screen flex flex-col'>
                <div className='m-auto flex flex-row w-5/6 justify-center'>
                    <img className='w-12 h-12' src={trangles}/>
                    <p className='text-white text-5xl font-bold'>
                        Neuralprint Test
                    </p>
                    <img className='w-12 h-12' src={trangles}/>

                </div>
                <p className='mt-5 text-center text-base text-white'>Authentication using the mind.</p>
                <img className='m-auto mt-5 w-60 h-auto' src={brain}/>

                <button onClick={getNft} className='mt-5 m-auto bg-[#5E5D7F] hover:brightness-125 text-white font-bold w-52 h-16'>
                    Get your NeuralPrint NFT
                </button>
            </div>

            {/* -------- */}
            <div className='min-h-screen mt-10 w-5/6 m-auto flex flex-row justify-center'>
                <img className='m-auto w-1/3' src={finger}/>
                <div className='m-auto w-2/3 ml-10 flex flex-col'>
                    <p className='text-white text-3xl font-bold'>Value prop statement</p>
                    <p className='text-white text-base'>Authentication using the mind. Built by neuroscientists.</p>
                    <li className='mt-2 text-white text-base'>Neuralprint removes the password “middlemen” from authentication, simply allowing the mind to do the work.</li>
                    <li className='mt-2 text-white text-base'>Leveraging the stable and dynamic aspects of your unique neuro-profile, Neuralprint sets the foundation for the dynamic context-driven environments of the Spatial Web, where both a user's identity and their state of mind will hold the keys to seamless everyday life.</li>

                    <p className='mt-5 text-white text-lg font-bold'>Stay on the loop of the usability of this technology.</p>
                    <div className='mt-5 flex flex-row justify-center'>
                        <input type="text" className='w-2/5 h-10 border-[1px] border-[868686] text-xl text-center'
                            placeholder='Type your email here..' 
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                        />
                        <button onClick={provideEmail} className='m-auto w-1/5 h-10  bg-[#5F8E7A] hover:brightness-125 text-white font-bold'>
                            Subscribe
                        </button>
                        <button onClick={getNft} className='w-2/5 h-10  ml-2 m-auto bg-[#5E5D7F] hover:brightness-125 text-white text-sm font-bold'>
                            Get your NeuralPrint NFT
                        </button>
                    </div>
                </div>
            </div>

            <div className='min-h-screen mt-10 w-5/6 m-auto flex flex-row justify-center'>
                <div className='m-auto w-2/3 flex flex-col'>
                    <p className='text-white text-base'>Our 6-minute psychometric test will securely capture your psychometric profile, which is then used to mint an NFT.</p>
                    <p className='text-white text-xs'>Your psychometric profile will be securely stored in the cloud in a GDPR-compliant manner, and, for security reasons, is not embedded in the metadata of the NFT.</p>

                    <p className='mt-2 text-white text-3xl font-bold'>Value prop statement</p>
                    <p className='text-white text-base'>Created by neuroscientists, Neuralprint generates a unique neuro-profile that can be used as a form of authentication. Using a combination of stable and dynamic properties of the brain, we remove barriers between people and technology, prepare people for coming cybersecurity needs, and enabling the direct use of your mind itself to unlock everyday life.</p>
                    <p className='mt-2 text-white text-3xl font-bold'>Problem</p>
                    <p className='text-white text-base'>Current authentication technologies are "middlemen" for someone's mind, introducing friction and inconvenience.</p>
                    <p className='text-white text-base'>Passwords and keys are static and ill-suited for the dynamic context-driven environments of Web 3.0, and they fail to offer adequate cybersecurity. There is no way to patch the open wound of password technology. Even a physical key can be lost, whereas the mind is always with you.</p>

                    <p className='mt-2 text-white text-3xl font-bold'>Solution</p>
                    <p className='text-white text-base'>Your mind is the key.</p>
                    <p className='text-white text-base'>Neuralprint resolves the login “middlemen” out of the authentication process, letting your mind take care of the authentication.</p>
                    <p className='text-white text-base'>Psychometric technology securely collects hundreds of data points on an individual (GDPR-compliant) to paint a detailed picture of that person's unique identifying traits.</p>
                    <p className='text-white text-base'>This “static ID” is turned into a user-specific token that can be used as a login credential unto itself.</p>
                    <p className='text-white text-base'>Forthcoming is biometric capability that will offer the ability to refine authentication by adding permissioning based on state of mind, forming dynamic credentials tailored to context (time, space, situation).</p>
                    <p className='text-white text-base'>Neuralprint is pioneering the future of everyday life, bringing the mind to the forefront.</p>

                    <p className='mt-5 text-white text-lg font-bold'>Stay on the loop of the usability of this technology.</p>
                    <div className='mt-5 flex flex-row justify-center'>
                        <input type="text" className='w-2/5 h-10 border-[1px] border-[868686] text-xl text-center'
                            placeholder='Type your email here..' 
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                        />
                        <button onClick={provideEmail} className='m-auto w-1/5 h-10  bg-[#5F8E7A] hover:brightness-125 text-white font-bold'>
                            Subscribe
                        </button>
                        <button onClick={getNft} className='w-2/5 h-10  ml-2 m-auto bg-[#5E5D7F] hover:brightness-125 text-white text-sm font-bold'>
                            Get your NeuralPrint NFT
                        </button>
                    </div>
                </div>
                <img className='ml-10 m-auto w-1/3' src={trangleArrow}/>
            </div>

            <div className='min-h-screen mt-10 w-5/6 m-auto flex flex-row justify-center'>
                <img className='m-auto w-1/3' src={circle}/>
                <div className='m-auto w-2/3 ml-10 flex flex-col'>
                    <p className='text-white text-3xl font-bold'>Dynamic States: Bringing the power of the mind to Web 3.0</p>
                    <p className='text-white text-base'>Neuralprint will be the key to daily life in the emerging Spatial Web.</p>
                    <p className='text-white text-base'>The future of our 3D human world will be the Spatial Web, where the physical and digital intertwine using augmented reality, AI, blockchain, internet of things, robotics, and automation. The Spatial Web is the so-called metaverse in its more maturely realized form, where it becomes an integral element of life in the physical world.</p>
                    <p className='text-white text-base'>In the Spatial Web, context is everything. A fluid cyber-life will be based on permissioned access in dynamic environments.</p>
                    <p className='text-white text-base'>Neuralprint prepares users and Spatial Domains for the future, using a combination of static and dynamic identification mechanisms, based on neuroscience and cryptography.</p>
                    
                    <div className='mt-5 flex flex-row justify-center'>
                        <input type="text" className='w-2/5 h-10 border-[1px] border-[868686] text-xl text-center'
                            placeholder='Type your email here..' 
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                        />
                        <button onClick={provideEmail} className='m-auto w-1/5 h-10  bg-[#5F8E7A] hover:brightness-125 text-white font-bold'>
                            Subscribe
                        </button>
                        <button onClick={getNft} className='w-2/5 h-10  ml-2 m-auto bg-[#5E5D7F] hover:brightness-125 text-white text-sm font-bold'>
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
