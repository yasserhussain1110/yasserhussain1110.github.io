import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ScrollToTop from './lib/components/ScrollToTop';
import SideNavBar from './containers/SideNavBar';
import Home from './containers/Home';
import Contact from './containers/Contact';
import Portfolio from './containers/Portfolio';

const App = () => (
  <BrowserRouter>
    <div className="row">
      <SideNavBar />
      <ScrollToTop>
        <main className="col-md-10 route-holder">
          <Switch>
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </ScrollToTop>
    </div>
  </BrowserRouter>
);

export default App;
