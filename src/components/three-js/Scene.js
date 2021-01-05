import React from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';

import Floor from './shapes/Floor';
import OrbitingSphere from './shapes/OrbitingSphere';
import SpinningBox from './shapes/SpinningBox';

import sphereData from '../../data/spheres';
import { Vector3 } from 'three';

const Scene = ({
	hoveredSphereId,
	setHoveredSphereId
}) => {
	const SCENE_SIZE = 50;		// actually twice this, because using both positive and negative coords
	return (
		<Canvas
			shadowMap
			colorManagement
			style={{backgroundColor: 'transparent'}}
			camera={{position: [0, 15, -15], fov: 60}}
		>
			{/***** CONTROLS *****/}
			<OrbitControls
				target={new Vector3(0, 10, 0)}
				minDistance={5}
				maxDistance={30}/>

			{/***** CAMERA *****/}

			{/***** LIGHTING *****/}
			<ambientLight intensity={0.4}/>
			<directionalLight
				castShadow
				position={[0, 30, 0]}
				intensity={1}
				shadow-mapSize-width={1024}
				shadow-mapSize-height={1024}
				shadow-camera-far={SCENE_SIZE}
				shadow-camera-left={-1 * SCENE_SIZE}
				shadow-camera-right={SCENE_SIZE}
				shadow-camera-top={SCENE_SIZE}
				shadow-camera-bottom={-1 * SCENE_SIZE}
			/>

			{/***** GEOMETRY *****/}
			<Floor position={[0, 0, 0]} args={[SCENE_SIZE, SCENE_SIZE]} color='blue'/>

			<SpinningBox position={[0, 10, 0]} args={[3, 3, 3]} color='gray'/>
			{sphereData.map((sphere, index) => {
				return (
					<OrbitingSphere
						key={index}
						position={sphere.position}
						center={sphere.center}
						axis={sphere.axis}
						args={sphere.args}
						color={hoveredSphereId === index ? 'white' : sphere.color}
						delta = {hoveredSphereId > -1 ? 0 : 0.01}
						hoverCallback={() => setHoveredSphereId(index)}
						releaseCallback={() => setHoveredSphereId(-1)}
					/>
				);	
			})}
		</Canvas>
	);
};

export default Scene;