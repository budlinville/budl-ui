import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Vector3 } from 'three';
import { useFrame, useThree } from 'react-three-fiber';
import { Sphere } from '@react-three/drei';

import HoveredObj from '../../../models/three-js/hovered-obj';
import { orbit } from '../animations';
import { addHoveredObj, removeHoveredObj } from '../../../store/actions/scene';
import SphereOutline from './SphereOutline';

const isNearestHoveredObj = (objs, id) => {
	const nearest = objs.filter(obj => obj.type === 'sphere')
		.reduce((prev, cur) => prev.distance < cur.distance ? prev : cur, Number.POSITIVE_INFINITY);
	return nearest.id === id;
};

const OrbitingSphere = ({
	id,
	position,
	args,
	color,
	axis,
	delta = 0.01
}) => {
	const onHover = () => {
		if (!isHovering) {
			const distance = sphere.current.position.distanceTo(cameraPos);
			dispatch(addHoveredObj(HoveredObj(id, 'sphere', distance)));
		}
	};
	const onRelease = () => dispatch(removeHoveredObj(id));

	const center = new Vector3(...useSelector(state => state.scene.center.position));
	const cameraPos = useThree().camera.getWorldPosition(new Vector3());
	const hovering = useSelector(state => state.scene.hovering);
	const isHovering = isNearestHoveredObj(hovering, id);

	const sphere = useRef();
	const dispatch = useDispatch();
	const speed = hovering.length ? 0 : delta;

	useFrame(() => orbit(sphere, center, axis, speed));

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
				scale={isHovering ? 1.1 : 1.02}
				opacity={1}
			/>
			<SphereOutline
				position={position}
				center={center}
				axis={axis}
				args={args}
				speed={speed}
				color={'white'}
				visible={isHovering}
				scale={2}
				opacity={0.3}
			/>
		</group>
	);
};

export default OrbitingSphere;