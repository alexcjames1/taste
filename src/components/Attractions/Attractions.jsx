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
                            <Card image={wineries} title="Wineries" paragraph="White wine, red wine, and everything in between. These are our winery picks for May 2020." button="Learn More" className="card" />
                        </Link>
                    </Col>
                    <Col xs="12" sm="6">
                        <Link to={"/purveyors"} className={style.navLink}>
                            <Card image={food} title="Purveyors" paragraph="With street food and fine dining options, there’s many pairing opportunities this spring." button="Learn More" className="card" />
                        </Link>
                    </Col>

                </Row>
                <Row className={style.rowBottom}>

                    <Col xs="12" sm="6">
                        <Link to={"/entertainment"} className={style.navLink}>
                            <Card image={entertainment} title="Entertainment" paragraph="Based on feedback from previous patrons, here’s our entertainment pick for our May event." button="Learn More" className="card" />
                        </Link>
                    </Col>
                    <Col xs="12" sm="6">
                        <Link to={"/venue"} className={style.navLink}>
                            <Card image={location} title="Venue" paragraph="We’ve chosen to return to our favorite wine drinking spot, the amazing Lincoln Park Zoo!" button="Learn More" className="card" />
                        </Link>
                    </Col>

                </Row>
            </Section>
        );
    }
}
