import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './HouseCupHero.module.scss';
import slackLogo from './images/slack-logo-icon.png';
import {Col, Row, Container } from 'react-bootstrap';
import { Heading, Visible } from '../../components';
import { Modal, DownloadModal, Button } from '../../components';
import lake from './images/black-lake.svg';
import frontTreeline from './images/front-treeline.png';
import backTreeline from './images/back-treeline.png';
import castle from './images/castle.png';
import mainDarkHill from './images/main-ground.png';
import tree from './images/tree.svg';
import cloudLeft from './images/cloud-1.svg';
import cloudRight from './images/cloud-2.svg';
import crest from './images/crest.png';

import girlRed1 from './images/gryff-1.png';
import girlRed2 from './images/gryff-2.png';
import boyRed from './images/gryff-3.png';
import swirl from './images/dodad-1.png';
import tenRed from './images/+10.svg';

import girlGreen from './images/sly-1.png';
import boyGreen from './images/sly-2.png';
import arrow from './images/dodad-2.png';
import twentyFive from './images/+25.svg';

import girlBlue from './images/rav-1.png';
import boyBlue from './images/rav-2.png';
import swirlArrow from './images/dodad-4.png';
import emphasisLeft from './images/dodad-6.png';
import emphasisRight from './images/dodad-5.png';
import fifty from './images/+50.svg';
import crown from './images/crown.svg';

import girlYellow from './images/huff-3.png';
import boyYellow2 from './images/huff-1.png';
import boyYellow1 from './images/huff-2.png';
import zigzag from './images/dodad-3.png';
import tenYellow from './images/+10.svg';

export default class HouseCupHero extends Component {



    render() {
        return(
            <div className={style.HouseCupHero}>
                <Row className={style.scenery}>
                    <div className={style.background}>
                        <img alt="" src={lake} className={style.lake}/>
                    </div>
                    <div className={style.middleground}>
                        <img alt="" src={frontTreeline} className={style.frontTreeline}/>
                        <img alt="" src={backTreeline} className={style.backTreeline}/>
                    </div>
                    <div className={style.foreground}>
                            <img alt="" src={tree} className={style.tree}/>


                                <img alt="" src={castle} className={style.castle}/>

                            <img alt="" src={mainDarkHill} className={style.mainDarkHill}/>
                    </div>
                    <div className={style.clouds}>
                        <img alt="" src={cloudRight} className={style.cloudOne}/>
                        <img alt="" src={cloudLeft} className={style.cloudTwo}/>
                        <img alt="" src={cloudRight} className={style.cloudThree}/>
                    </div>
                </Row>
                <Container>
                    <Row className={style.row}>
                        <Col xs="12" md="6" className={style.content}>
                            <h1 className={style.h1}>Team up & award house points.</h1>
                            <div className={style.body}>Encourage employee recognition and team building in a way your organization will enjoy with this fun, free, and easy to use Slack bot!</div>
                            <div className={style.footer}>
                                <Modal trigger={
                                    <Button>
                                        <img alt="" src={slackLogo} className={style.slackLogo}/>Add to Slack
                                    </Button>}
                                >
                                    <DownloadModal />
                                </Modal>
                            </div>
                        </Col>
                        <Col xs="12" md="6">

                                <div className={style.crest}>

                                    <img alt="" src={crest} className={style.crestMedia}/>

                                    <img alt="" src={boyGreen} className={classy(style.user, style.userMed, style.boyGreen)}/>
                                    <img alt="" src={girlGreen} className={classy(style.user, style.userLg, style.girlGreen)}/>
                                    <img alt="" src={arrow} className={classy(style.arrowAccent, style.accent, style.arrow)}/>
                                    <img alt="" src={twentyFive} className={classy(style.points, style.twentyFive)}/>

                                    <img alt="" src={boyBlue} className={classy(style.user, style.userMed, style.boyBlue)}/>
                                    <img alt="" src={girlBlue} className={classy(style.user, style.userLg, style.girlBlue)}/>
                                    <img alt="" src={swirlArrow} className={classy(style.arrowAccent, style.accent, style.swirlArrow)}/>
                                    <img alt="" src={emphasisLeft} className={classy(style.accent, style.emphasisLeft)}/>
                                    <img alt="" src={emphasisRight} className={classy(style.accent, style.emphasisRight)}/>
                                    <img alt="" src={fifty} className={classy(style.points, style.fifty)}/>
                                    <img alt="" src={crown} className={classy(style.crown, style.crownLg)}/>
                                    <img alt="" src={crown} className={classy(style.crown, style.crownSm)}/>

                                    <img alt="" src={boyYellow2} className={classy(style.user, style.userMed, style.boyYellow2)}/>
                                    <img alt="" src={boyYellow1} className={classy(style.user, style.userSm, style.boyYellow1)}/>
                                    <img alt="" src={girlYellow} className={classy(style.user, style.userLg, style.girlYellow)}/>
                                    <img alt="" src={zigzag} className={classy(style.arrowAccent, style.accent, style.zigzag)}/>
                                    <img alt="" src={tenYellow} className={classy(style.points, style.tenYellow)}/>

                                    <img alt="" src={boyRed} className={classy(style.user, style.userLg, style.boyRed)}/>
                                    <img alt="" src={girlRed2} className={classy(style.user, style.userMed, style.girlRed2)}/>
                                    <img alt="" src={girlRed1} className={classy(style.userSm, style.girlRed1)}/>
                                    <img alt="" src={swirl} className={classy(style.arrowAccent, style.accent, style.swirl)}/>
                                    <img alt="" src={tenRed} className={classy(style.points, style.tenRed)}/>

                                </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
