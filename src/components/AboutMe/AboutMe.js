import React from "react";
import "./AboutMe.css";
import photo from "../../images/photo.jpg";

function AboutMe() {
    return (
        <section className="about-me">
            <a name="me" className="about-me__heading">Студент</a>
            <div className="about-me__content">
                <div className="about-me__profile">
                    <h3 className="about-me__name">Сережа Орлов</h3>
                    <p className="about-me__description">Френтенд-разработчик</p>
                    <p className="about-me__bio">
                    Схватываю на лету, коммуникативен до приличия,
                    голоден до новых знаний и идей!
                    </p>
                    <ul className="about-me__links-list">
                        <li className="about-me_list-item">
                            <a
                                className="about-me__link"
                                href="https://github.com/serezhaorlov"
                            >
                                Github
                            </a>
                        </li>
                    </ul>
                </div>
                <img
                    className="about-me__photo"
                    src={photo}
                    alt="Portfolio"
                />
            </div>
        </section>
    );
}

export default AboutMe;
