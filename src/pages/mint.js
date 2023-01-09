import React, { useRef, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useTimer } from 'react-timer-hook';

import AlertModal from "../alert";



export default function Mint() {
    const confirmRef = useRef(false);
    const [alertInformation, setAlertInformation] = useState({
        content: "",
        isDisplayed: false,
        type: "information",
    });


    return (
        <div className="min-h-screen bg-cover flex flex-col bg-fixed bg-[url('./images/bg.png')]">



        </div>
    );
}
