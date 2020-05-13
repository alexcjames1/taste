import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './WineryHero.module.scss';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';


export default class WineryHero extends Component {



    render() {
        return(
            <Section className={style.section} kind="secondary" size="normal">
                <Row>
                    <Col xs="9" sm="4" className={style.heroContent}>
                        <h1 className={style.heading}>Our Winery Family</h1>
                        <p className={style.body}>
                            The Taste Wine Fest showcases a variety of wines
                            local to the Chicago area. Our Wine Fest is
                            dedicated to making your trip a memorable
                            experience. So sip, swirl and savor the taste of
                            Chicago.
                        </p>
                    </Col>
                </Row>
        </Section>
        );
    }
}
