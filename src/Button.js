import React from "react";
import "./scss/Button.scss";

class Button extends React.Component {
  render() {
    const { backgroundColor, text, onClick } = this.props;
    return (
      <button
        className="custom-button"
        style={{ backgroundColor }}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
}

export default Button;
