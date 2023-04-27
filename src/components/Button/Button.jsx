import React from 'react';
import Spinner from '../Spinner/Spinner';

import './Button.scss';

const Button = ({ className = '', theme, loading, ...rest }) => {
  return (
    <button className={`ab-button ${theme} ${className}`} {...rest} disabled={loading}>
      {loading ? <Spinner /> : rest.children}
    </button>
  );
};

export default Button;
