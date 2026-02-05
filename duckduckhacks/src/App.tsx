import "./App.css";
import FallingDucks from "./components/fallingDucks";

function App() {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        top: 0,
        left: 0,
        margin: 0,
        padding: 0,
      }}
    >
      <FallingDucks spawnInterval={200} duckScale={4} animationSpeed={100} fallSpeedX={2} fallSpeedY={3} />
    </div>
  );
}

export default App;
