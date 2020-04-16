import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './VenueInfo.module.scss';
import {Col, Row, Container } from 'react-bootstrap';
import { Section, Card } from '../../components';
import map from './images/map.png';


export default class VenueInfo extends Component {



    render() {
        return(
            <Section className={style.section} kind="dark" size="small">
                <Row>
                    <Col xs="12" sm="8" className={style.heroContent}>
                        <h1>Our Venue</h1>
                        <p>
                            As one of Chicago's most well-known attractions, the
                            Lincoln Park Zoo was chosen as a representation of
                            what the Chicago area has to offer. Since the
                            beginning of Taste Wine Fest in 2007, we have been
                            proud to call the Lincoln Park Zoo our home.
                        </p>
                    </Col>
                </Row>
                <Row className={style.row}>

                    <Col xs="12" sm="5" className={style.teamInfo}>
                        <div className={style.header}>
                            <div className={style.title}>
                                <h2>Lincoln Park Zoo</h2>
                            </div>
                        </div>
                        <div className={style.content}>
                            <p>
                                The Lincoln Park Zoo is a 35-acre park located
                                in Chicago, IL. The zoo was founded in 1868,
                                making it one of the oldest zoos in North
                                America.The Lincoln Park Zoo is home to a wide
                                variety of animals, including big cats, polar
                                bears, reptiles, monkeys, and other species
                                totaling approximately 1,100 animals.
                            </p>
                        </div>
                    </Col>

                    <Col xs="12" sm="6">
                        <div className={style.media}>
                            <div className={style.mediaFigure}>
                                <img src={map} alt="#" />
                            </div>
                        </div>
                    </Col>

                </Row>
            </Section>
        );
    }
}
