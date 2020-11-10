import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';

function App({ location }) {
  return (
    <BrowserRouter>
      <Wrapper>
        <Navigation />
        <TransitionGroup className="transition-group">
          <CSSTransition
            // key={location.key}
            timeout={{ enter: 300, exit: 300 }}
            classNames="fade"
          >
            <section className="route-section">
              <Switch location={location}>
                <Route path="/" component={Home} exact />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
                <Route component={Error} />
              </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup>

      </Wrapper>
    </BrowserRouter>
  );
}

const Wrapper = styled.div`
    .fade-enter {
        opacity: 0.01;
    }
    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 300ms ease-in;
    }
    .fade-exit {
        opacity: 1;
    }
      
    .fade-exit.fade-exit-active {
        opacity: 0.01;
        transition: opacity 300ms ease-in;
    }
`;


export default App;
