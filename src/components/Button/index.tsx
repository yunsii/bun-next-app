import React from "react";

export interface ButtonProps {
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { children } = props;
  return (
    <button type="button" className="inline-flex gap-2">
      <span>prefix</span>
      {children}
      <span>suffix</span>
    </button>
  );
};
