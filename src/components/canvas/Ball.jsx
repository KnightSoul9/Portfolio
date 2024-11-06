import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

// Component to render a ball with a decal
const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <>
      <ambientLight intensity={0.1} /> {/* Reduced intensity */}
      <directionalLight position={[0, 0, 0.05]} intensity={0.5} /> {/* Reduced intensity */}
      <mesh castShadow receiveShadow scale={2.5}> {/* Slightly reduced scale */}
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[Math.PI, 0, Math.PI / 3]} // Reduced rotation complexity
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </>
  );
};

// Main canvas component to display the ball
const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Disabled auto-rotation to stop motion */}
        {/* <OrbitControls enableZoom={false} enablePan={false} />  */}
        <Ball imgUrl={icon} /> 
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
