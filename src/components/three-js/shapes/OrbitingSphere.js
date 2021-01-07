import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Vector3, BackSide, SphereGeometry, MeshBasicMaterial, Mesh } from 'three';
import { useFrame } from 'react-three-fiber';
import { Sphere } from '@react-three/drei';

const OrbitingSphere = ({
	position,
	args,
	color,
	axis = [0, 0, 1],
	delta = 0.01,
	hoverCallback = () => ({}),
	releaseCallback = () => ({})
}) => {
	const [hovering, setHovering] = useState(false);
	const center = useSelector(state => state.scene.center.position);

	const onHover = () => {
		setHovering(true);
		hoverCallback();
	};

	const onRelease = () => {
		setHovering(false);
		releaseCallback();
	};

	const orbit = () => {
		sphere.current.position.sub(centerVect);
		sphere.current.position.applyAxisAngle(axisVect, delta);
		sphere.current.position.add(centerVect);
		sphere.current.rotateOnAxis(axisVect, delta);

		outline.current.position.sub(centerVect);
		outline.current.position.applyAxisAngle(axisVect, delta);
		outline.current.position.add(centerVect);
		outline.current.rotateOnAxis(axisVect, delta);
	};

	useFrame(() => orbit());

	useEffect(() => {
		outline.current.scale.set(1.05, 1.05, 1.05);
	}, []);

	const sphere = useRef();
	const outline = useRef();
	const axisVect = new Vector3(...axis);
	const centerVect = new Vector3(...center);
	const outlineMaterial = new MeshBasicMaterial();
	const outlineGeometry = new SphereGeometry(args[0], args[1], args[2]);
	const outlineMesh = new Mesh(outlineGeometry, outlineMaterial);

	return(
		<group>
			<Sphere
				ref={sphere}
				position={position}
				args={args}
				onPointerOver={onHover}
				onPointerOut={onRelease}
				castShadow
			>
				{ hovering
					? <meshBasicMaterial attach='material' color='white' />
					: <meshToonMaterial attach='material' color={color} />
				}
			</Sphere>
			<Sphere
				ref={outline}
				position={position}
				args={args}
				onPointerOver={onHover}
				onPointerOut={onRelease}
				castShadow
				visible={hovering}
			>
				<meshBasicMaterial
					attach='material'
					color={color}
					ref={outline}
					side={BackSide}
					mesh={outlineMesh}
				/>
			</Sphere>
		</group>
	);
};

export default OrbitingSphere;