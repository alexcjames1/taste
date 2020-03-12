import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Logo.module.scss';
import tasteLogo from './images/taste-logo.png';
import {Link} from 'react-router-dom';

export default class Logo extends Component {
    render() {
        return(
            <div className={style.logo}>

                <div className={style.logo}>
                    <Link to={"/"} className={style.navLink}>
                        <img src={tasteLogo} alt="" />
                    </Link>
                </div>

            </div>
        );
    }
}
