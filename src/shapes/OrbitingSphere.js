import { useRef } from 'react';
import { Vector3 } from 'three';
import { useFrame } from 'react-three-fiber';

const OrbitingSphere = ({
	position,
	args,
	color,
	axis = [0, 0, 1],
	point = [0, 0, 0],
	delta = 0.01
}) => {
	const mesh = useRef(null);
	const axisVect = new Vector3(...axis);
	const pointVect = new Vector3(...point);
	useFrame(() => {
		mesh.current.position.sub(pointVect);
		mesh.current.position.applyAxisAngle(axisVect, delta);
		mesh.current.position.add(pointVect);
		mesh.current.rotateOnAxis(axisVect, delta);
	});
	return(
		<mesh castShadow position={position} ref={mesh}>
			<sphereBufferGeometry attach='geometry' args={args}/>
			<meshStandardMaterial attach='material' color={color}/>
		</mesh>
	);
};

export default OrbitingSphere;