import React from 'react';
import './style.css';
import sax from '../assets/sax.png';

const home = () => {
    return (
        <div className="mainExtra">
            <h1></h1>
            <h1></h1>
            <div>
                <div className="row">
                    <div className="columnPadded">
                        <img src={sax} style={{ width: "100%" }} alt="James Cook playing alto saxophone"
                        />
                    </div>
                    <div className="columnPadded">
                        I am a full-stack web developer originally from Chicago, IL, currently based in Brooklyn, NY. I am fluent in Javascript, React.js, CSS, Node/Express, MySQL, and MongoDB, among other technologies. In 2020, I recieved a certificate in full-stack web development from Columbia University in New York.<br /><br /><br />
Contact me at:<br />
            <i>cookjamesarthur [at] gmail [dot] com</i><br /><br />
                        <a href="https://github.com/jamescook98">GitHub</a>
                        <a href="https://www.linkedin.com/in/james-cook-b0b53a145/">LinkedIn</a>
                        <a href="https://docs.google.com/document/d/1PrDKIx2ZXnkgMQWEaMTh8jR-U3YJDs2ImqE5qgw0TtM/edit?usp=sharing">Resume/CV</a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default home;