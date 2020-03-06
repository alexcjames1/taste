import React, {Component} from 'react';
import classy from '../../utils/classy';
import style from './Heading.module.scss';

export default class Heading extends Component {
    render() {
        const {kind, noMargin, align, className, children} = this.props;
        const classNameProps = classy(
            style[kind],
            style.heading,
            noMargin ? 'noMargin' : '',
            align ? style['align--' + align] : '',
            className,
        );

        return(
            <div className={classNameProps}>{children}</div>
        );
    }
}
