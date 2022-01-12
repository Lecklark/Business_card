import React from "react";
import VkIcon from "../assets/Footer/VkIcon.png"
import InstIcon from "../assets/Footer/InstagramIcon.png"
import GitHubIcon from "../assets/Footer/GitHubIcon.png"
import Icon from "../UI/Icon";



export default function Footer() {
    return (
        <footer className="footer">
            <Icon link={'https://vk.com/one_hundred_zips'} imgSrc={VkIcon} imgAlt={'Vk Icon'} />
            <Icon link={'https://github.com/Lecklark'} imgSrc={GitHubIcon} imgAlt={'GitHub Icon'} />
            <Icon link={'https://www.instagram.com/one_hundred_zips/'} imgSrc={InstIcon} imgAlt={'Inst Icon'} />
        </footer>
    )
}
