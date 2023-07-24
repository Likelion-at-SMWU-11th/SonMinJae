import AnimationList from "./AnimationList";
import "./App.css";
import Counter from "./Counter";
import Hello from "./Hello";
import MovieList from "./MovieList";
import Recommend from "./Recommend";

function App() {
  return (
    <div>
      <Hello name="저는 손민재입니다." color="blue" />
      <Counter />
      <MovieList />
      <AnimationList />
      <Recommend genre="애니메이션" />
    </div>
  );
}

export default App;
