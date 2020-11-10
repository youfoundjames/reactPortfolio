import React from 'react';
import employee from '../assets/employee.gif';
import bones from '../assets/bones.gif';
import shotglass from '../assets/shotglass.gif';
import weather from '../assets/weather.gif';
import workday from '../assets/workday.gif';
import password from '../assets/password.png';
import burger from '../assets/burger.jpg';
import PortfolioItem from '../components/PortfolioItem';
import Footer from './Footer';
import FadeIn from 'react-fade-in';

const Portfolio = () => {
   return (
      <div className="main">
         <p className="times"><i>PORTFOLIO</i></p>
         <FadeIn>
         <PortfolioItem
            img={bones}
            alt={"demo of bones calendar app"}
            header={"bones.nyc"}
            description={"This project is meant to serve as a consolidated event board where fans of jazz and other experimental musics can find information on performances taking place in New York City. Users are able to filter events by date and by artist; they are also able to create their own accounts and bookmark these events."}
            deployedURL={"https://bones-08060.herokuapp.com/"}
            repoURL={"https://github.com/jamescook98/bones.nyc"}
         />

         <br /><br />

         <PortfolioItem
            img={shotglass}
            alt={"demo of shotglass meditation app"}
            header={"ShotGlass Meditation"}
            description={"ShotGlass is a simple meditation app which allows the user to tailor their own timed meditative experience by selecting from a pool of randomly-generated affirmations and audiovisual themes."}
            deployedURL={"https://bubblyrobot.github.io/teamrepo/"}
            repoURL={"https://github.com/jamescook98/shotglassmeditation"}
         />

         <br /><br />

         {/* <PortfolioItem
            img={peregrine}
            alt={"demo of peregrine travel app"}
            header={"Peregrine"}
            description={"This application provides an insider's look at travel, helping people to find niche spots with authentic experiences. Those who want to participate as reviewers can login and recommend their own favorite locations."}
            deployedURL={"https://peregrine-travel.herokuapp.com/"}
            repoURL={"https://github.com/jamescook98/peregrine"}
         />

         <br /><br /> */}

<PortfolioItem
            img={employee}
            alt={"demo of employee directory app"}
            header={"Employee Directory"}
            description={"An employee directory built in React which allows employers to view non-sensitive data about employees, sort the list alphabetically, and filter the list by search."}
            deployedURL={"https://secure-hollows-70505.herokuapp.com/"}
            repoURL={"https://github.com/jamescook98/employeeDirectory"}
         />

         <br /><br />

         <PortfolioItem
            img={weather}
            alt={"demo of weather dashboard app"}
            header={"Weather Dashboard"}
            description={"Search for a city to see real-time local weather information as well as a five day forecast. Uses OpenWeatherMap API."}
            deployedURL={"https://jamescook98.github.io/weatherdashboard"}
            repoURL={"https://github.com/jamescook98/weatherdashboard"}
         />

         <br /><br />

         <PortfolioItem
            img={workday}
            alt={"demo of workday planner app"}
            header={"Day Planner"}
            description={"Displays current day schedule to add hourly events. Events are color-coded by time of day: past hour is in gray, current hour is in red, future hours are in green. Uses moment.js. My first project using jQuery."}
            deployedURL={"https://jamescook98.github.io/dayplanner"}
            repoURL={"https://github.com/jamescook98/dayplanner"}
         />

         <br /><br />

         <PortfolioItem
            img={password}
            alt={"demo of password generator app"}
            header={"Password Generator"}
            description={"Displays current day schedule to add hourly events. Events are color-coded by time of day: past hour is in gray, current hour is in red, future hours are in green. Uses moment.js. My first project using jQuery."}
            deployedURL={"https://jamescook98.github.io/passwordgenerator/"}
            repoURL={"https://github.com/jamescook98/passwordgenerator"}
         />

         <br /><br />

         <PortfolioItem
            img={burger}
            alt={"demo of burger app"}
            header={"Burger"}
            description={"A goofy application I made while learning MySQL. Users can \"eat\" burgers and they enter the \"devoured\" section, whereupon they can be \"eaten again\"."}
            deployedURL={"https://eat-da-burger-columbia.herokuapp.com/"}
            repoURL={"https://github.com/jamescook98/eatdaburger"}
         />
      
         <br /><br /><br /><br /><br /><br /><br /><br />

         </FadeIn>

      </div>
   );
}

export default Portfolio;