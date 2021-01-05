import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Box } from '@react-three/drei';

const SpinningBox = ({ position, args, color }) => {
	const mesh = useRef(null);
	useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
	return(
		<Box castShadow ref={mesh} position={position} args={args}>
			<meshBasicMaterial attach="material" color={color} />
		</Box>
	);
};

export default SpinningBox;