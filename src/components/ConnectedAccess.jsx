import React from "react";



export default function ConnectedAccess({username, userImage, serverUrl, setAppStep}) {



    return (
        <>
            <div className="connected">
                <span className="green">013asf<sup>xxxx</sup> <span className="text-yellow">Connected</span> </span>
            </div>

            <div>
                <div className="container-fluid">
                    <div className="row mb-5 pb-md-5">
                        <div className="col-md-12 text-center pt-md-2 mb-md-5">

                            <h1 className="text-white pt-1  h1-big2">
                                Yeah!!
                            </h1>

                            <h2 className="h1-big text-white pb-2 pt-md-1">
                                Your twitter URL
                                <a href={`https://twitter.com/${username}`} className="text-gray2" target="_blank">
                                    twitter.com/{username}
                                </a>
                                <span className="br-block"></span>
                                is now on the blockchain!
                            </h2>

                            <img src={`${serverUrl}/${userImage}`} alt="img" className="img-fluid mx-auto d-block mb-2 img-width" />
                            <h4 className="text-yellow address-text pt-3 pb-2">
                                <span className="text-white">Address</span> <span className="num">0x3a45fdf3d54354fsdfcsfd312a</span>
                            </h4>

                            <a
                            onClick={() => setAppStep(6)}
                            className="btn btn-01 ">
                                Ok, Show me my dashboard
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}