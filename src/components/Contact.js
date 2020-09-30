import React from 'react';

const Contact = () => {
   return (
      <div className="main">
         <h1><b><i>CONTACT</i></b></h1>
         
         <div class="form-group">
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

         <button type="button" class="btn btn-primary" id="submitBtn">Submit</button>
      </div>
   );
}

export default Contact;