import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './BuyTickets.module.scss';
import wineImage from './images/wine-image.jpg';
import {MediaComponent} from '../';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';
import {Link} from 'react-router-dom';

export default class BuyTickets extends Component {
    render() {
        return(
            <Section className={style.section} kind="dark" size="normal">
                <Row className={style.row}>

                    <Col xs="12" sm="6">
                        <div className={style.media}>
                            <div className={style.mediaFigure}>
                                <img src={wineImage} alt="Bottles of Wine" />
                            </div>
                        </div>
                    </Col>

                    <Col xs="12" sm="5">
                        <div className={style.header}>
                            <div className={style.title}>
                                <h2>Buy Tickets</h2>
                            </div>
                        </div>
                        <div className={style.content}>
                            <p>
                                Join us at the Lincoln Park Zoo for Taste Wine Fest.
                                Here you will enjoy a wide variety of local wines and
                                learn about the process of wine-making from industry
                                professionals. This event takes place on Saturday, May 30.
                                Come and enjoy the wine!
                            </p>
                        </div>
                        <div className={style.button}>
                            <Link to={"/tickets"} className={style.buttonTitle}>See More</Link>
                        </div>
                    </Col>

                </Row>
            </Section>
        );
    }
}
