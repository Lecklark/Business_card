import React from "react";

export default function Button(props) {
    return (
        <div onClick={() => props.Handler(props.HandlerValue)}>{props.children}</div>
    )
}
