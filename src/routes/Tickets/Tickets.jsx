import React, { Component } from 'react';
import {Heading, Header, AppWrapper, TicketHero, TicketInfo, Newsletter } from '../../components';
import {Helmet} from "react-helmet";

export default class Home extends Component {
    render() {
        return (
          <AppWrapper>
              <Helmet>
                <title>Join Together</title>
              </Helmet>
              <TicketHero />
              <TicketInfo />
              <Newsletter />
          </AppWrapper>
        );
    }
}
