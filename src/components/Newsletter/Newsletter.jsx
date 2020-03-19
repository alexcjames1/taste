import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Newsletter.module.scss';
import {MediaComponent} from '../';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';

export default class Newsletter extends Component {
    render() {
        return(
            <Section className={style.section} kind="secondary" size="normal">
                <div className={style.contactForm}>
                    <h3 className={style.formTitle}>JOIN OUR NEWSLETTER</h3>
                    <form action="https://formspree.io/moqlazjr" method="POST" className={style.form}>
                        <Row>
                            <Col>
                                <div className={style.name}>
                                    <input type="text" name="name" placeholder="First Name" className={classy(style.input, style.firstname)}/>
                                    <input type="text" name="name" placeholder="Last Name" className={classy(style.input, style.lastname)}/>
                                </div>
                                <input type="email" name="_replyto" placeholder="Email" className={classy(style.input, style.email)}/>
                                <input type="phone" name="phoneNumber" placeholder="Phone Number" className={classy(style.input, style.phone)}/>
                            </Col>
                            <Col>
                                <input type="text" name="name" placeholder="What Would You Like to See From This Newsletter?" className={classy(style.input, style.commentary)}/>
                                <a className={style.submitButton} href="google.com">SUBMIT</a>
                            </Col>
                        </Row>
                    </form>
                </div>
            </Section>
        );
    }
}