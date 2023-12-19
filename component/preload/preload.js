"use client";

import { useLangContext } from "@/context/langcontexthook";
import styles from "./preload.module.css";
import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

export default function Preload() {
  const mountRef = useRef(null);
  const [progress, setProgress] = useState(0);
  let [loading, setLoading] = useState(true);

  let { isHungarian, setIsPreloader } = useLangContext();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x001220); // Black background color

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const edges = new THREE.EdgesGeometry(geometry);
    const line = new THREE.LineSegments(
      edges,
      new THREE.LineBasicMaterial({ color: 0x28ff00 })
    );

    line.rotation.x = Math.random();
    line.rotation.y = Math.random();

    scene.add(line);

    camera.position.z = 5;

    const animate = function() {
      requestAnimationFrame(animate);

      line.rotation.x += 0.01;
      line.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    animate();
    setLoading(false);

    const interval = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          clearInterval(interval);
        }
        return Math.min(oldProgress + 2, 100); // increment progress by 2
      });
    }, 40);

    // Clean up on unmount
    return () => {
      try {
        mountRef.current.removeChild(renderer.domElement);
      } catch (error) {}
    };
  }, []);

  if (progress === 100) {
    setTimeout(() => {
      setIsPreloader(false);
    }, 200);
  }

  if (loading) {
    return (
      <div className={styles.container}>
        <div ref={mountRef} className={styles.canvas} />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div ref={mountRef} className={styles.canvas} />
      <div className={styles.title}>
        <h1>
          {isHungarian ? "Betöltés..." : "Loading..."}
        </h1>
        <progress max="100" value={progress} />
      </div>
    </div>
  );
}
