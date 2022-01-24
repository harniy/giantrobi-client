import React from "react";


export default function ConnectTwitter({username, userImage, setAppStep, serverUrl}) {

    return(
        <div className="container-fluid">
        <div className="row mb-5 pb-md-5">
            <div className="col-md-12 text-center pt-2 mb-md-5">

                <h1 className="text-white pt-1 h1-big">
                    Alright! You just created an NFT for your Twitter URL
                </h1>
                <h3 className="link2 pb-2">
                    <a href={`https://twitter.com/${username}`} target="_blank">
                        twitter.com/{username}
                    </a>
                </h3>
                <img src={`${serverUrl}/${userImage}`} alt="img" className="img-fluid mx-auto d-block mb-2 img-width" />

                <a 
                className="btn btn-01 mt-3 a-grey"
                onClick={() => setAppStep(2)}
                >
                    Cool, Next >>
                </a>

            </div>
        </div>
    </div>
    )
}