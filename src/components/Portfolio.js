import React from 'react';
import peregrine from '../assets/peregrine.png';
import shotglass from '../assets/shotglass.png';
import weather from '../assets/weather.png';
import workday from '../assets/workday.png';
import password from '../assets/password.png';

const Portfolio = () => {
   return (
      <div className="main">
         <h1><b><i>PORTFOLIO</i></b></h1>

         <div className="row">
            <div className="column">
               <img className="portfolioImg" src={peregrine} alt="demo of peregrine travel app" />
            </div>
            <div className="column">
               <h3><i>PEREGRINE</i></h3>
               This application provides an insider's look at travel, helping people to find niche spots with authentic experiences. Those who want to participate as reviewers can login and recommend their own favorite locations. <br /><br />
               <a className="portfolio-link" href="https://peregrine-travel.herokuapp.com/">Deployed application</a>
               <a className="plinksmall" href="https://github.com/jamescook98/peregrine">GitHub</a>
            </div>
         </div>

         <br /><br />

         <div className="row">
            <div className="column">
               <img className="portfolioImg" src={shotglass} alt="demo of shotglass meditation app" />
            </div>
            <div className="column">
               <h3><i>SHOTGLASS MEDITATION</i></h3>
               ShotGlass is a simple meditation app which allows the user to tailor their own timed meditative experience by selecting from a pool of randomly-generated affirmations and audiovisual themes. <br /><br />
               <a className="portfolio-link" href="https://bubblyrobot.github.io/teamrepo/">Deployed application</a>
               <a className="plinksmall" href="https://github.com/jamescook98/shotglassmeditation">GitHub</a>
            </div>
         </div>

         <br /><br />

         <div className="row">
            <div className="column">
               <img className="portfolioImg" src={weather} alt="demo of weather dashboard app" />
            </div>
            <div className="column">
               <h3><i>WEATHER DASHBOARD</i></h3>
               Search for a city to see real-time local weather information as well as a five day forecast. Uses OpenWeatherMap API.<br /><br />
               <a className="portfolio-link" href="https://jamescook98.github.io/weatherdashboard">Deployed application</a>
               <a className="plinksmall" href="https://github.com/jamescook98/weatherdashboard">GitHub</a>
            </div>
         </div>

         <br /><br />

         <div className="row">
            <div className="column">
               <img className="portfolioImg" src={workday} alt="demo of workday planner app" />
            </div>
            <div className="column">
               <h3><i>DAY PLANNER</i></h3>
               Displays current day schedule to add hourly events. Events are color-coded by time of day: past hour is in gray, current hour is in red, future hours are in green. Uses moment.js. My first project using jQuery.<br/><br/>
               <a className="portfolio-link" href="https://jamescook98.github.io/dayplanner">Deployed application</a>
               <a className="plinksmall" href="https://github.com/jamescook98/dayplanner">GitHub</a>
            </div>
         </div>

         <br /><br />

         <div className="row">
            <div className="column">
               <img className="portfolioImg" src={password} alt="demo of password generator app" />
            </div>
            <div className="column">
               <h3><i>PASSWORD GENERATOR</i></h3>
               A simple Javascript application that generates a random password based on user-selected criteria. User selects which characters should be present in the password, as well as the length of the password, and upon hitting the "generate" button a random password meeting these standards will be printed to the screen.<br/><br/>
               <a className="portfolio-link" href="https://jamescook98.github.io/passwordgenerator">Deployed application</a>
               <a className="plinksmall" href="https://github.com/jamescook98/passwordgenerator">GitHub</a>
            </div>
         </div>
      </div>
   );
}

export default Portfolio;