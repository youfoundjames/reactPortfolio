import React from 'react';
import Footer from './Footer';
import FadeIn from 'react-fade-in';
import './style.css';

const Contact = () => {
   return (
      <div className="main">
         <p className="times"><i>CONTACT</i></p>
         <FadeIn>
         <p>cookjamesarthur [at] gmail [dot] com <br/><br/></p>

         <a href="https://www.linkedin.com/in/james-cook-b0b53a145/">https://www.linkedin.com/in/james-cook-b0b53a145/</a>
         </FadeIn>
         {/* <div class="form-group">
            <label>Name:</label><br />
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="John Smith" /><br /><br />
         </div>

         <div class="form-group">
            <label for="exampleInputEmail1">Email address:</label><br />
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="johnsmith@ymail.fun" /><br /><br />
         </div>

         <div class="form-group">
            <label for="exampleInputMessage1">Message:</label><br />
            <textarea class="form-control" id="exampleInputMessage1" rows="6"
               placeholder="Your message here"></textarea><br /><br />
         </div>

         <button class="w3-btn w3-white w3-border w3-border-blue w3-round">Submit</button> */}

<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
         <Footer/>
      </div>
   );
}

export default Contact;