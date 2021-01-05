import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";

const Redirect = ({to}) => {
	const history = useHistory();
	useEffect(() => history.push(to));
	return (<div>Redirecting...</div>);
};

export default Redirect;