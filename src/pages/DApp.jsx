import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ConnectedAccess from "../components/ConnectedAccess";
import ConnectTwitter from "../components/ConnectTwitter";
import ConnectWallet from "../components/ConnectWallet";
import Dashboard from "../components/Dashboard";
import GetAccess from "../components/GetAccess";
import GetAccessWait from "../components/GetAccessWait";

export default function DApp() {
    const [userImage, setUserImage] = useState('')
    const [username, setUsername] = useState('')
    const [appStep, setAppStep] = useState(1)

    const serverUrl = process.env.REACT_APP_SERVER


    const { state } = useLocation()

    useEffect(() => {
        setUserImage(state.image)
        setUsername(state.username)
    }, [state])

    return(
        <>
            {appStep === 1 && <ConnectTwitter userName={username} userImage={userImage} setAppStep={setAppStep} serverUrl={serverUrl} />}
            {appStep === 2 && <GetAccess username={username} setAppStep={setAppStep} />}
            {appStep === 3 && <ConnectWallet setAppStep={setAppStep} /> }
            {appStep === 4 && <GetAccessWait userName={username} /> }
            {appStep === 5 && <ConnectedAccess userName={username} userImage={userImage} serverUrl={serverUrl}  setAppStep={setAppStep} /> }
            {appStep === 6 && <Dashboard username={username} userImage={userImage} serverUrl={serverUrl} />}
        </>
    )
}