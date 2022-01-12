import React from "react";
import Button from "../UI/Button";
import Info from "./Info";
import MainInfo from "./MainInfo";
import mailIcon from "../assets/Mail.svg"



export default function MainPart(props) {


    return (
        <div className="main_part">
            <MainInfo lang={props.lang} />
            <Button Handler={props.setActiveModal} HandlerValue={true} >
                <div className="button"><img src={mailIcon} alt="Mail icon" />Email </div>

            </Button>
            <Info />
        </div>
    )
}
