import React from "react";
import heartIcon from '../assets/images/heart.png'


export default function GetAccess({username, setAppStep}) {
    return(
        <div className="container-fluid">
            <div className="row mb-5 pb-md-5">
                <div className="col-md-12 text-center pt-2 mb-md-5">

                    <h1 className="text-white pt-1 pb-3 h1-big">
                        Hey @{username} We are seeing high demand for this NFT  stuff
                    </h1>
                    <h3 className="link2 pb-2">                      
                            You are <span className="text-white">#{553 + 1}</span> on the waitlist                    
                    </h3>

                    <h2 className="text-white pt-2 h2-big">
                        But wait! Anyone who will Tweet us some love <span className="br-block"></span> will be bumped up for <span className="green">immediate access!</span>
                    </h2>

                    <a 
                    onClick={() => setAppStep(3)}
                    className="btn btn-01 mt-md-5 mt-4 btn-large a-grey">
                        Get access! Tweet some 
                        <img src={heartIcon} alt="img" width="30" />
                    </a>
                    <p className="pt-3">
                        <a
                        onClick={() => setAppStep(4)}
                        className="text-gray a-grey f19">
                            Nah, I’m  patient - I’d rather wait
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}