import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = React.memo(({ isMobile }) => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.2} />
      <pointLight intensity={0.5} position={[0, 10, 0]} />
      <primitive
        object={scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[0, 0, 0]} // Maintain the original rotation
      />
    </mesh>
  );
});

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows={false}
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }} // Keep the original camera settings
      style={{ height: '100vh', display: 'block', margin: '0 auto' }} // Center Canvas
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Removed OrbitControls to remove 3D interaction */}
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload />
    </Canvas>
  );
};

export default ComputersCanvas;
