"use client";

import { MeshProps, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

export default function TorusKnot(props: MeshProps) {
  const myMesh = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.5;
    if (myMesh.current !== null) {
      myMesh.current.rotation.x = t * 0.4;
      myMesh.current.rotation.y = t * 0.7;
      myMesh.current.rotation.z = t;
    }
  });

  return (
    <mesh {...props} ref={myMesh}>
      <torusKnotGeometry args={[1, 0.2, 64, 8]} />
      <meshStandardMaterial color="#9843c9" />
    </mesh>
  );
}
