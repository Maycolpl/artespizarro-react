import React, { ReactNode } from "react";

export type ButtonProps = {
  className: string;
  text: string;
  onClick?: () => void;
  children?: ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  text,
  onClick,
}) => {
  return (
    <button onClick={onClick} className={className} type="button">
      {children}
      {text}
    </button>
  );
};

export default Button;
