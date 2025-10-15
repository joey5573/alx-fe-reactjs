import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  const counterStyle = {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#e0f7fa",
    borderRadius: "8px",
    margin: "20px auto",
    width: "250px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  };

  const buttonStyle = {
    margin: "5px",
    padding: "10px 15px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  };

  const incStyle = { ...buttonStyle, backgroundColor: "#0077b6", color: "white" };
  const decStyle = { ...buttonStyle, backgroundColor: "#023e8a", color: "white" };

  return (
    <div style={counterStyle}>
      <h2>Counter App</h2>
      <p>Current Count: {count}</p>
      <button style={incStyle} onClick={handleIncrement}>Increment</button>
      <button style={decStyle} onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;
