import React from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';

import Floor from './shapes/Floor';
import OrbitingSphere from './shapes/OrbitingSphere';
import SpinningBox from './shapes/SpinningBox';

import sphereData from '../../data/spheres';

const Scene = ({
	hoveredSphereId,
	setHoveredSphereId
}) => {
	return (
		<Canvas
			shadowMap
			colorManagement
			style={{backgroundColor: 'transparent'}}
			camera={{position: [-5, 2, 10], fov: 60}}
		>
			{/***** CONTROLS *****/}
			<OrbitControls/>

			{/***** LIGHTING *****/}
			<ambientLight intensity={0.3}/>
			<directionalLight
				castShadow
				position={[0, 10, 0]}
				intensity={1.5}
				shadow-mapSize-width={1024}
				shadow-mapSize-height={1024}
				shadow-camera-far={50}
				shadow-camera-left={-10}
				shadow-camera-right={10}
				shadow-camera-top={10}
				shadow-camera-bottom={-10}
			/>
			<pointLight position={[-10, 0, -20]} intensity={0.5}/>
			<pointLight position={[0, -10, 0]} intensity={1.5}/>

			{/***** GEOMETRY *****/}
			<Floor position={[0, -3, 0]} args={[100, 100]} color='blue'/>

			<SpinningBox position={[0, 0, 0]} args={[3, 3, 3]} color='black'/>
			{sphereData.map((sphere, index) => {
				return (
					<OrbitingSphere
						id={index}
						position={sphere.position}
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