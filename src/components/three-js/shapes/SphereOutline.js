import React, { useRef, useEffect } from 'react';
import { BackSide, SphereGeometry, MeshBasicMaterial, Mesh } from 'three';
import { useFrame } from 'react-three-fiber';
import { Sphere } from '@react-three/drei';

const SphereOutline = ({
	position,
	center,
	axis,
	args,
	speed,
	color,
	visible
}) => {
	const orbit = () => {
		outline.current.position.sub(center);
		outline.current.position.applyAxisAngle(axis, speed);
		outline.current.position.add(center);
		outline.current.rotateOnAxis(axis, speed);
	};

	const outline = useRef();
	const outlineMaterial = new MeshBasicMaterial();
	const outlineGeometry = new SphereGeometry(args[0], args[1], args[2]);
	const outlineMesh = new Mesh(outlineGeometry, outlineMaterial);

	useFrame(() => orbit());

	useEffect(() => {
		outline.current.scale.set(1.05, 1.05, 1.05);
	}, []);

	return (
		<Sphere
			ref={outline}
			position={position}
			args={args}
			castShadow
			visible={visible}
		>
			<meshBasicMaterial
				attach='material'
				color={color}
				ref={outline}
				side={BackSide}
				mesh={outlineMesh}
			/>
		</Sphere>
	);
};

export default SphereOutline;