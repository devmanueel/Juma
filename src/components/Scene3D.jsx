import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Icosahedron,
  Sparkles,
  Environment,
  OrbitControls,
} from "@react-three/drei";

/**
 * Núcleo abstracto y tecnológico: un icosaedro deformado que late suavemente,
 * envuelto por una esfera de alambre (wireframe) que representa los circuitos
 * del logo de Juma. Gira lento de forma automática.
 */
function TechCore() {
  const groupRef = useRef();
  const wireRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.25;
      groupRef.current.rotation.x += delta * 0.08;
    }
    if (wireRef.current) {
      // La jaula de circuitos gira en sentido contrario
      wireRef.current.rotation.y -= delta * 0.15;
      wireRef.current.rotation.z += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Núcleo deformable con degradado naranja de la marca */}
      <Icosahedron args={[1.35, 12]}>
        <MeshDistortMaterial
          color="#f97316"
          emissive="#ef4444"
          emissiveIntensity={0.35}
          roughness={0.15}
          metalness={0.85}
          distort={0.4}
          speed={1.8}
        />
      </Icosahedron>

      {/* Jaula de circuitos (wireframe cian) */}
      <Icosahedron ref={wireRef} args={[2, 1]}>
        <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.25} />
      </Icosahedron>
    </group>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        {/* Iluminación cálida + fría como el atardecer del logo */}
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={120} color="#fb923c" />
        <pointLight position={[-5, -3, -4]} intensity={90} color="#6366f1" />

        <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
          <TechCore />
        </Float>

        {/* Partículas tipo "polvo estelar" jujeño */}
        <Sparkles
          count={60}
          scale={9}
          size={3}
          speed={0.4}
          color="#fb923c"
          opacity={0.7}
        />

        <Environment preset="city" />

        {/* Interacción suave: el usuario puede arrastrar para rotar */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.6}
          rotateSpeed={0.5}
        />
      </Suspense>
    </Canvas>
  );
}
