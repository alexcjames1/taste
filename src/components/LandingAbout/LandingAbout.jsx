import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './LandingAbout.module.scss';
import wineBottle from './images/wine-bottle.png';
import { Section } from '../../components';
import {Col, Row } from 'react-bootstrap';

export default class LandingAbout extends Component {
    render() {
        return(
                <Section className={style.section} kind="primary" size="xsmall">
                        <Row className={style.row}>

                            <Col xs="12" sm="6">
                                <div>
                                    <img src={wineBottle} className={style.mediaFigure} alt="#" />
                                </div>
                            </Col>
                            <Col xs="12" sm="6">
                                <div className={style.Content}>
                                    <div className={style.Header}>
                                        <h2 className={style.heading}>
                                            Consectetur purus
                                        </h2>
                                    </div>
                                    <div className={style.mediaBody}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Consectetur purus ut faucibus pulvinar elementum
                                            integer. Risus viverra adipiscing at in tellus integer
                                            feugiat scelerisque varius. Dictum at tempor commodo
                                            integer
                                        </p>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                </Section>
        );
    }
}
