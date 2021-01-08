import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Vector3, BackSide, SphereGeometry, MeshBasicMaterial, Mesh } from 'three';
import { useFrame } from 'react-three-fiber';
import { Sphere } from '@react-three/drei';

import HoveredObj from '../../../models/three-js/hovered-obj';
import { addHoveredObj, removeHoveredObj } from '../../../store/actions/scene';

const OrbitingSphere = ({
	id,
	position,
	args,
	color,
	axis = [0, 0, 1],
	delta = 0.01
}) => {
	const orbit = () => {
		sphere.current.position.sub(centerVect);
		sphere.current.position.applyAxisAngle(axisVect, speed);
		sphere.current.position.add(centerVect);
		sphere.current.rotateOnAxis(axisVect, speed);

		outline.current.position.sub(centerVect);
		outline.current.position.applyAxisAngle(axisVect, speed);
		outline.current.position.add(centerVect);
		outline.current.rotateOnAxis(axisVect, speed);
	};

	const onHover = () => dispatch(addHoveredObj(HoveredObj(id, 'sphere', position)));
	const onRelease = () => dispatch(removeHoveredObj(id));

	const center = useSelector(state => state.scene.center.position);
	const isHovering = !!useSelector(state => state.scene.hovering)
		.filter(obj => obj.id === id).length;

	const sphere = useRef();
	const outline = useRef();
	const dispatch = useDispatch();
	const axisVect = new Vector3(...axis);
	const centerVect = new Vector3(...center);
	const outlineMaterial = new MeshBasicMaterial();
	const outlineGeometry = new SphereGeometry(args[0], args[1], args[2]);
	const outlineMesh = new Mesh(outlineGeometry, outlineMaterial);
	const speed = isHovering ? 0 : delta;

	useFrame(() => orbit());

	useEffect(() => {
		outline.current.scale.set(1.05, 1.05, 1.05);
	}, []);

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
				{ isHovering
					? <meshToonMaterial attach='material' color='white' />
					: <meshPhongMaterial attach='material' color={color} />
				}
			</Sphere>
			<Sphere
				ref={outline}
				position={position}
				args={args}
				onPointerOver={onHover}
				onPointerOut={onRelease}
				castShadow
				visible={isHovering}
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