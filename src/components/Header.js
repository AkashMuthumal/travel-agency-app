import React from "react";
import "../style/Header.css";
import Logo from "../images/logo.svg";

export default function Header(){
    return (
        <header>
            <img alt="" src={Logo} />
            <p>my travel journal.</p>
        </header>
    )
}