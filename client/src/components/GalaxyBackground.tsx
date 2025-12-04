import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function GalaxyBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const starsRef = useRef<THREE.Points | null>(null);
  const nebulaRef = useRef<THREE.Points | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const starCount = 3000;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      starPositions[i3] = (Math.random() - 0.5) * 50;
      starPositions[i3 + 1] = (Math.random() - 0.5) * 50;
      starPositions[i3 + 2] = (Math.random() - 0.5) * 50;

      const colorChoice = Math.random();
      if (colorChoice < 0.3) {
        starColors[i3] = 0.9;
        starColors[i3 + 1] = 0.7;
        starColors[i3 + 2] = 1.0;
      } else if (colorChoice < 0.6) {
        starColors[i3] = 0.6;
        starColors[i3 + 1] = 0.8;
        starColors[i3 + 2] = 1.0;
      } else {
        starColors[i3] = 1.0;
        starColors[i3 + 1] = 1.0;
        starColors[i3 + 2] = 1.0;
      }
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);
    starsRef.current = stars;

    const nebulaCount = 500;
    const nebulaGeometry = new THREE.BufferGeometry();
    const nebulaPositions = new Float32Array(nebulaCount * 3);
    const nebulaColors = new Float32Array(nebulaCount * 3);

    for (let i = 0; i < nebulaCount; i++) {
      const i3 = i * 3;
      const radius = 3 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      nebulaPositions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      nebulaPositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta) - 2;
      nebulaPositions[i3 + 2] = radius * Math.cos(phi) - 5;

      const purpleIntensity = Math.random();
      nebulaColors[i3] = 0.5 + purpleIntensity * 0.3;
      nebulaColors[i3 + 1] = 0.1 + purpleIntensity * 0.2;
      nebulaColors[i3 + 2] = 0.7 + purpleIntensity * 0.3;
    }

    nebulaGeometry.setAttribute('position', new THREE.BufferAttribute(nebulaPositions, 3));
    nebulaGeometry.setAttribute('color', new THREE.BufferAttribute(nebulaColors, 3));

    const nebulaMaterial = new THREE.PointsMaterial({
      size: 0.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.3,
      sizeAttenuation: true,
    });

    const nebula = new THREE.Points(nebulaGeometry, nebulaMaterial);
    scene.add(nebula);
    nebulaRef.current = nebula;

    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (starsRef.current) {
        starsRef.current.rotation.y += 0.0002;
        starsRef.current.rotation.x += 0.0001;
      }

      if (nebulaRef.current) {
        nebulaRef.current.rotation.y += 0.0003;
        nebulaRef.current.rotation.z += 0.0001;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10"
      style={{ background: 'linear-gradient(to bottom, hsl(250, 30%, 5%), hsl(260, 40%, 8%), hsl(270, 35%, 6%))' }}
      data-testid="galaxy-background"
    />
  );
}
