"use client";
import { GroupProps, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Laptop(props: GroupProps) {
  const gltf = useLoader(GLTFLoader, "/Lowpoly_Notebook_3.glb");
  return (
    <group {...props}>
      <primitive object={gltf.scene} />
    </group>
  );
}
