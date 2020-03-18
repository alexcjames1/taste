import React, { Component } from 'react';
import {Heading, Header, AppWrapper, PurveyorHero, PurveyorList, Newsletter } from '../../components';
import {Helmet} from "react-helmet";

export default class Home extends Component {
    render() {
        return (
          <AppWrapper>
              <PurveyorHero />
              <PurveyorList />
              <Newsletter />
          </AppWrapper>
        );
    }
}
