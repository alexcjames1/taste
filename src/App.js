import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home, About, Contact, Entertainment, Purveyors, Tickets, Venue, Wineries } from './routes';
import './css/style.scss';

function App() {
  return (
      <div className="App">
          <Router basename="/taste">
               <Route exact path="/" component={Home} />
               <Route exact path="/about" component={About} />
               <Route exact path="/contact" component={Contact} />
               <Route exact path="/entertainment" component={Entertainment} />
               <Route exact path="/purveyors" component={Purveyors} />
               <Route exact path="/tickets" component={Tickets} />
               <Route exact path="/venue" component={Venue} />
               <Route exact path="/wineries" component={Wineries} />
           </Router>
      </div>
  );
}

export default App;
