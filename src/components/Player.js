export function Player() {
  const HEIGHT = 2;
  return (
    <mesh position={[0, HEIGHT / 2, 20]}>
      <boxGeometry args={[1, HEIGHT, 1]} />
      <meshStandardMaterial color={'#FF0000'} />
    </mesh>
  );
}
