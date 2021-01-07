import React from 'react';
import { useSelector, ReactReduxContext } from 'react-redux';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Vector3 } from 'three';
import { useContextBridge } from '@react-three/drei';

import sphereData from '../../data/spheres';
import Lighting from './Lighting';
import OrbitingSphere from './shapes/OrbitingSphere';
import SpinningBox from './shapes/SpinningBox';

const Scene = ({
	hoveredSphereId,
	setHoveredSphereId
}) => {
	const SCENE_SIZE = 50;	// actually twice this, because using both positive and negative coords

	const camPos = useSelector(state => state.scene.camera.position);
	const center = useSelector(state => state.scene.center.position);

	// Needed to connect components inside canvas with redux's context
	const ContextBridge = useContextBridge(ReactReduxContext);

	return (
		<Canvas
			shadowMap
			colorManagement
			style={{backgroundColor: 'transparent'}}
			camera={{position: camPos, fov: 60}}
		>
			<ContextBridge>
				{/***** CONTROLS *****/}
				<OrbitControls
					target={new Vector3(...center)}
					enablePan={false}
					minDistance={5}
					maxDistance={30}/>

				{/***** LIGHTING *****/}
				<Lighting sceneSize={SCENE_SIZE}/>

				{/***** GEOMETRY *****/}
				{/*<Floor position={[0, 0, 0]} args={[SCENE_SIZE, SCENE_SIZE]} color='blue'/>*/}

				<SpinningBox
					position={center}
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
			</ContextBridge>
		</Canvas>
	);
};

export default Scene;