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
                <Row className={style.rowTop}>

                    <Col xs="12" sm="3">
                        <h3>Reach Out</h3>
                        <p>Hi, we're happy to hear from you, please fill in this form and we will get back to you as soon as possible.</p>
                    </Col>
                    <Col xs="12" sm="9">
                        <div className={style.formContainer}>
                            <form action="https://formspree.io/moqlazjr" method="POST" className={style.form}>
                                <Row>
                                    <Col>
                                        <div className={style.name}>
                                            <input type="text" name="name" placeholder="First Name" className={classy(style.input, style.firstname)}/>
                                            <input type="text" name="name" placeholder="Last Name" className={classy(style.input, style.lastname)}/>
                                        </div>
                                        <input type="email" name="_replyto" placeholder="Email" className={classy(style.input, style.email)}/>
                                        <input type="Subject" name="Subject" placeholder="Subject" className={classy(style.input, style.subject)}/>
                                    </Col>
                                    <Col>
                                        <input type="text" name="name" placeholder="What Would You Like to See From This Newsletter?" className={classy(style.input, style.commentary)}/>
                                        <a className={style.submitButton} href="google.com">SUBMIT</a>
                                    </Col>
                                </Row>
                            </form>
                        </div>
                    </Col>

                </Row>
            </Section>
        );
    }
}
