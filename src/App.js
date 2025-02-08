import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount(count + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>Advice</h1>
      <p>{advice}</p>
      <Message count={count} />
      <button onClick={getAdvice}>Add new advice</button>
    </div>
  );
}

function Message(props) {
  return (
    <p>
      You've read <strong>{props.count}</strong> advices.
    </p>
  );
}
