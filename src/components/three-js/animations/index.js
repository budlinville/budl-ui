export const orbit = (ref, center, axis, speed) => {
	ref.current.position.sub(center);
	ref.current.position.applyAxisAngle(axis, speed);
	ref.current.position.add(center);
	ref.current.rotateOnAxis(axis, speed);
};

export const spin = (ref, delta=0.01) => {
	ref.current.rotation.x = ref.current.rotation.y += delta;
}