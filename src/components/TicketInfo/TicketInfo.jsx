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

                                <input type="text" name="name" placeholder="What Would You Like to See From This Newsletter?" className={classy(style.input, style.commentary)}/>

                                <a className={style.submitButton} href="#">SUBMIT</a>
                            </form>
                        </div>
                        <div>
                            <p className={style.legal}>
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
                        </div>
                    </Col>
                    <Col xs="12" sm="8">
                        <img className={style.media} src={wineSpill} alt="#" />
                    </Col>
                </Row>
            </Section>
        );
    }
}
