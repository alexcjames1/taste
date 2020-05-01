import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './TicketInfo.module.scss';
import {MediaComponent} from '../';
import {Col, Row, Container } from 'react-bootstrap';
import { Section, Card } from '../../components';
import {Link} from 'react-router-dom';

import wineSpill from './images/wine-spill.png';

export default class TicketInfo extends Component {
    render() {
        return(

            <Section className={style.section} kind="secondary" size="special">
                <Row>
                    <Col xs="12" sm="4">
                        <div className={style.contactForm}>
                            <h3 className={style.formTitle}>BUY TICKETS</h3>
                            <form action="https://formspree.io/moqlazjr" method="POST" className={style.form}>
                                <div className={style.name}>
                                    <input type="text" name="name" placeholder="First Name" className={classy(style.input, style.firstname)}/>
                                    <input type="text" name="name" placeholder="Last Name" className={classy(style.input, style.lastname)}/>
                                </div>
                                <input type="email" name="_replyto" placeholder="Email" className={classy(style.input, style.email)}/>
                                <input type="phone" name="phoneNumber" placeholder="Phone Number" className={classy(style.input, style.phone)}/>

                                <select className={classy(style.input, style.ticketOptions)} name="Ticket Options">
                                      <option value="Session1VIP">Session 1 VIP</option>
                                      <option value="Session1GA">Session 1 GA</option>
                                      <option value="Session2VIP">Session 2 VIP</option>
                                      <option value="Session2GA">Session 2 GA</option>
                                      <option value="Session3VIP">Session 3 VIP</option>
                                      <option value="Session3GA">Session 3 GA</option>
                                </select>

                                <input type="text" name="name" placeholder="Additional Comments" className={classy(style.input, style.commentary)}/>

                                <a className={style.submitButton} href="#">SUBMIT</a>
                            </form>
                        </div>
                    </Col>
                    <Col xs="12" sm="8">
                        <img className={style.media} src={wineSpill} alt="Wine Spill" />
                    </Col>
                </Row>
            </Section>
        );
    }
}
