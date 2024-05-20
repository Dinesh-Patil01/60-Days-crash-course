import React, { useEffect, useRef } from 'react';

const FocusableInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>Focusable Input</h2>
      <input ref={inputRef} type="text" placeholder="Auto-focused input" />
    </div>
  );
};

export default FocusableInput;
