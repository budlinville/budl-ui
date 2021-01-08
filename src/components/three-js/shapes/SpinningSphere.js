import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Sphere } from '@react-three/drei';

import { spin } from '../animations';

const SpinningSphere = ({ position, args, color }) => {
	const mesh = useRef();
	useFrame(() => spin(mesh));
	return(
		<Sphere castShadow ref={mesh} position={position} args={args}>
			<meshStandardMaterial attach='material' color={color} />
		</Sphere>
	);
};

export default SpinningSphere;