import React from 'react'


export default function AuthApi() {

    const serverUrl = process.env.REACT_APP_SERVER

    const userLogin = async (user) => {
        const data = await fetch(`${serverUrl}/login/?username=${user}`)
        return data
    }

    return { userLogin }
}