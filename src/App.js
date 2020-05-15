import React from 'react';

function App() {
  const [counter, setCounter] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default App;
