import React, { useEffect, useState } from "react";
import { authentication } from "../firebase-config";
import { TwitterAuthProvider, signInWithPopup } from "firebase/auth";

import useAuthApi from "../api/authApi";
import Loader from "./Loader";

export default function Main() {
  const [userImg, setUserImg] = useState("");
  const [username, setUsername] = useState("snoopdogg");
  const [isLoading, setIsLoading] = useState(false);
  const [connectError, setConnectError] = useState(false)

  const { userLogin } = useAuthApi();

  //use when TWITTER set access api
      const handleConnect = async () => {
            const provider = new TwitterAuthProvider();
    
            signInWithPopup(authentication, provider)
                .then(res => {
                  const username = res.user.reloadUserInfo.screenName

                  return username
                })
                .then(username => {
                  userLogginHandle(username)
                })
                .catch(error => {
                  setConnectError(true)
                  console.log(error)
                })
        }

  const userLogginHandle = async (username) => {
    console.log('start')
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
            onClick={handleConnect}
          >
            Connect with Twitter
          </button>

      {connectError && <div className="connect__section-error">Username or password is incorrect! Pls try agayn</div>}

        </div>
      )}


      {isLoading && <Loader />}

      {userImg && (
        <div className="connected__info">
          <div className="connected__info-section">
            <h2>Alright! You just created an NFT for your Twitter URL</h2>

            <a className="connected__info-link" href={`https://twitter.com/${username}`} target="_blank">twitter.com/{username}</a>
          </div>
          <div className="connected__info-img">
          <img src={`${process.env.REACT_APP_SERVER}/${userImg}`} className="connected__img" />
            </div>
        </div>
      )}
    </div>
  );
}
