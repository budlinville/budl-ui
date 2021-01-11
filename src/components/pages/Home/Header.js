import React from 'react';

const Header = ({ Scene, Page }) => {
	return (
		<div>
			<div>
				{ Scene && <Scene/>}
			</div>
			<div>
				{ Page && <Page/>}
			</div>
		</div>
	);
};

export default Header;