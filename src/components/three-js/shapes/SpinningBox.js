import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Box, MeshWobbleMaterial } from '@react-three/drei';

import { spin } from '../animations';

const SpinningBox = ({ position, args, color }) => {
	const mesh = useRef(null);
	useFrame(() => spin(mesh));
	return(
		<Box castShadow ref={mesh} position={position} args={args}>
			{/*<meshStandardMaterial attach="material" color={color} />*/}
			<MeshWobbleMaterial
    		attach="material"
    		factor={.5} // Strength : 0 - 1
				speed={2.5} // Speed (default=1)
				color={color}
  		/>
		</Box>
	);
};

export default SpinningBox;