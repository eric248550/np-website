import React, { useRef, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useTimer } from 'react-timer-hook';

import AlertModal from "../alert";
import brain from "../images/icons/brain.png";

import Select from 'react-select'
import namiIcon from "../images/wallet_icon/nami.png";
import eternlIcon from "../images/wallet_icon/eternl.png";
import typhonIcon from "../images/wallet_icon/typhon.png";
import flintIcon from "../images/wallet_icon/flint.png";
import geroIcon from "../images/wallet_icon/gero.png";
import nufiIcon from "../images/wallet_icon/nufi.png";

import logoWhite from "../images/logo_white.png";
import fingerPrint from "../images/icons/fingerPrint.svg";

import MultipleWalletApi, { Cardano } from '../nami-js';
let walletApi;

export default function Mint() {
    const confirmRef = useRef(false);
    const [alertInformation, setAlertInformation] = useState({
        content: "",
        isDisplayed: false,
        type: "information",
    });
    const [email, setEmail] = useState();
    const [connected, setConnected] = useState(false);
    const [connectWallet, setConnectWallet] = useState();

    async function t(walletName) {
        const S = await Cardano();
        walletApi = new MultipleWalletApi(
            S,
            window.cardano[walletName],
            // blockfrostApiKey
            {
                0: "preprodTjTPf4nKUTGwgIFgk1wqIj4vtpHe9qi6", // testnet
                1: "mainnetzPROg9q7idoA9ssVcWQMPtnawNVx0C0K", // mainnet
            }
        );
    }
    const connect = async (wallet) => {
        const walletName = wallet.value;
        await t(walletName);
        await walletApi.enable()
            .then(async (result) => 
            {
                setConnected(true);
                setConnectWallet(walletName);
                console.log(`switch to ${walletName}`);
            }
            )
            .catch((e) => console.log(e));    
    };
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
        if (!connected) {
            setAlertInformation({
                type: "information",
                isDisplayed: true,
                content: `Please connect your wallet first`,
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
            // `http://localhost:8787/neuralprint/GetUserTestData/${email}`
            `https://api.aidev-cardano.com/neuralprint/GetUserTestData/${email}`
        )).json();

        if (bucket_data.error) {
            setAlertInformation({
                type: "information",
                isDisplayed: true,
                content: bucket_data.error,
            });
            return;
        }
        // console.log(bucket_data)
        // const bucket_data_jsonString = JSON.stringify(bucket_data, replacer);

        // function replacer(key, value) {
        //     if (typeof value === "boolean" || typeof value === "number") {
        //         return String(value);
        //     }
        //     return value;
        // }
        // const bucket_data_json = JSON.parse(bucket_data_jsonString)

        buildTransaction(bucket_data)
    }

    async function buildTransaction(bucket_data) {
        const myAddress = await walletApi.getAddress();

        const name = `${bucket_data.reference}`
        let mintedAssetsArray = [{
            assetName: name,
            quantity: '1',
            policyId: '9eb829a22bf46a671659f7eaa0fcf2b9b52d75d43884c41ccba97b0f',
            policyScript: '8201818200581ccd6f728c9af7e6cc98142026373e1c1432076c4dcadc1c64366b0cf8',
        }];

        const recipients = [
            {
                address: myAddress,
                amount: "0",
                mintedAssets: mintedAssetsArray
            },
            // {
            //     // receive address
            //     address: c.RECEIVE_ADDRESS,
            //     amount: buyingAmount * (c.MINT_PRICE - c.SERVICE_RATE),
            // },
            // {
            //     // service address
            //     address: c.SERVICE_ADDRESS,
            //     amount: buyingAmount * c.SERVICE_RATE,
            // },
        ];

        const metadata = {
            "721": {
                "9eb829a22bf46a671659f7eaa0fcf2b9b52d75d43884c41ccba97b0f":{
                    [name]:{
                        "reference": bucket_data.reference,
                        "image": "ipfs://QmRTrTgdoK9uxfCnk4dgsb6GfZ3zguFfQ9EXU6hVPBYrvv",
                        "name":  `neuralprint #${bucket_data.reference}`
                    }
                }
            }
        }
        try {
            let utxos = await walletApi.getUtxosHex();
            let netId = await walletApi.getNetworkId();
            const t = await walletApi.transaction({
                PaymentAddress: myAddress,
                recipients: recipients,
                // metadataHash: preData.metaDataHash,
                metadata: metadata,
                utxosRaw: utxos,
                networkId: netId.id,
                ttl: 3600,
                // addMetadata: false,
                multiSig: true,
            });

            const witnessBuyer = await walletApi.signTx(t, true);

            const data = {
                "buyerTx": t,
                "witnessBuyer": witnessBuyer,
                "email": email,
                "nftName": name,
                "buyerAddress": myAddress,
                "reference": bucket_data.reference,
            };
            const response = await (await fetch(
                // 'http://localhost:8787/neuralprint/MultiSig',
                'https://api.aidev-cardano.com/neuralprint/MultiSig',
                {
                    method:'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                }
            )).json();
            console.log(response);
            if (response.error) {
                console.log(response.error);
                setAlertInformation({
                    type: "information",
                    isDisplayed: true,
                    content: `Multisig Error \n\n ${response.error}`,
                });
                return;
            }

            setAlertInformation({
                type: "information",
                isDisplayed: true,
                content: `Transaction ID \n\n ${response.txHash}`,
            });
        } catch (e) {
            console.log(e)
            if (e.info) e = e.info;
            setAlertInformation({
                type: "information",
                isDisplayed: true,
                content: `Build Transaction Error \n\n ${e}`,
            });
        }

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
            <div className='min-h-screen m-auto w-5/6 mt-10 flex flex-row justify-center'>
                <div className='w-2/3 flex flex-col'>
                    <p className='text-white text-center text-4xl font-bold'>Get your NeuralPrint NFT</p>
                    <p className='mt-2 text-white text-base'>Our 6-minute psychometric test will securely capture your psychometric profile, which is then used to mint an NFT.</p>
                    <p className='mt-2 text-white text-base'>Your psychometric profile will be securely stored in the cloud in a GDPR-compliant manner, and, for security reasons, is not embedded in the metadata of the NFT.</p>
                    
                    <div className='mt-5 flex flex-col md:flex-row justify-start'>
                        <input type="text" className='border-[1px] border-[868686] text-xl text-center w-60 h-10'
                                placeholder='Type your email here..' 
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                            />
                        <button onClick={mintNft} className='bg-[#5E5D7F] hover:brightness-125 text-white font-bold w-32 h-10'>
                            Mint NFT
                        </button>
                        {/* <div className='flex justify-center'> */}
                            <Select
                                className="w-32 text-black text-center text-base"
                                // defaultValue={''}
                                placeholder={"wallet"}
                                onChange={connect}
                                options={[
                                    { value: 'eternl', label: 
                                        <div className="justify-center flex flex-row items-center">
                                            <img src={eternlIcon} width={30} height={30}/>
                                            {/* <p>&nbsp;&nbsp;Eternl</p> */}
                                        </div>
                                    },
                                    { value: 'nami', label: 
                                        <div className="justify-center flex flex-row items-center">
                                            <img src={namiIcon} width={30} height={30}/>
                                            {/* <p>&nbsp;&nbsp;Nami</p> */}
                                        </div>
                                    },
                                    { value: 'typhoncip30', label: 
                                        <div className="justify-center flex flex-row items-center">
                                            <img src={typhonIcon} width={30} height={30}/>
                                            {/* <p>&nbsp;&nbsp;Typhon</p> */}
                                        </div>
                                    },
                                    { value: 'flint', label: 
                                        <div className="justify-center flex flex-row items-center">
                                            <img src={flintIcon} width={30} height={30}/>
                                            {/* <p>&nbsp;&nbsp;Flint</p> */}
                                        </div>
                                    },
                                    { value: 'gerowallet', label: 
                                    <div className="justify-center flex flex-row items-center">
                                        <img src={geroIcon} width={30} height={30}/>
                                        {/* <p>&nbsp;&nbsp;Gero</p> */}
                                    </div>
                                    },
                                ]}
                            />
                        {/* </div> */}
                    </div>

                    <p className='mt-5 text-white text-base'> If you'd like to be in the loop on future utility of your nft, subscribe to our newsletter</p>
                    <div className='mt-5 flex flex-row justify-start'>
                        <input type="text" className='border-[1px] border-[868686] text-xl text-center w-60 h-10'
                            placeholder='Type your email here..' 
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                        />
                        <button onClick={provideEmail} className='w-60 h-10 bg-[#5F8E7A] hover:brightness-125 text-white font-bold'>
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
