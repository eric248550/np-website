import React, { useRef, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useTimer } from 'react-timer-hook';

import AlertModal from "../alert";
import brain from "../images/icons/brain.png";



export default function Mint() {
    const confirmRef = useRef(false);
    const [alertInformation, setAlertInformation] = useState({
        content: "",
        isDisplayed: false,
        type: "information",
    });
    const [email, setEmail] = useState();

    function validateEmail (email) {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
    async function mintNft() {
        if (!email) {
            setAlertInformation({
                type: "information",
                isDisplayed: true,
                content: 'please input email first',
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
        const bucket_data = await (await fetch(
            `http://localhost:8787/neuralprint/GetUserTestData/${email}`
            // `https://api.aidev-cardano.com/neuralprint/GetUserTestData/${email}`
        )).json();

        if (bucket_data.error) {
            setAlertInformation({
                type: "information",
                isDisplayed: true,
                content: bucket_data.error,
            });
            return;
        }

        const bucket_data_jsonString = JSON.stringify(bucket_data, replacer);

        function replacer(key, value) {
            if (typeof value === "boolean" || typeof value === "number") {
                return String(value);
            }
            return value;
        }
        const bucket_data_json = JSON.parse(bucket_data_jsonString)

        handleWallet([bucket_data_json[0], bucket_data_json[1], bucket_data_json[2]]);
        // eric248550@gmail.com
    }

    function handleWallet(data) {
        // console.log(JSON.stringify(data).length)
        const type = 'mint';
        var metadata = {
          "ExampleName": {
            "image": "ipfs://QmRTrTgdoK9uxfCnk4dgsb6GfZ3zguFfQ9EXU6hVPBYrvv",
            "name": "Example Name",
            "data": data
          }
        }
        var metadata_string = encodeURIComponent(JSON.stringify(metadata)); 
        var link = 'https://transaction.aidev-cardano.com' + '?type=' + type + '&metadata=' + metadata_string + '&address=' + 'myaddress' + '&ada=2';
        var width = 600
        var height = Math.min(800, parseInt(window.outerHeight, 10))
        var left = (parseInt(window.outerWidth, 10) / 2) - (width / 2)
        var top = (parseInt(window.outerHeight, 10) - height) / 2
        window.open(link, 'Delegate', 'width=' + width + ',height=' + height + ',toolbar=0,menubar=0,location=0,status=0,scrollbars=1,resizable=1,left=' + left + ',top=' + top);
    }

    return (
        <div className="flex flex-col bg-[#292929]">
            <div className='min-h-screen m-auto w-5/6 mt-10 flex flex-row justify-center'>
                <div className='w-2/3 flex flex-col'>
                    <p className='text-white text-center text-4xl font-bold'>Get your NeuralPrint NFT</p>
                    <p className='mt-2 text-white text-base'>Our 6-minute psychometric test will securely capture your psychometric profile, which is then used to mint an NFT.</p>
                    <p className='mt-2 text-white text-base'>Your psychometric profile will be securely stored in the cloud in a GDPR-compliant manner, and, for security reasons, is not embedded in the metadata of the NFT.</p>
                    
                    <div className='mt-5 flex flex-row justify-start'>
                        <input type="text" className='border-[1px] border-[868686] text-xl text-center w-60 h-12'
                                placeholder='Type your email here..' 
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                            />
                        <button onClick={mintNft} className='bg-[#5E5D7F] hover:brightness-125 text-white font-bold w-60 h-12'>
                            Mint your NeuralPrint NFT
                        </button>
                    </div>

                    <p className='mt-5 text-white text-base'> If you'd like to be in the loop on future utility of your nft, subscribe to our newsletter</p>
                    <div className='mt-5 flex flex-row justify-start'>
                        <input type="text" className='border-[1px] border-[868686] text-xl text-center w-60 h-10'
                            placeholder='Type your email here..' 
                            // onChange={(event) => {
                            //     setTitle(event.target.value);
                            // }}
                        />
                        <button className='w-60 h-10 bg-[#5F8E7A] hover:brightness-125 text-white font-bold'>
                            Subscribe
                        </button>
                    </div>

                   
                </div>
                <img className='m-auto w-1/3' src={brain}/>
            </div>
            <div className='m-auto w-5/6 mb-5 '>
                <iframe id="inlineFrameExample"
                className='w-full min-h-screen'
                    title="Inline Frame Example"
                    // width="300"
                    // height="200"
                    src="https://myneuralprint.com/">
                </iframe>
            </div>

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
