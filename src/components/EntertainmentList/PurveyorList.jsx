import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './PurveyorList.module.scss';
import {Col, Row, Container } from 'react-bootstrap';
import { Section, Card } from '../../components';

import capital from './images/capital.png';
import elske from './images/elske.png';
import prosecco from './images/prosecco.png';
import soulKantina from './images/soul-kantina.png';


export default class WineryHero extends Component {



    render() {
        return(
            <Section className={style.section} size="small">
                <Row>
                    <Col xs="12" sm="8" className={style.heroContent}>
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
                <Row>

                    <Col xs="12" sm="6">
                        <a href="https://prpwine.com/" target="_blank">
                            <Card image={capital} title="The Capital Grill" paragraph="Lorem ipsum dolor sit amet, consectetur elit, tempor incididunt ut dolore magna aliqua." button="See Menu" className="card" />
                        </a>
                    </Col>
                    <Col xs="12" sm="6">
                        <a href="https://www.thepourvineyard.com/" target="_blank">
                            <Card image={elske} title="Elske" paragraph="Lorem ipsum dolor sit amet, consectetur elit, tempor incididunt ut dolore magna aliqua." button="See Menu" className="card" />
                        </a>
                    </Col>

                </Row>
                <Row>

                    <Col xs="12" sm="6">
                        <a href="https://augusthillwinery.com/" target="_blank">
                            <Card image={prosecco} title="Prosecco Ristorante" paragraph="Lorem ipsum dolor sit amet, consectetur elit, tempor incididunt ut dolore magna aliqua." button="See Menu" className="card" />
                        </a>
                    </Col>
                    <Col xs="12" sm="6">
                        <a href="https://iscbubbly.com/" target="_blank">
                            <Card image={soulKantina} title="Soul Kantina" paragraph="Lorem ipsum dolor sit amet, consectetur elit, tempor incididunt ut dolore magna aliqua." button="See Menu" className="card" />
                        </a>
                    </Col>

                </Row>
            </Section>
        );
    }
}
