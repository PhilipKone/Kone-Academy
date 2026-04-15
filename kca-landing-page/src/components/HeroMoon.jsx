import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const EggCrystal = ({ mouseRef }) => {
  const meshRef = useRef();
  
  // Custom Egg Geometry (Base bigger, Top tapered)
  const eggGeometry = useMemo(() => {
    const geo = new THREE.SphereGeometry(1, 128, 128);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
        let x = pos.getX(i);
        let y = pos.getY(i);
        let z = pos.getZ(i);
        
        // Taper factor: narrow at the top (y=1), wide at the base (y=-1)
        const taper = 1.0 - y * 0.25;
        pos.setXY(i, x * taper, y);
        pos.setZ(i, z * taper);
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  // Continuous smooth rotation + Snappy Mouse Follow
  useFrame((state, delta) => {
    if (meshRef.current) {
        // Base Rotation
        meshRef.current.rotation.y += delta * 0.15;

        // Active Mouse Following (Active Companion)
        // Sensitivity: 1.2 (Wider range), Smoothing: 0.15 (Snappier)
        const targetX = mouseRef.current.x * 1.2;
        const targetY = mouseRef.current.y * 1.2;
        
        meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.15);
        meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.15);

        // Active Tilt Interaction
        meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, -mouseRef.current.x * 0.3, 0.15);
        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, (mouseRef.current.y * 0.3) + (delta * 0.05), 0.15);
    }
  });

  return (
    <group ref={meshRef}>
      {/* The Transparent Egg Body - Tinted with deep background blue */}
      <mesh geometry={eggGeometry}>
        <meshBasicMaterial 
          color="#0a192f" 
          transparent 
          opacity={0.3} 
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* The Hollow 3D Wireframe Shell - Tinted with muted brand blue */}
      <mesh geometry={eggGeometry}>
        <meshBasicMaterial 
          color="#1e293b" 
          transparent 
          opacity={0.2} 
          wireframe={true}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Inner Glow Core - Neon Blue (Accent) */}
      <mesh geometry={eggGeometry} scale={[0.3, 0.3, 0.3]}>
        <meshBasicMaterial 
          color="#58a6ff" 
          transparent 
          opacity={0.4} 
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      
      {/* Real light impact on the scene */}
      <pointLight position={[0, 0, 0]} intensity={3} color="#58a6ff" />
    </group>
  );
};

const HeroMoon = () => {
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
        // Normalize coordinates to -1 / +1
        mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="hero-moon-canvas">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]} alpha>
        <ambientLight intensity={0.2} />
        
        {/* Weightless Floating Physics */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <EggCrystal mouseRef={mouseRef} />
        </Float>
      </Canvas>
      
      {/* Subtle atmospheric glow */}
      <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70%',
          height: '70%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(88, 166, 255, 0.1) 0%, transparent 80%)',
          filter: 'blur(60px)',
          zIndex: -1
      }} />
    </div>
  );
};

export default HeroMoon;
