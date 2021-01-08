import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Vector3 } from 'three';
import { useFrame } from 'react-three-fiber';
import { Sphere } from '@react-three/drei';

import HoveredObj from '../../../models/three-js/hovered-obj';
import { addHoveredObj, removeHoveredObj } from '../../../store/actions/scene';
import SphereOutline from './SphereOutline';

const OrbitingSphere = ({
	id,
	position,
	args,
	color,
	axis,
	delta = 0.01
}) => {
	const orbit = () => {
		sphere.current.position.sub(center);
		sphere.current.position.applyAxisAngle(axis, speed);
		sphere.current.position.add(center);
		sphere.current.rotateOnAxis(axis, speed);
	};

	const onHover = () => {
		if (!isHovering) {
			dispatch(addHoveredObj(HoveredObj(id, 'sphere', position)));
		}
	};
	const onRelease = () => dispatch(removeHoveredObj(id));

	const center = new Vector3(...useSelector(state => state.scene.center.position));
	const hovering = useSelector(state => state.scene.hovering);
	const isHovering = !!hovering.filter(obj => obj.id === id).length;

	const sphere = useRef();
	const dispatch = useDispatch();
	const speed = hovering.length ? 0 : delta;

	useFrame(() => orbit());

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
			<SphereOutline
				position={position}
				center={center}
				axis={axis}
				args={args}
				speed={speed}
				color={color}
				visible={isHovering}
			/>
		</group>
	);
};

export default OrbitingSphere;