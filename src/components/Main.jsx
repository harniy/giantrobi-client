import React, { useEffect, useState } from "react";
import { authentication } from "../firebase-config";
import { TwitterAuthProvider, signInWithPopup } from "firebase/auth";

import useAuthApi from "../api/authApi";
import Loader from "./Loader";

export default function Main() {
  const [userImg, setUserImg] = useState("");
  const [username, setUsername] = useState("snoopdogg");
  const [isLoading, setIsLoading] = useState(false);

  const { userLogin } = useAuthApi();

  //use when TWITTER set access api
  /*     const handleConnect = async () => {
            const provider = new TwitterAuthProvider();
    
            signInWithPopup(authentication, provider)
                .then(res => {
                    console.log(res)
                })
                .catch(error => console.log(error))
        } */

  const userLogginHandle = async () => {
    setIsLoading(true);
    const data = await userLogin(username);

    const user = await data.json();

    setUserImg(user.image);
    setUsername(user.username);

    setIsLoading(false);
  };

  return (
    <div className="connect__section">
      {!isLoading && !userImg && (
        <div className="connect__section-block">
          <button
            className="connect__section-button"
            onClick={userLogginHandle}
          >
            Connect with Twitter
          </button>

          <div className="connect__section-input">
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
      )}

      {isLoading && <Loader />}

      {userImg && (
        <div className="connected__info">
          <div className="connected__info-section">
            <h2>Success</h2>

            <h2>User @{username} connected</h2>
          </div>
          <div className="connected__info-img">
          <img src={`http://localhost:5000/${userImg}`} className="connected__img" />
            </div>
        </div>
      )}
    </div>
  );
}
