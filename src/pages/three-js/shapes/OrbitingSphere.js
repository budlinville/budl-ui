import { useRef } from 'react';
import { Vector3 } from 'three';
import { useFrame } from 'react-three-fiber';
import { Sphere } from '@react-three/drei';

const OrbitingSphere = ({
	position,
	args,
	color,
	axis = [0, 0, 1],
	point = [0, 0, 0],
	delta = 0.01,
	hoverCallback = () => ({}),
	releaseCallback = () => ({})
}) => {
	const mesh = useRef();
	const axisVect = new Vector3(...axis);
	const pointVect = new Vector3(...point);

	const orbit = () => {
		mesh.current.position.sub(pointVect);
		mesh.current.position.applyAxisAngle(axisVect, delta);
		mesh.current.position.add(pointVect);
		mesh.current.rotateOnAxis(axisVect, delta);
	};

	useFrame(() => orbit());

	return(
			<Sphere
				ref={mesh}
				position={position}
				args={args}
				onPointerOver={hoverCallback}
				onPointerOut={releaseCallback}
				castShadow
			>
				<meshBasicMaterial attach="material" color={color} />
			</Sphere>
	);
};

export default OrbitingSphere;