"use client";

import { Canvas } from "@react-three/fiber";
import React from "react";
import Floor from "./three/Floor";

export interface MyCanvasProps {
  children?: React.ReactNode;
  camera: {
    position: [number, number, number];
    rotation: [number, number, number];
  };
}

export default function MyCanvas({
  children,
  camera,
}: MyCanvasProps): JSX.Element {
  return (
    <div className="fixed w-screen h-screen top-0 left-0">
      <Canvas shadows camera={camera}>
        <Floor />
        <ambientLight color="white" intensity={0.7} />
        <directionalLight color="white" position={[5, 30, 0]} intensity={0.9} />
        {children}
      </Canvas>
    </div>
  );
}
