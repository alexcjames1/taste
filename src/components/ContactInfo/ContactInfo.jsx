import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './ContactInfo.module.scss';
import {MediaComponent} from '../';
import {Col, Row, Container } from 'react-bootstrap';
import { Section, Card } from '../../components';
import {Link} from 'react-router-dom';

import alsace from './images/alsace.png';
import augustHill from './images/august-hill.png';
import bonobo from './images/bonobo.png';
import diamondWine from './images/diamond-wine.png';
import isc from './images/isc.png';
import prpWine from './images/prp-wine.png';
import thePour from './images/the-pour.png';
import wildBlossom from './images/wild-blossom.png';

export default class ContactInfo extends Component {
    render() {
        return(
            <Section className={style.section} size="normal">
                <Row className={style.row}>

                    <Col xs="12" sm="3">
                        <h3 className={style.heading}>Reach Out</h3>
                        <p className={style.body}>Hi, we're happy to hear from you, please fill in this form and we will get back to you as soon as possible.</p>
                    </Col>
                    <Col xs="12" sm="9">
                        <div className={style.formContainer}>
                            <form action="https://formspree.io/moqlazjr" method="POST" className={style.form}>

                                <div>
                                    <input type="text" name="name" placeholder="First Name" className={classy(style.input, style.firstName)}/>
                                </div>
                                <div>
                                    <input type="text" name="name" placeholder="Last Name" className={classy(style.input, style.lastName)}/>
                                </div>
                                <div>
                                    <input type="email" name="_replyto" placeholder="Email" className={classy(style.input, style.email)}/>
                                </div>
                                <div>
                                    <input type="Subject" name="Subject" placeholder="Subject" className={classy(style.input, style.subject)}/>
                                </div>
                                <div>
                                    <input type="text" name="message" placeholder="Your message" className={classy(style.input, style.commentary)}/>
                                </div>
                                <div className={style.buttonContainer}>
                                    <a className={style.submitButton} href="google.com">SUBMIT</a>
                                </div>

                            </form>
                        </div>
                    </Col>

                </Row>
            </Section>
        );
    }
}
