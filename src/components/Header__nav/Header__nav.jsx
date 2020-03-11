import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Header__nav.module.scss';
import { Route } from  'react-router';
import {Link} from 'react-router-dom';



export default class Header__nav extends React.Component {
    render() {
        return(
            <div>
                <nav className={style.navigation}>
                    <ul className={style.navList}>
                        <li className={style.menuItem}>
                            <Link to={"/"} className={style.navLink}>HOME</Link>
                        </li>
                        <li className={style.menuItem}>
                            <Link to={"/Contact"} className={style.navLink}>ABOUT</Link>
                        </li>
                        <li className={style.menuItem}>
                            <Link to={"/Contact"} className={style.navLink}>CONTACT</Link>
                        </li>
                        <li className={style.menuItem}>
                            <Link to={"/Contact"} className={style.navLink}>TICKETS</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
