"use client";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Ferris() {
  const gltf = useLoader(GLTFLoader, "/ferris3d_v1.0.gltf");
  return <primitive object={gltf.scene} />;
}
