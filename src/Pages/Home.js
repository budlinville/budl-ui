import React, { useRef } from 'react';
import { Canvas, useFrame, useThree, extend } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import Floor from '../shapes/Floor';
import OrbitingSphere from '../shapes/OrbitingSphere';
import SpinningBox from '../shapes/SpinningBox';
import SpinningSphere from '../shapes/SpinningSphere';

// Extend will make OrbitControls available as a JSX element called orbitControls for us to use.
extend({ OrbitControls });

const CameraControls = () => {
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  const { camera, gl: { domElement } } = useThree();
  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return <orbitControls ref={controls} args={[camera, domElement]} />;
};

const Home = () => {
	return (
		<>
			<Canvas
				shadowMap
				colorManagement
				camera={{position: [-5, 2, 10], fov: 60}}>
				{/***** LIGHTING *****/}
				<CameraControls />
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
				<OrbitingSphere position={[0, 6, 0]} args={[1, 10, 10]} color='red'/>
				<OrbitingSphere position={[0, 0, 9]} axis={[0, 1, 0]} args={[1, 10, 10]} color='blue'/>
				<OrbitingSphere position={[7, 0, 0]} axis={[1, 1, 0]} args={[1, 10, 10]} color='yellow'/>
			</Canvas>
		</>
	);
};

export default Home;