import React, { useRef, useState } from 'react';
import { Vector3 } from 'three';
import { useFrame } from 'react-three-fiber';
import { Sphere } from '@react-three/drei';

const OrbitingSphere = ({
	position,
	args,
	color,
	axis = [0, 0, 1],
	center = [0, 0, 0],
	delta = 0.01,
	hoverCallback = () => ({}),
	releaseCallback = () => ({})
}) => {
	const [hovering, setHovering] = useState(false);

	const onHover = () => {
		setHovering(true);
		hoverCallback();
	};

	const onRelease = () => {
		setHovering(false);
		releaseCallback();
	};

	const orbit = () => {
		mesh.current.position.sub(centerVect);
		mesh.current.position.applyAxisAngle(axisVect, delta);
		mesh.current.position.add(centerVect);
		mesh.current.rotateOnAxis(axisVect, delta);
	};

	useFrame(() => orbit());

	const mesh = useRef();
	const axisVect = new Vector3(...axis);
	const centerVect = new Vector3(...center);

	return(
		<Sphere
			ref={mesh}
			position={position}
			args={args}
			onPointerOver={onHover}
			onPointerOut={onRelease}
			castShadow
		>
			{ hovering
				? <meshBasicMaterial attach="material" color="white" />
				: <meshToonMaterial attach="material" color={color} />
			}
		</Sphere>
	);
};

export default OrbitingSphere;