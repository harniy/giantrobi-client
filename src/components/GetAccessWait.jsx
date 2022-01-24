import React from "react";
import heartIcon from '../assets/images/heart.png'


export default function GetAccessWait({userName}) {
    return(
        <div className="container-fluid">
        <div className="row mb-5 pb-md-5">
            <div className="col-md-12 text-center pt-2 mb-md-5">

                <h1 className="text-white pt-1 pb-4 h1-big">
                    Well, patient it is :)
                </h1>
                <h3 className="link2 pb-2">                      
                        You are <span className="text-white">#{553 + 1} </span> on the waitlist                   
                </h3>

                <h2 className="text-white pt-3 h2-big lh-40">
                    You can <a className="text-yellow" href="https://twitter.com/giantrobi" target="_blank">follow us</a> on Twitter and we'll let <span className="br-block"></span> you know as soon as your turn is up
                </h2>

                <h2 className="text-white pt-md-5 pt-1 mt-4 pb-md-3 pb-2 h1-big">
                    @{userName} NFT is ready to go
                </h2>

                <a href="" className="btn btn-01 btn-large">
                    Get access! Tweet some 
                    <img src={heartIcon} alt="img" width="30" />
                </a>
                
            </div>
        </div>
    </div>
    )
}