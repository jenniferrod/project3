import React from "react";
import "./Footer.css";


const Footer = () => (
    <footer>
        <hr />
        <p className="footer">
            <div className="footertxt">
                <img alt="react" src="react.svg" />
            </div>
            <div className="footertxt">
                Built using React.js
            </div>
        </p>
    </footer>
);

export default Footer;
