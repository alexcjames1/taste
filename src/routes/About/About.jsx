import React, { Component } from 'react';
import {Heading, Header, AppWrapper, AboutHero, About, BuyTickets, Newsletter } from '../../components';
import {Helmet} from "react-helmet";

export default class AboutFest extends Component {
    render() {
        return (
          <AppWrapper>
              <AboutHero />
              <About />
              <BuyTickets />
              <Newsletter />
          </AppWrapper>
        );
    }
}
