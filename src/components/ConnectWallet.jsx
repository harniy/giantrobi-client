import React from "react";
import metamaskIcon from '../assets/images/metamask.png'
import heartIcon from '../assets/images/heart.png'


export default function ConnectWallet({setAppStep}) {


    return (
        <div className="container-fluid">
            <div className="row mb-5 pb-md-5">
                <div className="col-md-12 text-center pt-2 mb-md-5">

                    <h1 className="text-white pt-1  pb-4 h1-big">
                        Woohoo! We <img src={heartIcon}  alt="img" width="30" /> you too :)
                    </h1>
                    <h2 className="h1-big text-white pb-4">
                        You got access & your Twitter NFT is ready
                    </h2>

                    <h2 className="h1-big text-white pb-4">
                        Now connect your wallet to add your <span className="br-block"></span>
                        <a href="https://twitter.com/mattsilver" className="text-gray2" target="_blank">
                            twitter.com/mattsilver 
                        </a>
                        <span> NFT</span>
                    </h2>

                    <a 
                    onClick={() => setAppStep(5)}
                    className="btn btn-white mt-2">
                        <img src={metamaskIcon} alt="img" width="40" className="mr-3" />
                        Connect Metamask wallet
                    </a>
                    <p className="text-gray f19 pt-4">
                        <a 
                        onClick={() => setAppStep(5)}
                        className="text-gray"> No wallet? No problem >> Skip and do this later</a>
                    </p>
                </div>
            </div>
        </div>
    )
}