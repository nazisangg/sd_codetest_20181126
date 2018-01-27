import React from 'react';

export class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    //
    onValueChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    render() {
        const handleClick = (e) => {
            e.preventDefault();
            this.props.onAddTodo(this.state.name);
            this.setState({name: ''});
        };
        return (
            <form>
                <label>
                    TextField:
                    <input type="text" name="name" value={this.state.name} onChange={(e) => this.onValueChange(e)} />
                </label>
                <button onClick={handleClick}>Add</button>
            </form>
        );
    }
};
