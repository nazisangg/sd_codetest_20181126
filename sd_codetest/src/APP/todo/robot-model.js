import React from 'react';
import PropType from 'prop-types';
import {RobotRegist} from './robot-register.js'

export class RobotModel extends React.Component{

	constructor(props) {
			super(props);
			this.state = {
					textvalue: '',
					type: 'init'
			};
			this.robotReplicated = this.robotReplicated.bind(this);
	}

	textFieldChanged(event){
		const target = event.target;
		const value = target.value;
		const textvalue = target.textvalue;
		this.setState({
				textvalue: value,
				type:"init"
		})
}


	 robotChanged(){
		var answer = "";
		if(this.state.type == "start"){
			answer = <div>Hello {this.state.textvalue}, Welcome to the Government Service! How can I help you today</div>;
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

	robotListened(){
		var answer = "";
		if(this.state.type == "init"){
			answer = "start";
		}
		return answer
	}

	robotReplicated(aItem){
		if(aItem == "duplicate"){
			this.setState({
				type: aItem
			})

		}
	}



render(){
	const handleClick = (e) => {
			e.preventDefault();
			this.setState({
				type: this.robotListened()

		});

	};
	const robotAnswer = this.robotChanged()
	return (
		<p>
			<RobotRegist></RobotRegist>
			<form>
					<label>
							Register:
							<input type="text" name="textvalue" value={this.state.name} onChange={(e) => this.textFieldChanged(e)} />
					</label>
					<button onClick={handleClick}>submit</button>
			</form>

				<form>
						<label>
								TextField:
								<input type="text" name="textvalue" value={this.state.name} onChange={(e) => this.textFieldChanged(e)} />
						</label>
						<button onClick={handleClick}>submit</button>
				</form>
            Robot: {robotAnswer}
        </p>
    );
	}
}
