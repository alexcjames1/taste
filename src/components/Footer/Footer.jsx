import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Footer.module.scss';
import { Row, Col } from 'react-bootstrap';
import { Section } from '../../components';
import {Link} from 'react-router-dom';
import tasteLogo from './images/logo.png';
import map from './images/map.png';

export default class Footer extends Component {
    render() {
        return(
            <Section className={style.section} kind="dark" size="small">
                <Row>
                    <Col xs="12" sm="8">
                        <div className={style.footerNavigation}>
                            <div>
                                <img className={style.logo} src={tasteLogo} alt="" />
                            </div>
                            <nav className={style.navigation}>
                                <ul className={style.navList}>
                                    <li className={style.menuItem}>
                                        <Link to={"/"} className={style.navLink}>HOME</Link>
                                    </li>
                                    <li className={style.menuItem}>
                                        <Link to={"/about"} className={style.navLink}>ABOUT</Link>
                                    </li>
                                    <li className={style.menuItem}>
                                        <Link to={"/contact"} className={style.navLink}>CONTACT</Link>
                                    </li>
                                    <li className={style.menuItem}>
                                        <Link to={"/tickets"} className={classy(style.navLink, style.button)}>TICKETS</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className={style.footnotes}>
                            <div className={classy(style.note, style.location)}>
                                <h3 className={style.header}>LOCATION</h3>
                                <p className={style.content}>
                                    13496 N Broadmore Drive
                                    <br/>
                                    Chicago, IL 60605
                                </p>
                                <p className={style.content}>
                                    <a className={style.phone} href="tel:312-350-9327">312 350 9327</a>
                                </p>
                            </div>
                            <div className={classy(style.note, style.social)}>
                                <h3 className={style.header}>FOLLOW</h3>
                                <ul className={style.socialMediaList}>
                                    <li><a className={style.socialMediaListItems} href="https://facebook.com" target="_blank">Facebook</a></li>
                                    <li><a className={style.socialMediaListItems} href="https://www.instagram.com/" target="_blank">Instagram</a></li>
                                    <li><a className={style.socialMediaListItems} href="https://twitter.com/" target="_blank">Twitter</a></li>
                                    <li><a className={style.socialMediaListItems} href="https://www.linkedin.com/" target="_blank">Linkedin</a></li>
                                </ul>
                            </div>
                            <div className={classy(style.note, style.opportunities)}>
                                <h3 className={style.header}>NEWSLETTER SIGN-UP</h3>
                                <h3 className={style.header}>VOLUNTEER OPPORTUNITIES</h3>

                            </div>
                        </div>
                    </Col>
                    <Col xs="12" sm="4">
                        <a href="https://www.google.com/maps/place/Lincoln+Park+Zoo/@41.921102,-87.6356629,17z/data=!3m1!4b1!4m5!3m4!1s0x880fd36b093a9a07:0x940cc06f90294db!8m2!3d41.921102!4d-87.6334742" target="_blank">
                            <img className={style.map} src={map} alt="Event Location Map" />
                        </a>
                    </Col>
                </Row>
                <Row className={style.legal}>

                    <Col>
                        <p className={style.copyright}>
                            &copy;2020 Taste Wine Fest
                        </p>
                    </Col>
                    <Col className={style.socialMedia}>
                        <ul className={style.socialMediaLinks}>
                            <li className={style.icon}>
                                <a href="https://twitter.com/Audentio" target="_blank"><i className="mdi mdi-twitter"></i></a>
                            </li>
                            <li className={style.icon}>
                                <a href="https://www.facebook.com/Audentio/" target="_blank"><i className="mdi mdi-facebook-box"></i></a>
                            </li>
                            <li className={style.icon}>
                                <a href="https://www.linkedin.com/company/audentio/" target="_blank"><i className="mdi mdi-linkedin"></i></a>
                            </li>
                        </ul>
                    </Col>

                </Row>
            </Section>
        );
    }
}
