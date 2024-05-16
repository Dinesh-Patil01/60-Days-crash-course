
import './App.css';
import React, { useState, useEffect } from 'react';

// Component to fetch data from a public API
const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      // Cleanup function
      // You can perform cleanup here if necessary
    };
  }, []); // Empty dependency array to run effect only once

  return (
    <div>
      <h2>Data from API:</h2>
      <ul>
        {data && data.map(item => <li key={item.id}>{item.title}</li>)}
      </ul>
    </div>
  );
};

// Component to subscribe to mouse movement event
const MouseTracker = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      console.log('Mouse coordinates:', { x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array to run effect only once

  return <div>Move your mouse to see coordinates in console.</div>;
};

// Component to update document title
const DocumentTitleUpdater = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;

    return () => {
      // Cleanup function
      // You can perform cleanup here if necessary
    };
  }, [count]); // Dependency array with count, so effect runs when count changes

  return (
    <div>
      <h2>Update Document Title:</h2>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment Count</button>
    </div>
  );
};

// App component to render all components
const App = () => {
  return (
    <div>
      <DataFetcher />
      <MouseTracker />
      <DocumentTitleUpdater />
    </div>
  );
};

export default App;
