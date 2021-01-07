import React from 'react';

const Lighting = sceneSize => {
	return (
		<group>
			<ambientLight intensity={0.4}/>
			<directionalLight
				castShadow
				position={[0, 30, 0]}
				intensity={1}
				shadow-mapSize-width={1024}
				shadow-mapSize-height={1024}
				shadow-camera-far={sceneSize}
				shadow-camera-left={-1 * sceneSize}
				shadow-camera-right={sceneSize}
				shadow-camera-top={sceneSize}
				shadow-camera-bottom={-1 * sceneSize}
			/>
			</group>
	);
}

export default Lighting;