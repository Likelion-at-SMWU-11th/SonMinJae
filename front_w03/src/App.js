import "./App.css";
import APage from "./APage";
import BPage from "./BPage";
import Hello from "./Hello";

function App() {
  const bool = false;

  return <div>{bool === true ? <APage /> : <BPage />}</div>;
}

export default App;
