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
                    <h3 className={style.formTitle}>Join our Newsletter</h3>

                </div>
            </Section>
        );
    }
}
