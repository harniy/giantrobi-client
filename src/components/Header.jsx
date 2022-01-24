import React from "react";
import giantrobi1 from '../assets/images/giantrobi-1.png'
import giantrobi2 from '../assets/images/giantrobi-2.png'

import { useLocation } from 'react-router-dom';


export default function Header() {

    const location = useLocation();


    return (
        <>
            {!location.pathname.includes('dapp') ? (
                <header className="fixed-top">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 text-center pt-1 pb-2">

                                {location.pathname.length > 1 && !location.pathname.includes('dapp') && (
                                    <a href="" className="btn btn-02 btn-02-slide mt-4">
                                        <span>Connect with</span> Twitter
                                    </a>
                                )}
                                <div className="logo-div">
                                    <a href="/">
                                        <img src={giantrobi1} alt="img" className="img1" />
                                        <img src={giantrobi2} alt="img" className="img2" />
                                    </a>
                                </div>

                                <div className="navbar">
                                    <ul className="list-inline text-left list-ul">
                                        <li className="list-inline-item">
                                            <a
                                                href="/#giantrobi"
                                                className="nav-link">
                                                What is Giantrobi
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a
                                                href="/#works"
                                                className="nav-link">
                                                How it works
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            ) : (
                <header className="sub-page">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 text-center pt-1 pb-2">
                                <div className="logo-div">
                                    <a href="/">
                                        <img src={giantrobi1} alt="img" className="img1" />
                                        <img src={giantrobi2} alt="img" className="img2" />
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </header>
            )}
        </>
    )
}