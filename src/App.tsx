import { useState } from "react";
import Todos from "./components/Todos";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <Todos todos={todos}/>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment} className="bg-sky-500">+</button>
      </div>
    </>
  );
}

export default App;
