import React from 'react';
import logo from '../science.svg';

const Header = () => {
  const App = {
    display: 'flex',
    flexDirection: 'column',
  };

  const AppHeader = {
    display: 'flex',
    flexDirection: 'row',
    fontFamily: 'Source Sans Pro',
    fontSize: '2em',
    backgroundColor: '#222',
    height: '100px',
    padding: '20px',
    color: 'white',
  };

  const headerStyle = {
    width: '70%',
  };

  const logoStyle = {
    width: '16%',
  };

  const AppLogo = {
    height: '80px',
  };

  return (
    <div style={App}>
      <div style={AppHeader}>
        <div style={logoStyle}><img src={logo} style={AppLogo} alt="logo" /></div>
        <div id={headerStyle}>React-Laravel Demo App</div>
      </div>
    </div>
  );
}
export default Header;