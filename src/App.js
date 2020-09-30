import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
 
function App() {
  return (      
    <BrowserRouter>
     <div>
       <Navigation />
         <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/contact" component={Contact}/>
         <Route component={Error}/>
        </Switch>
     </div> 
   </BrowserRouter>
 );
}
 
export default App;