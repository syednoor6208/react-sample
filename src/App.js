import "./styles.css";
//Named import
import { Counter } from "./using-states";
//Default import
import ClassCounter from "./using-class";
import { CreateUseEffect } from "./using-stete-hook-effect";
export default function App() {
  return (
    <div className="App">
      <Counter />
      <ClassCounter />
      <CreateUseEffect />
    </div>
  );
}
