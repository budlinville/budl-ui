import React from 'react';
import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';

const Home = () => {
	const scene = new Scene();
	const camera = new PerspectiveCamera(
		75,	// Field of View
		window.innerWidth/window.innerHeight,	// Aspect Ratio
		0.1,	// Near Plane
		1000	// Far Plame
	);
		const renderer = new WebGLRenderer({antialias: true});
		renderer.setClearColor("#e5e5e5");	// background color
		renderer.setSize(window.innerWidth, window.innerHeight);

		document.body.appendChild( renderer.domElement );

	return (
		<div>
			Home...
		</div>
	);
};

export default Home;