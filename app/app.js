// ES6 Component
// import react and react-dom

import React from 'react';
import ReactDOM from 'react-dom';

// Search component created as classnames
class Search extends React.Component {
	// render method is most important
	// render metho returns JSX template
	render() {
		return (
			<form>
				<input type = "text" />
				<input type = "submit" />
			</form>
		);
	}
}

ReactDOM.render(<Search/>,
	document.getElementById('content')
);
