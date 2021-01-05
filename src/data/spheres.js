/*********************************************************
	Rotate around x-axis: { axis: [1, 0, 0] }
	Rotate around y-axis: { axis: [0, 1, 0] }
	Rotate around z-axis: { axis: [0, 0, 1] }
	* Can increase magnitude from 1 to get it to move faster
 *********************************************************/

const spheres = [
	{
		position: [0, 18, 0],	// starting position
		center: [0, 10, 0],		// center of orbit
		axis: [1, 0, 0],	
		args: [1, 25, 25],	// [size, detail, detail]
		color: 'red'
	},{
		position: [0, 10, 8],
		center: [0, 10, 0],
		axis: [0, 1, 0],
		args: [1, 25, 25],
		color: 'blue'
	},{
		position: [8, 10, 0],
		center: [0, 10, 0],
		axis: [0, 0, 1],
		args: [1, 25, 25],
		color: 'yellow'
	},
];

export default spheres;