import React from "react";


export default function Dashboard({ username, userImage, serverUrl }) {
    return (
        <>
            <div className="connected">
                <span className="green">013asf<sup>xxxx</sup> <span className="text-yellow">Connected</span> </span>
            </div>

            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 text-center pt-md-2 mb-md-4">

                            {/* <h1 className="text-white pt-md-5  mt-md-5  h1-big3">
                        <a href="https://twitter.com/mattsilver" className="green" target="_blank">
                            www.twitter.com/mattsilver
                        </a>
                    </h1> */}
                            <h1 className="text-white pt-1 mb-0  h1-big2">
                                Dashboard
                            </h1>

                            <h2 className="text-gray2 pb-md-4 mb-20">
                                @{username}
                            </h2>

                        </div>
                    </div>

                </div>
            </div>

            <div className="container">
                <div className="row mb-md-5 pt-md-0 pt-4 pb-5">
                    <div className="col-md-6">
                        <div className="text-center">
                            <h4 className="pb-2">
                                <a href={`https://twitter.com/${username}`} className="green" target="_blank">
                                    www.twitter.com/mattsilver
                                </a>
                            </h4>
                            <img src={`${serverUrl}/${userImage}`}  alt="img" className="img-fluid mx-auto d-block mb-2 img-width2" />
                            {/* <h2 className="text-gray2 pt-3 pb-md-2">
                    1000/1000 C100%
                </h2>
                <h2>
                    <a href="" className="text-yellow mb-23">
                        View on Opensea
                    </a>
                </h2> */}

                            <a href="" className="btn btn-01 mt-2 mb-3 img-width2 btn-large l-btn">
                                List on Opensea
                            </a>

                            <h4 className="mb-23">
                                <span className="text-white">What??</span>
                                <a href="" className="text-yellow">
                                    Click here for explanation
                                </a>
                            </h4>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-center pt-md-0 pt-5">
                            <h4 className="pb-2">
                                <a href={`https://twitter.com/${username}`} className="green" target="_blank">
                                    www.twitter.com/mattsilver
                                </a>
                            </h4>
                            <img src={`${serverUrl}/${userImage}`}  alt="img" className="img-fluid mx-auto d-block mb-2 img-width2" />

                            <a href="" className="btn btn-01 mt-2 mb-3 img-width2 btn-large l-btn">
                                Add 10-10000 pixel collection
                            </a>

                            <h4 className="mb-23">
                                <span className="text-white">What??</span>
                                <a href="" className="text-yellow">
                                    Click here for explanation
                                </a>
                            </h4>

                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-white pt-5 pb-5">
                <div className="container-fluid pt-md-5 pb-md-5">
                    <div className="row  pt-md-5 pb-md-5">
                        <div className="col-md-12  pt-md-5">

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}