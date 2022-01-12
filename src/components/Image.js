import React from "react";
import avatar from "../assets/Avatar.jpg"

export default function Image() {
    return (
        <div className="image" style={{ backgroundImage: `url(${avatar})` }}></div>
    )
}

