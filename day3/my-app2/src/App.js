import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  
    const [count,setCount]=React.useState(0);

  return (
    <div className="App">
          <h1>  count {count}</h1>
         <button disabled={count>=10} onClick={()=>setCount(count+1)} >Add</button>
         <button disabled={count<=0} onClick={()=>setCount(count-1)}>Reduce</button>
         <button disabled={count==0} onClick={()=>setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
