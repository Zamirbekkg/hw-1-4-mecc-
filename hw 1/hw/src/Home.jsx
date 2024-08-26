import React from 'react';
import { useState } from 'react';
const Home = () => {
    const [num, setnum] = useState(0)
    return (
      <div>
      <h1>{num}</h1>
      <button onClick = {() => {
        if(num < 100) setnum(num + 5)
        console.log(num);
      }}>+5</button>
      
      <button onClick={() => {
        if(num > 0) setnum(num - 5)
          console.log(num);
      }}>-5</button>

      <button onClick={() => {
        if (num > 0) setnum(num => 0)
          console.log(num);
      }}>Reset</button>
    </div>
    );
}

export default Home;
