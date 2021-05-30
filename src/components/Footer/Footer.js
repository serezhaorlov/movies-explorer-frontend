import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <h3 className="footer__title">
                Учебный проект Яндекс.Практикум х BeatFilm.
            </h3>
            <div className="footer__content">
                <p className="footer__copyright">© {new Date().getFullYear()}</p>
                <ul className="footer__links-list">
                    <li className="footer_list-item">
                        <a className="footer__link" href="https://praktikum.yandex.ru" >
                            Яндекс.Практикум
                        </a>
                    </li>
                    <li className="footer_list-item">
                        <a className="footer__link" href="https://www.facebook.com/" >
                            Facebook
                        </a>
                    </li>
                    <li className="footer_list-item">
                        <a className="footer__link" href="https://github.com/">
                            Github
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;

