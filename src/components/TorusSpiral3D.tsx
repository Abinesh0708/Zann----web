import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function SpiralTorus() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
      groupRef.current.rotation.x += delta * 0.1;
    }
  });

  const blades = useMemo(() => {
    const items: { curve: THREE.CatmullRomCurve3; index: number }[] = [];
    const numBlades = 32;

    for (let b = 0; b < numBlades; b++) {
      const points: THREE.Vector3[] = [];
      const bladeAngle = (b / numBlades) * Math.PI * 2;
      const segments = 60;

      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const theta = t * Math.PI * 2;

        // Torus path
        const R = 2.2; // Major radius
        const r = 0.9; // Minor radius

        // Spiral offset along the torus surface
        const spiralPhase = bladeAngle + t * Math.PI * 4;
        const bladeExtension = 0.6 * Math.sin(t * Math.PI);

        const x = (R + (r + bladeExtension) * Math.cos(spiralPhase)) * Math.cos(theta);
        const y = (R + (r + bladeExtension) * Math.cos(spiralPhase)) * Math.sin(theta);
        const z = (r + bladeExtension) * Math.sin(spiralPhase);

        points.push(new THREE.Vector3(x, y, z));
      }

      items.push({
        curve: new THREE.CatmullRomCurve3(points, true),
        index: b,
      });
    }

    return items;
  }, []);

  const accentColor = new THREE.Color('#e8530e');
  const darkColor = new THREE.Color('#1a0a05');

  return (
    <group ref={groupRef}>
      {blades.map(({ curve, index }) => {
        const t = index / blades.length;
        const color = new THREE.Color().lerpColors(darkColor, accentColor, t);

        return (
          <mesh key={index}>
            <tubeGeometry args={[curve, 80, 0.04, 8, true]} />
            <meshStandardMaterial
              color={color}
              roughness={0.3}
              metalness={0.7}
              emissive={accentColor}
              emissiveIntensity={t * 0.15}
            />
          </mesh>
        );
      })}

      {/* Inner core glow sphere */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#e8530e"
          emissive="#e8530e"
          emissiveIntensity={0.5}
          transparent
          opacity={0.15}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </group>
  );
}

export default function TorusSpiral3D() {
  return (
    <div className="w-full h-full" style={{ minHeight: 400 }}>
      <Canvas
        camera={{ position: [0, 2, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
        <directionalLight position={[-3, -2, -5]} intensity={0.4} color="#e8530e" />
        <pointLight position={[0, 0, 0]} intensity={0.8} color="#e8530e" distance={5} />

        <SpiralTorus />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
