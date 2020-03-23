import React from 'react';
import { Button } from 'antd';

const ButtonSize = (props) => {
  const {
    id,
    onClick,
    size,
    type,
    style,
    children,
  } = props;

  return (
    <Button
      id={id}
      onClick={onClick}
      size={size}
      type={type}
      style={style}
    >
      {children}
    </Button>
  );
};

export { ButtonSize };
