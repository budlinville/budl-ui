import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Sphere } from '@react-three/drei';

const SpinningSphere = ({ position, args, color }) => {
	const mesh = useRef(null);
	useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
	return(
		<Sphere castShadow ref={mesh} position={position} args={args}>
			<meshBasicMaterial attach="material" color={color} />
		</Sphere>
	);
};

export default SpinningSphere;