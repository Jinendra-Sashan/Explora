import React, { useState } from 'react';
import './App.css';
import MyComponent from './components/Checklist';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}

export default App;