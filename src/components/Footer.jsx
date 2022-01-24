import React from "react";
import { Link } from "react-router-dom";
import twitterIcon from '../assets/images/twitter.png'


export default function Footer() {
    return(
        <footer>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 footer-div  text-center">
                    <span className="s1">
                        Copyright 2022 Giantrobi
                    </span>
                    <span className="s2 text-center">
                        <a href="#" className="mr-lg-3  mr-2">
                            <img src={twitterIcon} width="26" />
                        </a>
                        <a href="mailto:hi@giantrobi.com">
                            hi@giantrobi.com
                        </a>
                        <Link to="/terms" target="_blank" className="ml-md-3 ml-2">
                            terms
                        </Link>
                        <Link to="/privacy" target="_blank" className="ml-md-3 ml-2">
                            privacy
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    </footer>
    )
}