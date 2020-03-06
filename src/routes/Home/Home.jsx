import React, { Component } from 'react';
import {Heading, Header, AppWrapper, LandingHero, Attractions, BuyTickets } from '../../components';
import {Helmet} from "react-helmet";

export default class Home extends Component {
    render() {
        return (
          <AppWrapper>
              <Helmet>
                <title>Join Together</title>
              </Helmet>
              <LandingHero />
              <Attractions />
              <BuyTickets />
          </AppWrapper>
        );
    }
}
