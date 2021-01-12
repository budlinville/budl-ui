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

const Scene = ({ navCallback }) => {
	const initCamPos = useSelector(state => state.scene.camera.position);
	const center = useSelector(state => state.scene.center.position);
	const hovering = useSelector(state => state.scene.hovering);

	// Needed to connect components inside canvas with redux's context
	const ContextBridge = useContextBridge(ReactReduxContext);

	return (
		<Canvas
			shadowMap
			colorManagement
			style={{backgroundColor: 'transparent'}}
			camera={{position: initCamPos, fov: 60}}
		>
			<ContextBridge>
				{/***** CONTROLS *****/}
				<OrbitControls
					target={new Vector3(...center)}
					enablePan={false}
					minDistance={5}
					maxDistance={30}/>

				{/***** LIGHTING *****/}
				<Lighting />

				{/***** GEOMETRY *****/}
				{/*<Floor position={[0, 0, 0]} args={[dimensions.x, dimensions.y]} color='blue'/>*/}

				<SpinningBox
					position={center}
					args={[3, 3, 3]}
					color={ hovering.length ? sphereData[hovering[0].id].color : 'gray' }
				/>
				{sphereData.map(sphere => {
					return (
						<OrbitingSphere
							id={sphere.id}	// used by child
							key={sphere.id}	// used by react
							position={sphere.position}
							axis={new Vector3(...sphere.axis)}
							args={sphere.args}
							color={sphere.color}
							delta = {0.01}
							nav={sphere.nav}
							navCallback={navCallback}
						/>
					);
				})}
				<Stars/>
			</ContextBridge>
		</Canvas>
	);
};

export default Scene;