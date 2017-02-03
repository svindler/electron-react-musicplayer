// ES6 Component
// import react and react-dom

import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './containers/app.container';

// App component
class App extends React.Component {
	// render method is most important
	// render method returns JSX template
	render() {
		console.log('App container init');
		return (
			<AppContainer />
		);
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('content')
);
