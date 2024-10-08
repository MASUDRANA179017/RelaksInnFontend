import React, { forwardRef } from 'react';

const Flex = ({ children, className, onClick, dref }) => {
  return (
    <div ref={dref} onClick={onClick} className={`flex ${className}`}>
      {children}
    </div>
  );
};

export default Flex;
