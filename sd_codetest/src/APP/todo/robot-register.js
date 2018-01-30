import React from 'react';
import PropType from 'prop-types';
import { TodoModel } from './model';


export class RobotRegist extends React.Component{

	constructor(props) {
			super(props);
			this.state = {
					name: '',
					namelist: true,
					type: 'clean',
					answer: <div>'Please regiter you identity'</div>
			};
	}

	onValueChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    addNewUser(){
    	if(this.state.namelist){
    		this.setState({
    			namelist: false,
    			answer: <div>Welcome, {this.state.name}!</div>
    		})
    	}else{
    		this.setState({
    			answer: <div>"Sorry, I am busy"</div>,
    			type: 'duplicate'
    		})
    	}
    }

    removeUser(){
    	if(this.state.namelist == false){
    		this.setState({
    		namelist:true,
    		answer: <div>'Please regiter you identity'</div>
    	})
    	}else{
    		this.setState({
    		answer : <div>there is nothing to delete </div>
    	})
    	}
    }

    render() {
        const handleClick = (e) => {
            e.preventDefault();
            this.addNewUser();
            this.setState({name: ''});
            this.props.robotListened(this.state.name)

        };

        const handleDelete = (e) => {
        	e.preventDefault();
        	this.props.resetShell();
        	this.removeUser();
        };

        return (
            <form>
                <label>
                    TextField:
                    <input type="text" name="name" value={this.state.name} onChange={(e) => this.onValueChange(e)} />
                </label>
                <button onClick={handleClick}>Add</button>
                <button onClick={handleDelete}>delete</button>
                <p>{this.state.answer}</p>
            </form>
        );
    }
};

