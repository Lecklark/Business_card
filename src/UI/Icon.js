import React from "react";

export default function Icon(props) {
    return (
        <a href={props.link}><img className="icon" src={props.imgSrc} alt={props.imgAlt} /></a>
    )
}
