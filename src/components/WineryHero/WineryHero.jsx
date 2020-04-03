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
                    <Col xs="12" sm="4" className={style.heroContent}>
                        <h1>Our Winery Family</h1>
                        <p>
                            The Taste Wine Fest showcases a variety of wines
                            local to the Chicago area. The wineries in this
                            region are well-known for producing fruit wines,
                            especially cherry and apple, however new
                            estate-grown grape wines are becoming popular as
                            well. Our Wine Fest is dedicated to making your trip
                            a memorable experience. So sip, swirl and savor the
                            taste of Chicago.
                        </p>
                    </Col>
                </Row>
        </Section>
        );
    }
}
