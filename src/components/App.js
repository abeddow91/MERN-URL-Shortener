import React from 'react';

const App = (props) => {
  return (
    <h2 className="text-center">
    {props.headerMessage}
    </h2>
  );
};

App.propTypes = {
  headerMessage: React.PropTypes.string.isRequired
};

App.defaultProps = {
  headerMessage: 'URL Shortener'
};
