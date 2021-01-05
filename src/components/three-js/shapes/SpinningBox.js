import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Box, MeshWobbleMaterial } from '@react-three/drei';

const SpinningBox = ({ position, args, color }) => {
	const mesh = useRef(null);
	useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
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