import React from 'react';
import './Footer.css';


export default function () {
    return (
        <div className="Footer">
            <footer className="general-footer">
                <div className="general-footer-top">
                    <img alt="merchub" className="logo" src="/images/merchub-shop6.png" />
                    <ul className="links">
                        <li><a href="/faq">FAQ &nbsp; &nbsp; &nbsp; </a> </li>
                        <li><a href="/privacy">Privacy Policy &nbsp; &nbsp; &nbsp; </a></li>
                        <li><a href="/terms">Terms and Conditions &nbsp; &nbsp; &nbsp; </a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}