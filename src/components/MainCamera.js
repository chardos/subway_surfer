import { PerspectiveCamera } from '@react-three/drei';

export function MainCamera({ rotation, position }) {
  return (
    <PerspectiveCamera
      makeDefault
      fov={50}
      position={position}
      rotation={rotation}
    />
  );
}
