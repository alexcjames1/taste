import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './WineryList.module.scss';
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

export default class WineryList extends Component {
    render() {
        return(
            <Section className={style.section} size="special">
                <Row className={style.rowTop}>

                    <Col xs="12" sm="6">
                        <a href="https://prpwine.com/" target="_blank">
                            <Card image={prpWine} title="PRP Wine International" paragraph=
                                "PRP offers high quality products all across the US and
                                continues to expand offerings and knowledge of wine."
                                className="card" />
                        </a>
                    </Col>
                    <Col xs="12" sm="6">
                        <a href="https://www.thepourvineyard.com/" target="_blank">
                            <Card image={thePour} title="The Pour Winery" paragraph=
                                "We enjoy sharing our passion with wine-lovers and
                                provide an experience for you to learn about our wine."
                                className="card" />
                        </a>
                    </Col>

                </Row>
                <Row className={style.rowTop}>

                    <Col xs="12" sm="6">
                        <a href="https://augusthillwinery.com/" target="_blank">
                            <Card image={augustHill} title="August Hill Winery" paragraph=
                                "We aim to educate clients and believe in creating
                                bonds with clients that other wineries cannot
                                match."
                                className="card" />
                        </a>
                    </Col>
                    <Col xs="12" sm="6">
                        <a href="https://iscbubbly.com/" target="_blank">
                            <Card image={isc} title="Illinois Sparkling Co." paragraph="We hand-blend each ISC sparkling wine with patience and finesse, making an exceptional drinking experience." className="card" />
                        </a>
                    </Col>

                </Row>
                <Row className={style.rowTop}>

                    <Col xs="12" sm="6">
                        <a href="https://www.diamondwineimporters.com/" target="_blank">
                            <Card image={diamondWine} title="Diamond Wine Importers" paragraph=
                                "Our goal is to  educate the wine market about local
                                varietals and the spirit of outstanding producers."
                                className="card" />
                        </a>
                    </Col>
                    <Col xs="12" sm="6">
                        <a href="https://www.wildblossommeadery.com/" target="_blank">
                            <Card image={wildBlossom} title="Wild Blossom Meadery &amp; Winery" paragraph=
                                "Wild Blossom Winery is the first winery in Chicago and the only producer
                                of mead in the Northern Illinois area."
                                className="card" />
                        </a>
                    </Col>

                </Row>
                <Row className={style.rowTop}>

                    <Col xs="12" sm="6">
                        <a href="https://www.bonobowinery.com/index#" target="_blank">
                            <Card image={bonobo} title="Bonobo Winery" paragraph=
                                "Our vision is to bring approachability to the local wine scene, by allowing for an educational experience."
                                className="card" />
                        </a>
                    </Col>
                    <Col xs="12" sm="6">
                        <a href="https://www.alsacerocks.com/" target="_blank">
                            <Card image={alsace} title="Alsace Rocks" paragraph=
                                "We produce quality wines that are
                                expressions of the fruit, providing wines with
                                exceptional flavor."
                                className="card" />
                        </a>
                    </Col>

                </Row>
            </Section>
        );
    }
}
