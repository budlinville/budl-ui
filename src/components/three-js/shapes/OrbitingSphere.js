import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Vector3 } from 'three';
import { useFrame, useThree } from 'react-three-fiber';
import { Sphere } from '@react-three/drei';

import HoveredObj from '../../../models/three-js/hovered-obj';
import { orbit } from '../animations';
import { addHoveredObj, removeHoveredObj } from '../../../store/actions/scene';
import SphereOutline from './SphereOutline';

const SphereMesh = ({isHeaderExpanded, isHovering, color, color2}) => {
	const meshColor = isHovering ? color2: color;
	return isHeaderExpanded
		? <meshPhongMaterial attach='material' color={meshColor} />
		: <meshToonMaterial attach='material' color={meshColor} />;
}

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
	color2,
	axis,
	delta = 0.01,
	nav,
	navCallback
}) => {
	const onHover = () => {
		document.getElementById('root').style.cursor = 'pointer';
		if (!isHovering) {
			const distance = sphere.current.position.distanceTo(cameraPos);
			dispatch(addHoveredObj(HoveredObj(id, 'sphere', distance)));
		}
	};
	const onRelease = () => {
		if (hovering.length <= 1) {	// last hovered object
			document.getElementById('root').style.cursor = 'auto';
		}
		dispatch(removeHoveredObj(id));
	};

	const onPress = () => {
		setPressed(true);
	};

	const onPressRelease = () => {
		setPressed(false);
		navCallback(nav);
	};

	const center = new Vector3(...useSelector(state => state.scene.center.position));
	const cameraPos = useThree().camera.getWorldPosition(new Vector3());
	const headerExpanded = useSelector(state => state.app.headerExpanded);
	const hovering = useSelector(state => state.scene.hovering);
	const isHovering = isNearestHoveredObj(hovering, id);
	const sphere = useRef();
	const dispatch = useDispatch();
	const speed = hovering.length ? 0 : delta;
	const [pressed, setPressed] = useState(false);

	useFrame(() => orbit(sphere, center, axis, speed));

	const outlineStrength = !headerExpanded
		? 1.15
		: (isHovering ? 1.1 : 1.02);
	const outlineColor = headerExpanded ? color : color2;

	return(
		<group ref={sphere} position={position}>
			<Sphere
				args={args}
				onPointerOver={onHover}
				onPointerOut={onRelease}
				onPointerDown={onPress}
				onPointerUp={onPressRelease}
				castShadow
			>
				<SphereMesh isHeaderExpanded={headerExpanded} isHovering={isHovering} color={color} color2={color2} />
			</Sphere>
			<SphereOutline
				args={args}
				color={outlineColor}
				scale={outlineStrength}
				opacity={1}
			/>
			<SphereOutline
				args={args}
				color={pressed ? color : color2}
				visible={isHovering}
				scale={2}
				opacity={0.7}
			/>
		</group>
	);
};

export default OrbitingSphere;