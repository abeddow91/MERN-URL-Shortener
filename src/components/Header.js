import React from 'react';

const Header = ({ message }) => {
  return (
    <h1 className="Header text-center">
      {message}
    </h1>
  );
};

Header.propTypes = {
  message: React.PropTypes.string.isRequired
};

Header.defaultProps = {
  message: 'Url Shortener'
};


export default Header;
