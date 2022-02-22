import React from "react";
import '../css/Welcome.css'

export const Welcome = () => {
    return(
        <div>
            <div className="container">
                <h1 className="welcome">Welcome <div className="span"></div></h1>
                <h1 className="welcome"> Amazing Axie Tool <div className="span"></div></h1>
            </div>
            <div className="below">
                <p className="by">by <div className="span2"></div></p>
                <h1 className="by">Rafael Contreras <div className="span2"></div></h1>
                <p className="by">All rights reserved <div className="span2"></div></p>
            </div>
        </div>
    )
}