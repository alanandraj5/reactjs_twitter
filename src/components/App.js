import React, {Component} from 'react';

import request from 'superagent';

class App extends Component {

	sendRequest = () => {
		console.log("clickeddddddddddddddddddd");

		request
			.get('http://localhost:3002/request-token')
			.end((error, result) => {
				console.log("<<<<<<<<<>>>>>>>>> 111111111111", error);
				console.log("<<<<<<<<<>>>>>>>>> 222222222222", result);
			});
		
		// fetch("http://localhost:3002/request-token")
		// 	.then(result=>console.log("<<<<<<<<<>>>>>>>>>", result.json()))
	}

	render() {
		return(
			<div>
				<div>
					<h2>Twitter</h2>
						<button onClick={this.sendRequest}>Login</button>
				</div>
			</div>
		)
	}
}

export default App;