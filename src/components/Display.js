import React from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, softShadows } from "drei";
import "./style/Display.css";

function Display(props, { orbit }) {
  softShadows();
  let orbitControls;
  if (orbit) {
    orbitControls = <OrbitControls />;
  } else {
    orbitControls = <></>;
  }
  return (
    <div className="Display">
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [5, 2, 10], fov: 40 }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 0, -20]} intensity={0.5} />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <pointLight position={[-10, -10, 0]} intensity={1.5} />
        <pointLight position={[10, 10, 0]} intensity={1.5} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
          <group>
            <mesh receiveShadow rotation={[0, 0, 0]} position={[0, 0, -3]}>
              <planeBufferGeometry attach="geometry" args={[100, 100]} />
              <shadowMaterial
                attach="material"
                opacity={0.3}
                // color="yellow"
              />
            </mesh>
          </group>
          {props.children}
          {orbitControls}
        </group>
      </Canvas>
    </div>
  );
}

export default Display;
