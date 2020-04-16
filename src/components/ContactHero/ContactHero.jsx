import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './ContactHero.module.scss';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';


export default class ContactHero extends Component {



    render() {
        return(
            <Section className={style.section} kind="secondary" size="normal">
                <Row>
                    <Col xs="12" sm="4" className={style.heroContent}>
                        <h1 className={style.heading}>Contact Us</h1>
                        <p>
                            Thank you for your interest in Taste Wine Fest. We
                            would love to hear from you. If you have an questions,
                            comments, or needs, you can contact us by phone, email,
                            or fill out the quick
                            <br></br>
                            form below.
                        </p>
                    </Col>
                </Row>
        </Section>
        );
    }
}
