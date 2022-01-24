import React, { useState } from 'react'
import { authentication } from "../firebase-config";
import { TwitterAuthProvider, signInWithPopup } from "firebase/auth";

export default function AuthApi() {

    const serverUrl = process.env.REACT_APP_SERVER

    const userLogin = async (user) => {
        const data = await fetch(`${serverUrl}/login/?username=${user}`)
        return data
    }

    const userLogginHandle = async (username) => {
        console.log('start')
        const data = await userLogin(username);
    
        const user = await data.json();
    
        return user
      };

    const handleConnect = async () => {
        const provider = new TwitterAuthProvider();

        const user = signInWithPopup(authentication, provider)
            .then(res => {
              const username = res.user.reloadUserInfo.screenName
              return username
            })
            .then(username => {
              const data = userLogginHandle(username)

              return data
            })
            .catch(error => {
              return {error: error}
            })

            return await user
    }


    return { userLogin, handleConnect }
}