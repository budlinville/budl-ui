import React, { useRef, useEffect } from 'react';
import { BackSide, SphereGeometry, MeshBasicMaterial, Mesh } from 'three';
import { Sphere } from '@react-three/drei';


const SphereOutline = ({
	args,
	color,
	visible,
	scale,
	opacity
}) => {
	const outline = useRef();
	const outlineMaterial = new MeshBasicMaterial();
	const outlineGeometry = new SphereGeometry(args[0], args[1], args[2]);
	const outlineMesh = new Mesh(outlineGeometry, outlineMaterial);

	useEffect(() => {
		outline.current.scale.set(scale, scale, scale);
	}, [scale]);

	return (
		<Sphere
			ref={outline}
			args={args}
			castShadow
			visible={visible}
		>
			<meshBasicMaterial
				attach='material'
				color={color}
				transparent
				opacity={opacity}
				side={BackSide}
				mesh={outlineMesh}
			/>
		</Sphere>
	);
};

export default SphereOutline;