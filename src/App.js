import React from 'react';

function App() {
  const [counter, setCounter] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCounter(counter - 1)}>Remove</button>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>Add</button>
    </div>
  );
}

export default App;
