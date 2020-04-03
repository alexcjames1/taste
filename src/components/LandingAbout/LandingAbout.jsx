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
                                            A complete experience for wine lovers
                                        </h2>
                                    </div>
                                    <div className={style.mediaBody}>
                                        <p>
                                            Bring your thirst and your curiosity
                                             and enjoy a fun night of wine
                                             tasting at the Lincoln Park Zoo.
                                             Enjoy a wide variety of local wines
                                             and champagnes from across the
                                             Chicago area, full access to the
                                             Zoo and all exhibits, photo booth
                                             and more!
                                        </p>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                </Section>
        );
    }
}
