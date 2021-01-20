import React from 'react';

const Lighting = () => {
	// Use dimensions only if adding shadow props back
	// const dimensions = useSelector(state => state.scene.dimensions);
	return (
		<group>
			<ambientLight intensity={0.75}/>
			<directionalLight
				position={[0, 2, 0]}
				intensity={0.75}
			/>
			<directionalLight
				position={[0, -2, 0]}
				intensity={0.75}
			/>
		</group>
	);
}

export default Lighting;