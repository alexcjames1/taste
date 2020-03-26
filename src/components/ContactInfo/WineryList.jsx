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
            <Section className={style.section} size="normal">
                <Row className={style.rowTop}>

                    <Col xs="12" sm="6">
                        <a href="https://prpwine.com/" target="_blank">
                            <Card image={prpWine} title="PRP Wine International" paragraph="Lorem ipsum dolor sit amet, consectetur elit, tempor incididunt ut dolore magna aliqua." className="card" />
                        </a>
                    </Col>
                    <Col xs="12" sm="6">
                        <a href="https://www.thepourvineyard.com/" target="_blank">
                            <Card image={thePour} title="The Pour Winery" paragraph="Lorem ipsum dolor sit amet, consectetur elit, tempor incididunt ut dolore magna aliqua." className="card" />
                        </a>
                    </Col>

                </Row>
                <Row className={style.rowTop}>

                    <Col xs="12" sm="6">
                        <a href="https://augusthillwinery.com/" target="_blank">
                            <Card image={augustHill} title="August Hill Winery" paragraph="Lorem ipsum dolor sit amet, consectetur elit, tempor incididunt ut dolore magna aliqua." className="card" />
                        </a>
                    </Col>
                    <Col xs="12" sm="6">
                        <a href="https://iscbubbly.com/" target="_blank">
                            <Card image={isc} title="Illinois Sparkling Co." paragraph="Lorem ipsum dolor sit amet, consectetur elit, tempor incididunt ut dolore magna aliqua." className="card" />
                        </a>
                    </Col>

                </Row>
                <Row className={style.rowTop}>

                    <Col xs="12" sm="6">
                        <a href="https://www.diamondwineimporters.com/" target="_blank">
                            <Card image={diamondWine} title="Diamond Wine Importers" paragraph="Lorem ipsum dolor sit amet, consectetur elit, tempor incididunt ut dolore magna aliqua." className="card" />
                        </a>
                    </Col>
                    <Col xs="12" sm="6">
                        <a href="https://www.wildblossommeadery.com/" target="_blank">
                            <Card image={wildBlossom} title="Wild Blossom Meadery &amp; Winery" paragraph="Lorem ipsum dolor sit amet, consectetur elit, tempor incididunt ut dolore magna aliqua." className="card" />
                        </a>
                    </Col>

                </Row>
                <Row className={style.rowTop}>

                    <Col xs="12" sm="6">
                        <a href="https://www.bonobowinery.com/index#" target="_blank">
                            <Card image={bonobo} title="Bonobo Winery" paragraph="Lorem ipsum dolor sit amet, consectetur elit, tempor incididunt ut dolore magna aliqua." className="card" />
                        </a>
                    </Col>
                    <Col xs="12" sm="6">
                        <a href="https://www.alsacerocks.com/" target="_blank">
                            <Card image={alsace} title="Alsace Rocks" paragraph="Lorem ipsum dolor sit amet, consectetur elit, tempor incididunt ut dolore magna aliqua." className="card" />
                        </a>
                    </Col>

                </Row>
            </Section>
        );
    }
}
