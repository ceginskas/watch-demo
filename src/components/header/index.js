import React from 'react';
import './styles.scss';
import Logo from '../../framework/images/logo.svg';

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={Logo} alt="Logo" />
    </div>
  );
};

export default Header;
