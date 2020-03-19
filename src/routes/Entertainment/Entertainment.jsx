import React, { Component } from 'react';
import {Heading, Header, AppWrapper, EntertainmentHero, EntertainmentList, Newsletter } from '../../components';
import {Helmet} from "react-helmet";

export default class Home extends Component {
    render() {
        return (
          <AppWrapper>
              <EntertainmentHero />
              <EntertainmentList />
              <Newsletter />
          </AppWrapper>
        );
    }
}
