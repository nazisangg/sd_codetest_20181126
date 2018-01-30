import React from 'react';
import PropType from 'prop-types';
import {RobotRegist} from './robot-register.js'
import {SimpleSlider} from './slides.js'

export class RobotModel extends React.Component{

	constructor(props) {
			super(props);
			this.state = {
					name: '',
					textvalue: '',
					type: 'init'
			};
			this.robotListened = this.robotListened.bind(this);
			this.resetShell = this.resetShell.bind(this);
	}

	textFieldChanged(event){
		const target = event.target;
		const value = target.value;
		const textvalue = target.textvalue;
		this.setState({
				textvalue: value
		})
}


	 robotChanged(){
		var answer = "";
		if(this.state.type == "start"){
			answer = <div>Hello {this.state.name}, Welcome to the Government Service! How can I help you today</div>;
		}else if(this.state.type == "question"){
			answer = <div>Sure, here is the link you are after <a href = "http://govt.org.au/rates">Government Service</a></div>;
		}else if(this.state.type == "init"){
			answer = <div> Please press start to ask question</div>;
		}else if(this.state.type == "duplicate"){
			answer = <div>Sorry, I am working with another person</div>;
		}else {
			answer = <div>Sorry, I cant undertand what you mean</div>;
		}
		return answer
	}

	robotListened(name){
		var answer = "";
		if(this.state.type == "init"){
			this.setState({
				name: name,
				type: "start"
			})
			answer = "start";
		}
		return answer
	}

	questionAsked(){
		if(this.state.type == 'start'){
			this.setState(
			{
				type: 'question'
			})
		}
		return 'question'
	}


	resetShell(){
			this.setState({
				type: 'init'
			})
	}



render(){
	const handleClick = (e) => {
			e.preventDefault();
			this.setState({
				type: this.questionAsked()

		});

	};
	const robotAnswer = this.robotChanged()
	return (
		<p>
			<RobotRegist 
			robotListened = {this.robotListened}
			resetShell = {this.resetShell}
			></RobotRegist>
				<form>
						<label>
								TextField:
								<input type="text" name="textvalue" value={this.state.textvalue} onChange={(e) => this.textFieldChanged(e)} />
						</label>
						<button onClick={handleClick}>submit</button>
				</form>
            Robot: {robotAnswer}
            <br />
            <br />
            <br />
            <br />
            <SimpleSlider />
        </p>
    );
	}
}
