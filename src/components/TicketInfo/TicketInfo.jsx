import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './TicketInfo.module.scss';
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

export default class TicketInfo extends Component {
    render() {
        return(
            <Section className={style.section} size="normal">
                <Row className={style.rowTop}>

                    <Col xs="12" sm="3">
                        <h3>GET YOUR TICKETS TODAY BEFORE THEY ARE GONE!</h3>
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
                                            <select id="cars" name="cars">
                                                <option value="volvo">Ticket Option</option>
                                                <option value="volvo">Session 1 VIP + GA (12PM-3PM)</option>
                                                <option value="saab">Session 1 GA (1PM - 3PM)</option>
                                                <option value="fiat">Session 2 VIP + GA (3:30PM - 6:30PM)</option>
                                                <option value="audi">Session 2 GA (4:30PM - 6:30PM)</option>
                                                <option value="audi">Session 3 VIP +GA (7PM - 10PM)</option>
                                                <option value="audi">Session 3 GA (8PM - 10PM)</option>
                                             </select>
                                    </Col>
                                    <Col>
                                        <input type="text" name="name" placeholder="What Would You Like to See From This Newsletter?" className={classy(style.input, style.commentary)}/>
                                        <a className={style.submitButton} href="google.com">SUBMIT</a>
                                    </Col>
                                </Row>
                            </form>
                        </div>
                    </Col>
                    <p>
                        This offer is final sale and nonrefundable.  Event will go on rain or shine.
                        Redemption of this offer is subject to normal availability. Pass is not
                        shareable or transferable. Pass is valid only the Session purchased.  All
                        wine tastings stop 15 minutes prior to the end of the session time.  Pass
                        must be redeemed on the date of the event between the Session time purchased
                        otherwise forfeited.  Wineries subject to change without notice depending on
                        availability. Must be 21 or older to participate.  Venue reserve the right to
                        deny entry to any individual without recourse.  Price does not include tax,
                        if applicable.  Never Drink and Drive.
                    </p>

                </Row>
            </Section>
        );
    }
}
