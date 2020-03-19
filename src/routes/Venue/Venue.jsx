import React, { Component } from 'react';
import {Heading, Header, AppWrapper, VenueHero, VenueInfo, Newsletter } from '../../components';
import {Helmet} from "react-helmet";

export default class Home extends Component {
    render() {
        return (
          <AppWrapper>
              <VenueHero />
              <VenueInfo />
              <Newsletter />
          </AppWrapper>
        );
    }
}
