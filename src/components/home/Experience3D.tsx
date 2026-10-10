'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Experience3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 100);
    camera.position.z = 7;
    camera.position.y = -0.5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Geometry: Silky Fabric Wave Plane
    const geometry = new THREE.PlaneGeometry(16, 10, 48, 32);
    
    // Custom Material with Subtle Gold and Sheen
    const material = new THREE.MeshStandardMaterial({
      color: 0x181512,
      roughness: 0.45,
      metalness: 0.15,
      wireframe: false,
      side: THREE.DoubleSide
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 4;
    mesh.position.y = -1.2;
    scene.add(mesh);

    // Floating Botanical Stardust Particles
    const particlesCount = 90;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    const opacities = new Float32Array(particlesCount);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 14;
      positions[i + 1] = (Math.random() - 0.5) * 8;
      positions[i + 2] = (Math.random() - 0.5) * 8;
      opacities[i / 3] = Math.random() * 0.6 + 0.2;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xC5A880,
      size: 0.05,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particlesMesh);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const warmLight = new THREE.DirectionalLight(0xE5CBA3, 1.8);
    warmLight.position.set(4, 5, 4);
    scene.add(warmLight);

    const coolRimLight = new THREE.DirectionalLight(0x8899aa, 0.9);
    coolRimLight.position.set(-5, -2, 2);
    scene.add(coolRimLight);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (e.clientX / innerWidth - 0.5) * 0.8;
      mouseY = (e.clientY / innerHeight - 0.5) * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();
    let animationFrameId: number;

    const positionAttribute = geometry.attributes.position;
    const initialPositions = positionAttribute.array.slice();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera follow
      targetX += (mouseX - targetX) * 0.03;
      targetY += (mouseY - targetY) * 0.03;
      camera.position.x = targetX * 1.5;
      camera.position.y = -0.5 - targetY * 1.0;
      camera.lookAt(0, 0, 0);

      // Fabric Wave Deformation
      const count = positionAttribute.count;
      for (let i = 0; i < count; i++) {
        const u = initialPositions[i * 3];
        const v = initialPositions[i * 3 + 1];

        const wave1 = Math.sin(u * 0.6 + elapsedTime * 0.9) * 0.35;
        const wave2 = Math.cos(v * 0.8 + elapsedTime * 0.7) * 0.25;
        const wave3 = Math.sin((u + v) * 0.4 + elapsedTime * 0.5) * 0.2;

        positionAttribute.setZ(i, wave1 + wave2 + wave3);
      }
      positionAttribute.needsUpdate = true;
      geometry.computeVertexNormals();

      // Slow particle rotation
      particlesMesh.rotation.y = elapsedTime * 0.02;
      particlesMesh.rotation.x = elapsedTime * 0.01;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-60"
      aria-hidden="true"
    />
  );
};
