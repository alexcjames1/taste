import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './EntertainmentList.module.scss';
import {Col, Row, Container } from 'react-bootstrap';
import { Section, Card } from '../../components';
import band from './images/band.png';


export default class EntertainmentList extends Component {



    render() {
        return(
            <Section className={style.section} kind="dark" size="small">
                <Row>
                    <Col xs="12" sm="8" className={style.heroContent}>
                        <h2 className={style.heading}>Our Entertainment</h2>
                        <p>
                            Our Entertainment pick for the 2020 season has been
                            hand selected by the Taste Wine Fest organizers
                            based on feedback from attendees from previous wine
                            fest seasons. If you would like to suggest
                            entertainment for our next event, follow us
                            on Facebook!
                        </p>
                    </Col>
                </Row>
                <Row className={style.row}>

                    <Col xs="12" sm="5" className={style.teamInfo}>
                        <div className={style.header}>
                            <div className={style.title}>
                                <h4>The Captain Miller Band</h4>
                            </div>
                        </div>
                        <div className={style.content}>
                            <p className={style.body}>
                                The Captain Miller Band is a group local to the
                                Chicago area and formed in 2011. They have
                                performed live over 300 times and have sold more
                                than 3,500 albums. The Captain Miller Band is
                                known for their unique rock-pop sound in the hits
                                "Sock Pasta" and "What The Heck, Man."
                            </p>
                        </div>
                    </Col>

                    <Col xs="12" sm="6">
                        <div className={style.media}>
                            <div className={style.mediaFigure}>
                                <img src={band} alt="Taste Wine Fest Entertainment" />
                            </div>
                        </div>
                    </Col>

                </Row>
            </Section>
        );
    }
}
