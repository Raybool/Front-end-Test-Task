import React from 'react';
import { useGLTF } from '@react-three/drei';

import { Vector3 } from '@react-three/fiber';
import { GLTF } from 'three-stdlib';
import * as THREE from 'three';

type ModelProps = {
  position?: Vector3;
  scale?: Vector3;
};

interface DogGLTF extends GLTF {
  nodes: {
    Dog_geo_Dog_mat_0: THREE.Mesh;
    Dog_geo_Dog_Tongue_mat_0: THREE.Mesh;
    Dog_geo_Dog_Teeth_mat_0: THREE.Mesh;
    Dog_geo_Dog_eyes_mat_0: THREE.Mesh;
  };
  materials: {
    Dog_mat: THREE.Material;
    Dog_Tongue_mat: THREE.Material;
    Dog_Teeth_mat: THREE.Material;
    Dog_eyes_mat: THREE.Material;
  };
}

export const Model: React.FC<ModelProps> = (props) => {
  const { nodes, materials } = useGLTF('/models/dog.glb') as DogGLTF;

  if (!nodes) {
    return <h1>Загрузка</h1>;
  }

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dog_geo_Dog_mat_0.geometry}
        material={materials.Dog_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dog_geo_Dog_Tongue_mat_0.geometry}
        material={materials.Dog_Tongue_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dog_geo_Dog_Teeth_mat_0.geometry}
        material={materials.Dog_Teeth_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dog_geo_Dog_eyes_mat_0.geometry}
        material={materials.Dog_eyes_mat}
      />
    </group>
  );
};

useGLTF.preload('/models/dog.glb');
