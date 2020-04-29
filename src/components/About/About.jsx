import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './About.module.scss';
import cork from './images/cork.png';
import {MediaComponent} from '../';
import {Col, Row, Container } from 'react-bootstrap';
import { Section, Card } from '../../components';
import {Link} from 'react-router-dom';

export default class About extends Component {
    render() {
        return(
            <Section className={style.section} size="normal">
                <Row>
                    <Col xs="12" sm="6" className={style.bodyText}>
                        <div>
                            <h2 className={style.heading}>About Us</h2>
                            <p className={style.body}>
                                Join us for the official Chicago Wine Fest, an elevated
                                wine tasting experience that aims to stimulate all of your
                                senses. Come throw back some great food and enjoy live
                                musical performances, all while sampling some of the best
                                varietals from around the world.
                            </p>
                            <p className={style.body}>
                                VIP admission means you’ll gain early access before the
                                crowd, so you’ll have more time to sample amazing wines
                                and meet representatives who can answer questions and
                                help you choose which wines to enjoy at home!
                            </p>
                            <p className={style.body}>
                                You have a choice between VIP and GA tickets. VIP
                                tickets get you in an extra hour earlier than GA
                                (General Admission) tickets, and you get to continue
                                to enjoy the event during the GA session. That’s the
                                only difference between the two ticket choices
                                per Session.
                            </p>
                        </div>
                        <div>
                            <h3 className={style.subheading}>Taste Wine Fest Schedule</h3>
                            <p className={style.tastingSession}>
                                <span className={style.session}> Session 1 VIP: </span> 12:00pm - 1:00pm (includes admission during GA)
                            </p>
                            <p className={style.tastingSession}>
                                <span className={style.session}> Session 1 GA: </span> 1:00pm - 3:00pm
                            </p>
                            <p className={style.tastingSession}>
                                <span className={style.session}> Session 2 VIP: </span> 3:30pm - 4:30pm (includes admission during GA)
                            </p>
                            <p className={style.tastingSession}>
                                <span className={style.session}> Session 2 GA: </span> 4:30pm - 6:30pm
                            </p>
                            <p className={style.tastingSession}>
                                <span className={style.session}> Session 3 VIP: </span> 7:00pm - 8:00pm (includes admission during GA)
                            </p>
                            <p className={style.tastingSession}>
                                <span className={style.session}> Session 3 GA: </span> 8:00pm - 10:00pm
                            </p>
                        </div>
                    </Col>
                    <Col xs="12" sm="6">
                        <img src={cork} alt="Corks" className={style.image} />
                    </Col>
                </Row>
            </Section>
        );
    }
}
