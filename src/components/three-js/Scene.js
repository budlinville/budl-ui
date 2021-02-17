import React from 'react';
import { useSelector, ReactReduxContext } from 'react-redux';
import { Canvas } from 'react-three-fiber';
import { TrackballControls, Stars } from '@react-three/drei';
import { Vector3 } from 'three';
import { useContextBridge } from '@react-three/drei';
import { useTheme } from '@material-ui/styles';

import sphereData from '../../data/spheres';
import Lighting from './Lighting';
import OrbitingSphere from './shapes/OrbitingSphere';
import SpinningBox from './shapes/SpinningBox';

const Scene = ({ navCallback }) => {
	const theme = useTheme();
	const initCamPos = useSelector(state => state.scene.camera.position);
	const center = useSelector(state => state.scene.center.position);
	const hovering = useSelector(state => state.scene.hovering);
	const headerExpanded = useSelector(state => state.app.headerExpanded);

	// Needed to connect components inside canvas with redux's context
	const ContextBridge = useContextBridge(ReactReduxContext);

	const boxColor = hovering.length ? sphereData[hovering[0].id].color2 : theme.palette.secondary.main;
	const starFactor = headerExpanded ? 6 : 4;
	const starRadius = headerExpanded ? 150 : 300;
	const starCount = headerExpanded ? 2000 : 3000;

	return (
		<Canvas
			shadowMap
			colorManagement
			style={{backgroundColor: 'transparent'}}
			camera={{position: initCamPos, fov: 60}}
		>
			<ContextBridge>
				{/***** CONTROLS *****/}
				<TrackballControls
					target={new Vector3(...center)}
					noPan={true}
					minDistance={5}
					maxDistance={35}
					rotateSpeed={6}/>

				{/***** LIGHTING *****/}
				<Lighting />

				{/***** GEOMETRY *****/}
				{/*<Floor position={[0, 0, 0]} args={[dimensions.x, dimensions.y]} color='blue'/>*/}

				<SpinningBox
					position={center}
					args={[3, 3, 3]}
					color={ boxColor }
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
				<Stars
					fade
					count={starCount}
					radius={starRadius}
					factor={starFactor}
				/>
			</ContextBridge>
		</Canvas>
	);
};

export default Scene;