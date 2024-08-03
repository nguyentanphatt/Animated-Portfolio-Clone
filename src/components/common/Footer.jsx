import React from "react";
import { social } from "../data/dummydata";

export const Footer = () =>{
    return (
        <>
            <footer>
                {social.map((item, index) => (
                    /*<i>{item.icon}</i>*/
                    <a key= {index} href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.icon}
                    </a>
                ))}
                <p>All Right Reserved 2022</p>
            </footer>
        </>
    )
}