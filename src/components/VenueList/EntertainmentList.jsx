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
                        <h1>Our Entertainment</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum
                        </p>
                    </Col>
                </Row>
                <Row className={style.row}>

                    <Col xs="12" sm="5" className={style.teamInfo}>
                        <div className={style.header}>
                            <div className={style.title}>
                                <h2>The Captain Miller Band</h2>
                            </div>
                        </div>
                        <div className={style.content}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Consectetur purus ut faucibus pulvinar elementum
                                integer. Risus viverra adipiscing at in tellus integer
                                feugiat scelerisque varius. Dictum at tempor commodo
                                ullamcorper a.
                            </p>
                        </div>
                    </Col>

                    <Col xs="12" sm="6">
                        <div className={style.media}>
                            <div className={style.mediaFigure}>
                                <img src={band} alt="#" />
                            </div>
                        </div>
                    </Col>

                </Row>
            </Section>
        );
    }
}
