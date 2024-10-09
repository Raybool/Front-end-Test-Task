"use client";

import React, { useRef } from "react";

import { Canvas } from "@react-three/fiber";

import { Physics } from "@react-three/rapier";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import { Environment, Lightformer, OrbitControls } from "@react-three/drei";
import { Model } from "../Model";

export const ModelView: React.FC = () => {
  return (
    <Canvas
      style={{ height: 400, borderRadius: 20 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false }}
      camera={{ position: [0, 4, 15], fov: 20.5, near: 1, far: 20 }}
      shadows
    >
      <OrbitControls autoRotate />
      <color attach="background" args={["#E9EDDD"]} />
      <ambientLight intensity={0.4} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <Physics gravity={[0, 0, 0]}>
        <Model position={[0, -1, 0]} scale={0.5} />
      </Physics>

      <EffectComposer multisampling={8}>
        <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
      </EffectComposer>
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer
            form="circle"
            intensity={4}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={8}
          />
        </group>
      </Environment>
    </Canvas>
  );
};
