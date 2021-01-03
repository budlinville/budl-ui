import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";

const ToHome = () => {
	const history = useHistory();

	useEffect(() => {
		history.push("/home");	
	});
	return (
		<div>
			Loading...
		</div>
	);
};

export default ToHome;