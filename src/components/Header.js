import React from 'react';

const Header = ({ message }) => {
  return (
    <h2 className="Header text-center">
    {message}
    </h2>
  );
};

Header.propTypes = {
  message: React.PropTypes.string.isRequired
};

Header.defaultProps = {
  message: 'This is the default header message'
};


export default Header;
