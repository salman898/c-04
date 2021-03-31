// import React, {useState} from 'react';
// import {Message } from './message.js'
// import './App.css';

// function App() {
//   let [count, setCount] = useState(1)
//   let [isMorning, setMorning] = useState(true)
//   return (
//     <div className={'box ${isMorning ? 'dayLight' : ''}'}>
//       <h1>Have A Good {isMorning ? 'Morning' : 'Night'}</h1>
//       <Message counter={count} />
//       <br />
//       <button onClick={
//         ()=> setCount(count++)
//       }>
//         Update Counter</button>

//       <button onClick={()=>setMorning(!isMorning)}> Update Day </button>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { Message } from './message.js'
import './App.css';

export default function App() {

  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(false)

  return (
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>

      <h1>Good {isMorning ? 'Morning' : 'Night'}</h1>

      <Message counter={count} />
      <br />

      <button onClick={() => setCount(count + 1)}>
        Update Counter
      </button>

      <button onClick={() => setMorning(!isMorning)}> 
        Update Day
      </button>

    </div>
  );
}
