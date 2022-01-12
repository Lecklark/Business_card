import React from "react";
import Button from "../UI/Button";
import mailIcon from "../assets/close.png"

export default function Modal({ active, setActiveModal, children }) {

    if (active) {
        return (
            <div className="modal" onClick={() => { setActiveModal(false) }}>
                <div className="modal_container" onClick={e => e.stopPropagation()}>
                    <div className="Buttons">
                        <Button Handler={setActiveModal} HandlerValue={false}>
                            <div className="button"><img src={mailIcon} alt="Mail icon" /></div>
                        </Button>
                    </div>
                    {children}
                </div>
            </div>
        )
    } else {
        return null
    }
}
