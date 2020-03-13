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
import {Link} from 'react-router-dom';

export default class Attractions extends Component {
    render() {
        return(
            <Section className={style.section} size="normal">
                <Row className={style.rowTop}>

                    <Col xs="12" sm="6">
                        <Link to={"/wineries"} className={style.navLink}>
                            <Card image={wineries} title="Wineries" paragraph="Lorem ipsum dolor sit amet, consectetur elit, tempor incididunt ut dolore magna aliqua." button="Learn More" className="card" />
                        </Link>
                    </Col>
                    <Col xs="12" sm="6">
                        <Link to={"/purveyors"} className={style.navLink}>
                            <Card image={food} title="Purveyors" paragraph="Lorem ipsum dolor sit amet, consectetur elit, tempor incididunt ut dolore magna aliqua." button="Learn More" className="card" />
                        </Link>
                    </Col>

                </Row>
                <Row className={style.rowBottom}>

                    <Col xs="12" sm="6">
                        <Link to={"/entertainment"} className={style.navLink}>
                            <Card image={entertainment} title="Entertainment" paragraph="Lorem ipsum dolor sit amet, consectetur elit, tempor incididunt ut dolore magna aliqua." button="Learn More" className="card" />
                        </Link>
                    </Col>
                    <Col xs="12" sm="6">
                        <Link to={"/venue"} className={style.navLink}>
                            <Card image={location} title="Venue" paragraph="Lorem ipsum dolor sit amet, consectetur elit, tempor incididunt ut dolore magna aliqua." button="Learn More" className="card" />
                        </Link>
                    </Col>

                </Row>
            </Section>
        );
    }
}
