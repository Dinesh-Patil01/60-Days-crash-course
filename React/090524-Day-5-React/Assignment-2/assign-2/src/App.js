import React, { useEffect } from 'react';

// Component to subscribe to a timer
const TimerComponent = () => {
  useEffect(() => {
    const timerId = setInterval(() => {
      console.log('Timer tick');
    }, 1000); // Timer interval: 1 second

    return () => {
      clearInterval(timerId); // Cleanup function to clear the timer
    };
  }, []); // Empty dependency array to run effect only once

  return <div>Timer is running. Check console for tick.</div>;
};

// Component to subscribe to a scroll event
const ScrollEventHandler = () => {
  useEffect(() => {
    const handleScroll = () => {
      console.log('Scroll event detected');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup function to remove event listener
    };
  }, []); // Empty dependency array to run effect only once

  return <div>Scroll to see events logged in console.</div>;
};

// App component to render both components
const App = () => {
  return (
    <div>
      <TimerComponent />
      <ScrollEventHandler />
    </div>
  );
};

export default App;
