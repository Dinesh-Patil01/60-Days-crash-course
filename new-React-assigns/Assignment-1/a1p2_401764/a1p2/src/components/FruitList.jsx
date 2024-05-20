// src/components/FruitList.jsx

import React from "react";

function FruitList() {
  const fruits = ["Apple", "Banana", "Cherry"];
  return (
    <div>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruits}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;
