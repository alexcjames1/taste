import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './TicketHero.module.scss';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';


export default class TicketHero extends Component {



    render() {
        return(
            <Section className={style.section} kind="secondary" size="normal">
                <Row>
                    <Col xs="12" sm="4" className={style.heroContent}>
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
