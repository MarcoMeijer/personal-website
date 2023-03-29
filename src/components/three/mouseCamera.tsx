"use client";
import { useFrame } from "@react-three/fiber";

export default function MouseCamera() {
  return useFrame(({ camera, mouse }) => {
    const targetX = -mouse.x * 0.12;
    const targetY = mouse.y * 0.12;

    camera.rotation.x += 0.05 * (targetY - camera.rotation.x);
    camera.rotation.y += 0.05 * (targetX - camera.rotation.y);
  });
}
