import React from 'react';
import { softShadows } from '@react-three/drei';

const Floor = ({
	position,
	args,
	color,
	opacity = 0.25,
	shadowsEnabled = true,
	softShadowsEnabled = false
}) => {
	// Soft shadows look great, but are computationally expensive
	if (shadowsEnabled && softShadowsEnabled) {
		softShadows();
	}

	return(
		<group>
			<mesh receiveShadow={shadowsEnabled} rotation={[-Math.PI/2, 0, 0]} position={position}>
				<planeBufferGeometry attach='geometry' args={args}/>
				<shadowMaterial attach='material' opacity={opacity} color={color}/>
			</mesh>
		</group>
	);
}

export default Floor;