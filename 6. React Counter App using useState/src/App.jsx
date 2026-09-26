import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="page">
      <main className="counter-card">
        <div className="counter-header">
          <h1>Counter</h1>
          <p>Manage the counter using React state</p>
        </div>

        <div className="count-display">
          {count}
        </div>

        <div className="counter-actions">
          <button onClick={decrement} className="secondary-btn">
            −
          </button>

          <button onClick={reset} className="reset-btn">
            Reset
          </button>

          <button onClick={increment} className="secondary-btn">
            +
          </button>
        </div>
      </main>

      <a
        href="http://127.0.0.1:5500/index.html"
        className="dashboard-link"
      >
        ← Back to Dashboard
      </a>
    </div>
  );
}

export default App;