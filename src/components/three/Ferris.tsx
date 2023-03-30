"use client";
import { GroupProps, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Ferris(props: GroupProps) {
  const gltf = useLoader(GLTFLoader, "/ferris3d_v1.0.gltf");
  return (
    <group {...props}>
      <primitive object={gltf.scene} />
    </group>
  );
}
