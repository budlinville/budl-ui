import React from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Vector3 } from 'three';

import sphereData from '../../data/spheres';
import Lighting from './Lighting';
import OrbitingSphere from './shapes/OrbitingSphere';
import SpinningBox from './shapes/SpinningBox';

const Scene = ({
	hoveredSphereId,
	setHoveredSphereId
}) => {
	const SCENE_SIZE = 50;	// actually twice this, because using both positive and negative coords
	const CAM_POS = [0, 15, -15];
	return (
		<Canvas
			shadowMap
			colorManagement
			style={{backgroundColor: 'transparent'}}
			camera={{position: CAM_POS, fov: 60}}
		>
			{/***** CONTROLS *****/}
			<OrbitControls
				target={new Vector3(0, 10, 0)}
				enablePan={false}
				minDistance={5}
				maxDistance={30}/>

			{/***** CAMERA *****/}

			{/***** LIGHTING *****/}
			<Lighting sceneSize={SCENE_SIZE}/>

			{/***** GEOMETRY *****/}
			{/*<Floor position={[0, 0, 0]} args={[SCENE_SIZE, SCENE_SIZE]} color='blue'/>*/}

			<SpinningBox
				position={[0, 10, 0]}
				args={[3, 3, 3]}
				color={ hoveredSphereId > -1
					? sphereData[hoveredSphereId].color
					: 'gray'
				 }
			/>
			{sphereData.map(sphere => {
				return (
					<OrbitingSphere
						key={sphere.id}
						position={sphere.position}
						center={sphere.center}
						axis={sphere.axis}
						args={sphere.args}
						color={sphere.color}
						delta = {hoveredSphereId > -1 ? 0 : 0.01}
						hoverCallback={() => setHoveredSphereId(sphere.id)}
						releaseCallback={() => setHoveredSphereId(-1)}
					/>
				);	
			})}
			<Stars/>
		</Canvas>
	);
};

export default Scene;