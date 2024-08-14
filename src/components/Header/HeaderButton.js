import React from 'react'
import { Link } from 'react-router-dom';

const HeaderButton = ({className, id, link, buttonTitle, onClick}) => {
    return (
        <div className={className} onClick={onClick}>
        <Link id={id} to={link}>
        <span className="actions-title">{buttonTitle}</span>
        <i className="fas fa-chevron-right  actions-font" aria-hidden="true"></i>
        </Link>
      </div>
    )
};
export default HeaderButton;
