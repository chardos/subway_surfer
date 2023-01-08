export function Ground() {
  const width = 50;
  const height = 50;

  return (
    <mesh
      castShadow
      receiveShadow
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0, 0]}
    >
      <planeGeometry args={[width, height]} />
      <meshBasicMaterial color={'#ddd'} />
    </mesh>
  );
}
