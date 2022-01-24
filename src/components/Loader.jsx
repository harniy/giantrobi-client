import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { TailSpin } from  'react-loader-spinner'

export default function Loader() {

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <TailSpin color="#00BFFF" height={80} width={80} />
        </div>
    )
}