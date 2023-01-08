import { useFrame } from "@react-three/fiber";
import { useState } from "react";

function Scene({}) {
  const [zPos, setZPos] = useState(-30);
  useFrame((state, delta, xrFrame) => {
    setZPos(zPos + 0.3);
    // This function runs at the native refresh rate inside of a shared render-loop
  });

  return (
    <>
      <mesh position={[0, 0, zPos]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"orange"} />
      </mesh>
    </>
  );
}

export default Scene;
