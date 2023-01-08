import { useFrame } from '@react-three/fiber';
import { useState } from 'react';
import { ORBIT_CAMERA } from '../constants';
import { Ground } from './Ground';
import { MainCamera } from './MainCamera';
import { OrbitCamera } from './OrbitCamera';
import { Player } from './Player';

function Scene({}) {
  const [zPos, setZPos] = useState(-30);
  useFrame((state, delta, xrFrame) => {
    setZPos(zPos + 0.3);
    // This function runs at the native refresh rate inside of a shared render-loop
  });

  return (
    <>
      {ORBIT_CAMERA && <OrbitCamera />}
      <MainCamera position={[0, 10, 50]} />
      <Player />
      <mesh position={[0, 0, zPos]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'orange'} />
      </mesh>
      <Ground />
    </>
  );
}

export default Scene;
