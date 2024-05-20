import React, { useRef } from 'react';

const DomInteraction = () => {
  const divRef = useRef(null);

  const handleClick = () => {
    if (divRef.current) {
      divRef.current.style.backgroundColor = divRef.current.style.backgroundColor === 'yellow' ? 'lightblue' : 'yellow';
    }
  };

  return (
    <div>
      <h2>DOM Interaction</h2>
      <div
        ref={divRef}
        onClick={handleClick}
        style={{ width: '200px', height: '200px', backgroundColor: 'lightblue', cursor: 'pointer' }}
      >
        Click me to change color
      </div>
    </div>
  );
};

export default DomInteraction;
