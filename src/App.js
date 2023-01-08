import { Canvas } from "@react-three/fiber";
import logo from "./logo.svg";
import "./App.css";
import Scene from "./components/Scene";

function App() {
  return (
    <div className="App">
      <div id="canvas-container" style={{ height: "100vh" }}>
        <Canvas>
          <Scene />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
