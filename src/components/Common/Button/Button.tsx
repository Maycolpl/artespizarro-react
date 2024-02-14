import React from "react";

export type ButtonProps = {
  className: string;
  text: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ className, text, onClick }) => {
  return (
    <button onClick={onClick} className={className} type="button">
      {text}
    </button>
  );
};

export default Button;
