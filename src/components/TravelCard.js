import React from "react";
import Icon from "../images/icon.svg"
import "../style/TravelCard.css";

export default function TravelCard(props){
    return (
        <div className="travel-card">
            <img src={`../images/imge${props.img}.jpeg`} alt=""/>
            <div className="info-container">
                <div className="country-info-container">
                    <img src={Icon} alt="" />
                    <p className="country">{props.country}</p>
                    <p className="view-label">View on Google Maps</p>
                </div>
                <h1>{props.location}</h1>
                <h4>{props.date}</h4>
                <p>{props.discrption}</p>
            </div>
        </div>
    )
}