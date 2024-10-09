import { Vector3 } from "@react-three/fiber";
import { GLTF } from "three-stdlib";
import * as THREE from "three";

export type ModelProps = {
  position?: Vector3;
  scale?: Vector3;
};

export interface DogGLTF extends GLTF {
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
