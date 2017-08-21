import React from 'react';

export const buildStyleFromProps = ({ color, bold, underlined }) => {
  return {
    color,
    minHeight: "200px",
    border: `1px solid ${color}`,
    textDecoration: underlined ? "underline" : "none",
    fontWeight: bold ? "bold" : "normal",
  };
};


const Message = ({ children, ...props}) => {
  return (
    <div style={buildStyleFromProps(props)}>
      {children}
    </div>
  );
};

export default Message;