import React, { useState } from "react";

import useAuthApi from '../api/authApi'
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";


export default function Index() {
    const [isLoading, setIsLoading] = useState(false)
    const [authError, setAuthError] = useState(false)

    const { handleConnect } = useAuthApi()

    let navigate = useNavigate();

    const connectUser = async (e) => {
        e.preventDefault()
        setAuthError(false)

        setIsLoading(true)

        const user = await handleConnect()

        if (user?.error) {
            setAuthError(true)

            setIsLoading(false)

            return
        }

        navigate('dapp', { state: user })

    }

    return (
        <div>
            <div className="pt-5">
                <div className="container-fluid">
                    <div className="row mb-5 pb-md-5">
                        <div className="col-md-12 text-center pt-2 pb-md-5 mb-5" style={{ position: 'relative' }}>

                            <h1 className="font1 head-1 pt-md-5 mt-5 pb-4">
                                Where URLs become NFTs!
                            </h1>
                            <h2 className="text-white head-2 pb-4  pt-md-5 pt-2 mt-md-4">
                                Create unique NFTs from your Twitter URL
                            </h2>


                            {!isLoading ? (
                                <a href="" onClick={connectUser} className="btn btn-01 mt-md-4 scroll-btn">
                                    Connect with Twitter
                                </a>
                            ) : (
                                <Loader />
                            )}

                            {authError && (
                                <div className="error-auth">Oops, something wrong! pls try again</div>
                            )}

                        </div>
                    </div>
                </div>
            </div>


            <div className="mb-140"></div>

            <section className="pb-5  text-center bg-white" style={{ position: 'relative' }}>
                <div className="container mb-md-5 pb-md-5">
                    <div className="row pb-md-5">
                        <div className="col-md-12">
                            <h2 className="title-2 col-md-12 sc-text1 text-center pt-6 pb-3" id="giantrobi">
                                What is Giantrobi
                            </h2>
                            <p className="text-1">
                                A place where real URLs become NFTs. Starting with Twitter URLs, and more to come...
                            </p>
                            <p className="text-1 pt-2" id="">
                                And who is Robi?? Robi is a robot. A giant metaverse robot  made out <span className="br-block"></span> of NFTs created by y'all. Robi will be revealed this fall
                            </p>


                            <h2 className="title-2 col-md-12 text-center pb-3 pt-6" id="works">
                                How it works
                            </h2>
                            <p className="text-1">
                                1. Connect your Twitter
                            </p>
                            <p className="text-1">
                                2. Your Twitter profile NFT is created!
                            </p>
                            <p className="text-1">
                                3. Keep it in your wallet for fun or list it on Opensea to make some dough
                            </p>

                            <p className="text-1 pt-4">
                                Oh and by the way.. You can also make up to 10,000 unique NFTs from <span className="br-block"></span> your @twitterhandle with a single click
                            </p>
                            <h2 className="title-3 col-md-12 text-center pb-3 pt-5 mt-5">
                                Create your Twitter NFT :)
                            </h2>
                            {!isLoading ? (
                                <a href="" onClick={connectUser} className="btn btn-01 mt-md-4 scroll-btn">
                                    Connect with Twitter
                                </a>
                            ) : (
                                <Loader />
                            )}

                            {authError && (
                                <div className="error-auth-2">Oops, something wrong! pls try again</div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}