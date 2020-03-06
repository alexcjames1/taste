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
                    <Col sm="4" className={style.heroContent}>
                        <h1>Tincidunt lobortis</h1>
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
        </Section>
        );
    }
}
