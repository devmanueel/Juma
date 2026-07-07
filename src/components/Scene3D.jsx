import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Icosahedron,
  Sparkles,
  Environment,
  OrbitControls,
  AdaptiveDpr,
} from "@react-three/drei";

const isMobile =
  typeof window !== "undefined" && window.innerWidth < 768;

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
      <Icosahedron args={[1.35, isMobile ? 8 : 12]}>
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

/**
 * Anillos orbitales con satélites luminosos (estilo "3D Collectible Hero"
 * de MotionSites): dos órbitas inclinadas girando a distinta velocidad,
 * cada una con un nodo que recorre el anillo.
 */
function OrbitRing({ radius, tilt, speed, ringColor, nodeColor, opacity }) {
  const groupRef = useRef();

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.z += delta * speed;
  });

  return (
    <group rotation={tilt}>
      <group ref={groupRef}>
        <mesh>
          <torusGeometry args={[radius, 0.012, 8, 96]} />
          <meshBasicMaterial color={ringColor} transparent opacity={opacity} />
        </mesh>
        {/* Satélite que recorre la órbita */}
        <mesh position={[radius, 0, 0]}>
          <sphereGeometry args={[0.085, 16, 16]} />
          <meshStandardMaterial
            color={nodeColor}
            emissive={nodeColor}
            emissiveIntensity={2.5}
            toneMapped={false}
          />
        </mesh>
      </group>
    </group>
  );
}

export default function Scene3D() {
  // Respetamos a quienes prefieren menos movimiento (accesibilidad).
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={isMobile ? [1, 1.5] : [1, 2]}
      gl={{ antialias: !isMobile, alpha: true }}
    >
      <Suspense fallback={null}>
        {/* Baja la resolución automáticamente si el equipo no da abasto */}
        <AdaptiveDpr pixelated />

        {/* Iluminación cálida + fría como el atardecer del logo */}
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={120} color="#fb923c" />
        <pointLight position={[-5, -3, -4]} intensity={90} color="#6366f1" />

        <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
          <TechCore />
          <OrbitRing
            radius={2.5}
            tilt={[Math.PI / 2.3, 0.2, 0]}
            speed={0.5}
            ringColor="#fb923c"
            nodeColor="#fb923c"
            opacity={0.4}
          />
          <OrbitRing
            radius={2.9}
            tilt={[-Math.PI / 2.7, -0.35, 0]}
            speed={-0.35}
            ringColor="#6366f1"
            nodeColor="#38bdf8"
            opacity={0.3}
          />
        </Float>

        {/* Partículas tipo "polvo estelar" jujeño */}
        <Sparkles
          count={isMobile ? 35 : 60}
          scale={9}
          size={3}
          speed={0.4}
          color="#fb923c"
          opacity={0.7}
        />

        <Environment preset="city" />

        {/* Interacción suave: el usuario puede arrastrar para rotar (desktop) */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={!reduceMotion}
          autoRotateSpeed={0.6}
          rotateSpeed={0.5}
        />
      </Suspense>
    </Canvas>
  );
}
