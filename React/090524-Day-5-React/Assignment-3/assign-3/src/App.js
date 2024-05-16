import {useState} from 'react';

function App() {
  const [count,setCount] = useState(0)
  function handleIncChange(){
    setCount(count+1)
  }
  function handleDecChange(){
    setCount(count-1)
  }
  return (
    <div>
      <h1>counter:{count}</h1>
      <button onClick={handleIncChange}>Increment</button>
      <button disabled={count===0} onClick={handleDecChange}>Decrement</button>
    </div>
  );
}

export default App;