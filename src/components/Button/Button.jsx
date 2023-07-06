import React from "react";
import Spinner from "../Spinner/Spinner";

import "./Button.scss";

const BUTTON_THEMES = {
  WHITE: "WHITE",
  BROWN: "BROWN",
};

const Button = ({
  className = "",
  theme = BUTTON_THEMES.BROWN,
  loading,
  ...rest
}) => {
  return (
    <button
      className={`ab-button ${BUTTON_THEMES[theme]} ${className}`}
      {...rest}
      disabled={loading}
    >
      {loading ? <Spinner /> : rest.children}
    </button>
  );
};

export default Button;
