import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Attractions.module.scss';
import square from './images/square.png';
import {MediaComponent} from '../';
import {Col, Row, Container } from 'react-bootstrap';
import { Section, Card } from '../../components';

export default class Attractions extends Component {
    render() {
        return(
            <Section className={style.section} size="normal">
                <Row>

                    <Col xs="12" sm="6">
                        <Card image={square} title="Order with SnowMiner" paragraph="Schedule a plow to clear your driveway or sidewalk so you don't need to freeze." button="Order Now" className="card" />
                    </Col>
                    <Col xs="12" sm="6">
                        <Card image={square} title="Drive with SnowMiner" paragraph="Schedule a plow to clear your driveway or sidewalk so you don't need to freeze." button="Become a driver" className="card" />
                    </Col>

                </Row>
                <Row>

                    <Col xs="12" sm="6">
                        <Card image={square} title="Order with SnowMiner" paragraph="Schedule a plow to clear your driveway or sidewalk so you don't need to freeze." button="Order Now" className="card" />
                    </Col>
                    <Col xs="12" sm="6">
                        <Card image={square} title="Drive with SnowMiner" paragraph="Schedule a plow to clear your driveway or sidewalk so you don't need to freeze." button="Become a driver" className="card" />
                    </Col>

                </Row>
            </Section>
        );
    }
}
