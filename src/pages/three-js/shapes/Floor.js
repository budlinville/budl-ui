const Floor = ({position, args, color}) => {
	return(
		<group>
			<mesh receiveShadow rotation={[-Math.PI/2, 0, 0]} position={position}>
				<planeBufferGeometry attach='geometry' args={args}/>
				<shadowMaterial attach='material' opacity={0.3} color={color}/>
			</mesh>
		</group>
	);
}

export default Floor;