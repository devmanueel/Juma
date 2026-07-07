import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

/**
 * Red de partículas conectadas (estilo "Network Hero" de MotionSites).
 * Nodos naranjas que flotan y se unen con líneas cuando están cerca,
 * como los circuitos del logo de Juma. Solo se monta en desktop
 * para no gastar batería/GPU en móviles.
 */
const COUNT = 55;
const LINK_DIST = 2.4;
const LINK_DIST_SQ = LINK_DIST * LINK_DIST;
const BOUNDS = { x: 9, y: 5, z: 2.5 };

function Network() {
  const pointsRef = useRef();
  const linesRef = useRef();

  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const velocities = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2 * BOUNDS.x;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2 * BOUNDS.y;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2 * BOUNDS.z;
      velocities[i * 3] = (Math.random() - 0.5) * 0.35;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.35;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.15;
    }
    return { positions, velocities };
  }, []);

  // Buffer para las líneas: peor caso, todos los pares conectados.
  const linePositions = useMemo(
    () => new Float32Array(((COUNT * (COUNT - 1)) / 2) * 6),
    []
  );

  useFrame((_, delta) => {
    const dt = Math.min(delta, 0.05); // evita saltos al volver de otra pestaña
    const pos = pointsRef.current.geometry.attributes.position.array;

    for (let i = 0; i < COUNT; i++) {
      const ix = i * 3;
      pos[ix] += velocities[ix] * dt;
      pos[ix + 1] += velocities[ix + 1] * dt;
      pos[ix + 2] += velocities[ix + 2] * dt;

      if (Math.abs(pos[ix]) > BOUNDS.x) velocities[ix] *= -1;
      if (Math.abs(pos[ix + 1]) > BOUNDS.y) velocities[ix + 1] *= -1;
      if (Math.abs(pos[ix + 2]) > BOUNDS.z) velocities[ix + 2] *= -1;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Recalcula qué nodos están lo bastante cerca para unirse con una línea.
    const lpos = linesRef.current.geometry.attributes.position.array;
    let seg = 0;
    for (let i = 0; i < COUNT; i++) {
      for (let j = i + 1; j < COUNT; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        if (dx * dx + dy * dy + dz * dz < LINK_DIST_SQ) {
          lpos[seg * 6] = pos[i * 3];
          lpos[seg * 6 + 1] = pos[i * 3 + 1];
          lpos[seg * 6 + 2] = pos[i * 3 + 2];
          lpos[seg * 6 + 3] = pos[j * 3];
          lpos[seg * 6 + 4] = pos[j * 3 + 1];
          lpos[seg * 6 + 5] = pos[j * 3 + 2];
          seg++;
        }
      }
    }
    linesRef.current.geometry.setDrawRange(0, seg * 2);
    linesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <>
      <points ref={pointsRef} frustumCulled={false}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={COUNT}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#fb923c"
          size={0.09}
          sizeAttenuation
          transparent
          opacity={0.9}
          depthWrite={false}
        />
      </points>

      <lineSegments ref={linesRef} frustumCulled={false}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#6366f1"
          transparent
          opacity={0.22}
          depthWrite={false}
        />
      </lineSegments>
    </>
  );
}

export default function NetworkBackground() {
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) return null;

  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
    >
      <Network />
    </Canvas>
  );
}
