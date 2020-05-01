import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './TicketHero.module.scss';
import {Col, Row, Container } from 'react-bootstrap';
import { Section } from '../../components';


export default class TicketHero extends Component {



    render() {
        return(
            <Section className={style.section} kind="secondary" size="normal">
                <Row>
                    <Col xs="12" sm="4" className={style.heroContent}>
                        <h1 className={style.heading}>Don't Miss Taste Wine Fest This Spring</h1>
                        <p>
                            Bring your thirst and your curiosity and enjoy a fun
                            night of wine tasting at the Lincoln Park Zoo. Enjoy
                            more than 150 different wines and champagnes from
                            local Chicago wineries, full access to the Zoo and
                            all exhibits, a photo booth and more!
                        </p>
                    </Col>
                </Row>
        </Section>
        );
    }
}
