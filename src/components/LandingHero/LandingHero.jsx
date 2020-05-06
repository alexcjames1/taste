import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './LandingHero.module.scss';
import wineHero from './images/wine-hero.jpg';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';


export default class LandingHero extends Component {



    render() {
        return(
            <Section className={style.section} kind="secondary" size="normal">
                <Row>
                    <Col xs="9" sm="4" className={style.heroContent}>
                        <h1 className={style.heading}>Join us for the official Taste Wine Fest</h1>
                        <p>
                            Taste Wine Fest is an elevated wine tasting
                            experience that aims to stimulate all of your
                            senses. Come throw back some great food and enjoy
                            live musical performances, all while sampling some
                            of the best varietals from around the world.
                        </p>
                    </Col>
                </Row>
        </Section>
        );
    }
}
