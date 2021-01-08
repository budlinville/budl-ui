const hoveredObjModel = (id=0, type='', posArr=[0,0,0]) => ({
	id,
	type,
	position: {
		x:posArr[0], y:posArr[1], z:posArr[2]
	}
})

export default hoveredObjModel;