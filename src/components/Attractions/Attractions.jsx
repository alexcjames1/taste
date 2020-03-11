import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Attractions.module.scss';
import food from './images/food.png';
import wineries from './images/wineries.png';
import location from './images/location.png';
import entertainment from './images/entertainment.png';
import {MediaComponent} from '../';
import {Col, Row, Container } from 'react-bootstrap';
import { Section, Card } from '../../components';

export default class Attractions extends Component {
    render() {
        return(
            <Section className={style.section} size="normal">
                <Row className={style.rowTop}>

                    <Col xs="12" sm="6">
                        <Card image={wineries} title="Wineries" paragraph="Schedule a plow to clear your driveway or sidewalk so you don't need to freeze." button="Order Now" className="card" />
                    </Col>
                    <Col xs="12" sm="6">
                        <Card image={food} title="Purveyors" paragraph="Schedule a plow to clear your driveway or sidewalk so you don't need to freeze." button="Become a driver" className="card" />
                    </Col>

                </Row>
                <Row className={style.rowBottom}>

                    <Col xs="12" sm="6">
                        <Card image={entertainment} title="Entertainment" paragraph="Schedule a plow to clear your driveway or sidewalk so you don't need to freeze." button="Order Now" className="card" />
                    </Col>
                    <Col xs="12" sm="6">
                        <Card image={location} title="Venue" paragraph="Schedule a plow to clear your driveway or sidewalk so you don't need to freeze." button="Become a driver" className="card" />
                    </Col>

                </Row>
            </Section>
        );
    }
}
