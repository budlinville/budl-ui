import React from 'react';
import { useSelector } from 'react-redux';

const Lighting = () => {
	const dimensions = useSelector(state => state.scene.dimensions);
	return (
		<group>
			<ambientLight intensity={0.4}/>
			<directionalLight
				castShadow
				position={[0, 2, 0]}
				intensity={2}
				shadow-mapSize-width={1024}
				shadow-mapSize-height={1024}
				shadow-camera-far={dimensions.z}	// TODO: far and near could be backwards
				shadow-camera-near={-1 * dimensions.z}
				shadow-camera-left={-1 * dimensions.x}
				shadow-camera-right={dimensions.x}
				shadow-camera-top={dimensions.y}
				shadow-camera-bottom={-1 * dimensions.y}
			/>
		</group>
	);
}

export default Lighting;