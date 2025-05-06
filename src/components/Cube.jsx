import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import { Float, useGLTF, useTexture } from '@react-three/drei';
import * as THREE from "three";

const Cube = ({ ...props }) => {
    const cubeRef = useRef();
    const [hovered, setHovered] = useState(false);
    const { nodes } = useGLTF('models/cube.glb');
    const texture = useTexture('textures/cube.png', (t) => {
        t.minFilter = THREE.LinearMipMapLinearFilter;
        t.generateMipmaps = true;
    });

    useGSAP(() => {
        gsap
            .timeline({
                repeat: -1,
                repeatDelay: 0.5,
            })
            .to(cubeRef.current.rotation, {
                y: hovered ? '+=2' : `+=${Math.PI * 2}`,
                x: hovered ? '+=2' : `-=${Math.PI * 2}`,
                duration: 2.5,
                stagger: {
                    each: 0.15,
                },
            });
    });

    return (
        <Float floatIntensity={2}>
            <group position={[9, -4, 0]} rotation={[2.6, 0.8, -1.8]} scale={0.74} dispose={null} {...props}>
                <mesh
                    ref={cubeRef}
                    castShadow="true"
                    receiveShadow="true"
                    geometry={nodes.Cube.geometry}
                    material={new THREE.MeshStandardMaterial({ color: '#f3d5e5' })}
                    onPointerEnter={() => setHovered(true)}>
                    <meshMatcapMaterial matcap={texture} toneMapped={false} />
                </mesh>
            </group>
        </Float>
    );
};

useGLTF.preload('models/cube.glb');

export default Cube;