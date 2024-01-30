import "./App.css";
import Hello from "./Hello";
function App() {
  const helloMsg = "Hello!";
  const howruMsg = "HOW ARE YOU!!!";
  return (
    <div>
      <Hello helloMsg={helloMsg} howruMsg={howruMsg} />
    </div>
  );
}

export default App;
