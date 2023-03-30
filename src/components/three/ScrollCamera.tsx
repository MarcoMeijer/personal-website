"use client";
import { useFrame } from "@react-three/fiber";

export default function MouseCamera() {
  return useFrame(({ camera }) => {
    const t = document.body.getBoundingClientRect().top;
    camera.position.z = -t * 0.04;
  });
}
