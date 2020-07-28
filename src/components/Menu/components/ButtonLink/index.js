import React from 'react';
import '../../Menu.css';

function ButtonLink(props) {
    // props => {  }

    return (
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    );
}

export default ButtonLink;