import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './BuyTickets.module.scss';
import rectangle from './images/rectangle.png';
import {MediaComponent} from '../';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';

export default class BuyTickets extends Component {
    render() {
        return(
            <Section className={style.section} kind="dark" size="normal">
                <Row className={style.row}>

                    <Col xs="12" sm="5" className={style.teamInfo}>
                        <div className={style.header}>
                            <div className={style.title}>
                                <h2>Consectetur purus</h2>
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
                                <img src={rectangle} alt="#" />
                            </div>
                        </div>
                    </Col>

                </Row>
            </Section>
        );
    }
}
