import React from 'react';
class ComponentOne extends React.Component {

// Defining the componentWillUnmount method
componentWillUnmount() {
	alert('The component is going to be unmounted');
}

render() {
	return <h1>Hello Students</h1>;
}
}

class ComponentwillUnmount extends React.Component {
state = { display: true };
delete = () => {
	this.setState({ display: false });
};

render() {
	let comp;
	if (this.state.display) {
	comp = <ComponentOne />;
	}
	return (
	<div>
		{comp}
		<button onClick={this.delete}>
		Delete the component
		</button>
	</div>
	);
}
}

export default ComponentwillUnmount;
