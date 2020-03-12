import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Footer.module.scss';
import { Row, Col } from 'react-bootstrap';
import { Section } from '../../components';
import {Link} from 'react-router-dom';
import tasteLogo from './images/taste-logo.png';

export default class Footer extends Component {
    render() {
        return(
            <Section className={style.section} kind="dark" size="normal">
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
                            <div className={style.location}>
                                <h3>LOCATION</h3>
                                <p>
                                    13496 N Broadmore Drive
                                    <br/>
                                    Chicago, IL 60605
                                </p>
                                <p>
                                    312 350 9327
                                </p>
                            </div>
                            <div className={style.social}>
                                <h3>FOLLOW</h3>
                                <ul>
                                    <li>Facebook</li>
                                    <li>Instagram</li>
                                    <li>Twitter</li>
                                    <li>Linkedin</li>
                                </ul>
                            </div>
                            <div className={style.opportunities}>
                                <h3>NEWSLETTER SIGN-UP</h3>
                                <h3>VOLUNTEER OPPORTUNITIES</h3>

                            </div>
                        </div>
                    </Col>
                    <Col xs="12" sm="4">
                        blah
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
