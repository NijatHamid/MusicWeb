import React from "react"


export default function Navbar(){
    return(
        <nav>
            <img src={`${process.env.PUBLIC_URL}/images/muvid_logo.png`} className="nav--logo" alt="logo" />
        </nav>
    )
}