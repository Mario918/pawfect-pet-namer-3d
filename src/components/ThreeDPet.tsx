
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Preload } from '@react-three/drei';
import * as THREE from 'three';

const PetModel: React.FC<{ gender: 'male' | 'female' }> = ({ gender }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  // Simple animation for the pet
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.05 + 0.1;
    }
  });

  // Since we don't have actual 3D models uploaded, we'll create simple shapes
  // In a real app, you'd use useGLTF to load 3D models
  return (
    <group position={[0, 0, 0]}>
      {/* Body */}
      <mesh
        ref={meshRef}
        position={[0, 0.1, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
      >
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial 
          color={gender === 'male' ? '#D3E4FD' : '#FFDEE2'} 
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>

      {/* Ears */}
      <group position={[0, 0.4, 0]}>
        <mesh position={[-0.25, 0.3, 0]}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshStandardMaterial 
            color={gender === 'male' ? '#A3C4FD' : '#FFB2B8'} 
            roughness={0.8}
          />
        </mesh>
        <mesh position={[0.25, 0.3, 0]}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshStandardMaterial 
            color={gender === 'male' ? '#A3C4FD' : '#FFB2B8'} 
            roughness={0.8}
          />
        </mesh>
      </group>

      {/* Eyes */}
      <group position={[0, 0.3, 0.4]}>
        <mesh position={[-0.15, 0, 0]}>
          <sphereGeometry args={[0.08, 32, 32]} />
          <meshStandardMaterial color="#111" roughness={0.1} />
        </mesh>
        <mesh position={[0.15, 0, 0]}>
          <sphereGeometry args={[0.08, 32, 32]} />
          <meshStandardMaterial color="#111" roughness={0.1} />
        </mesh>
      </group>

      {/* Nose */}
      <mesh position={[0, 0.2, 0.5]}>
        <sphereGeometry args={[0.07, 32, 32]} />
        <meshStandardMaterial 
          color={gender === 'male' ? '#333' : '#FFB2B8'} 
          roughness={0.5}
        />
      </mesh>

      {/* Tail */}
      <mesh position={[0, -0.2, -0.5]} rotation={[0, 0, Math.PI / 4]}>
        <cylinderGeometry args={[0.05, 0.1, 0.4, 32]} />
        <meshStandardMaterial 
          color={gender === 'male' ? '#D3E4FD' : '#FFDEE2'} 
          roughness={0.7}
        />
      </mesh>
    </group>
  );
};

const ThreeDPet: React.FC<{ gender: 'male' | 'female' }> = ({ gender }) => {
  return (
    <div className="w-full h-60 md:h-80">
      <Canvas
        shadows
        camera={{ position: [0, 1, 3], fov: 50 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.6} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={0.8} 
          castShadow 
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <PetModel gender={gender} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 4}
        />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ThreeDPet;
