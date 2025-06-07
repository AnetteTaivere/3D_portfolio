import React, {useRef} from 'react'
import {Float, useGLTF} from '@react-three/drei'
import * as THREE from "three";
import {useFrame} from "@react-three/fiber";

const ReactLogo = ({spin = false, ...props}) => {
    const {nodes} = useGLTF('/models/react.glb')
    const groupRef = useRef();
    useFrame(() => {
        if (spin && groupRef.current) {
            console.log('spinning...');
            groupRef.current.rotation.y += 0.01;
            groupRef.current.rotation.x += 0.005;
        }
    });

    return (
        <Float floatIntensity={1}>
            <group ref={groupRef} position={[8, 8, 0]} scale={0.4} {...props}>
                <mesh
                    geometry={nodes['React-Logo_Material002_0'].geometry}
                    material={new THREE.MeshStandardMaterial({ color: '#949fea' })}
                    position={[0, 0.079, 0.181]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.39, 0.39, 0.5]}
                />
            </group>
        </Float>
    )
}

useGLTF.preload('/models/react.glb')

export default ReactLogo