/*********************************************************
	Rotate around x-axis: { axis: [1, 0, 0] }
	Rotate around y-axis: { axis: [0, 1, 0] }
	Rotate around z-axis: { axis: [0, 0, 1] }
	* Can increase magnitude from 1 to get it to move faster
 *********************************************************/

const spheres = [
	{
		id: 0,
		position: [0, 18, 0],	// starting position
		axis: [1, 0, 0],	
		args: [1, 25, 25],	// [size, detail, detail]
		color: 'red'
	},{
		id: 1,
		position: [0, 10, 8],
		axis: [0, 1, 0],
		args: [1, 25, 25],
		color: 'blue'
	},{
		id: 2,
		position: [8, 10, 0],
		axis: [0, 0, 1],
		args: [1, 25, 25],
		color: 'green'
	},
];

export default spheres;