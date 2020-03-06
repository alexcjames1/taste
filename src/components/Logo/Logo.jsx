import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Logo.module.scss';
import tasteLogo from './images/taste-logo.png';

export default class Logo extends Component {
    render() {
        return(
            <div className={style.logo}>

                <div className={style.logo}>
                    <img src={tasteLogo} alt="" />
                </div>

            </div>
        );
    }
}
