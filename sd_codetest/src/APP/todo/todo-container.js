//import 的时候要加{}
import React from 'react';
//import axios from 'axios';
import { TodoList } from './todo-list';
import { AddTodo } from './add-todo';
import { TodoModel } from './model';

// because we will modified the state so we need to extend the react.component
export class TodoContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            todoItems: [],
            type: "type"
        }
        // make sure "this" of all three extend functions ponits to self
        this.onAddTodo = this.onAddTodo.bind(this);
        this.onRemoveTodo = this.onRemoveTodo.bind(this);
        this.onDoneTodo = this.onDoneTodo.bind(this);
    }
    //componentDidMount() {
     //   axios.get('https://jr-001-pawpatrol-course-api.herokuapp.com/api/Todos').then(({data}) => {
     //       this.setState({todoItems: data});
     //   })
    //}
    onAddTodo(aItem) {
        this.setState({
            // concat won't change the original list but return a changed copy
            todoItems: this.state.todoItems.concat(new TodoModel(aItem)),
            type: "start"
        });
    }

    // delete the value from the list
    // filter means that get the required value out of the list
    onRemoveTodo(aItem) {
        this.state.type == "finish" ? 
        this.setState({
            todoItems: this.state.todoItems.filter((value) => value !== aItem)
        })
     : 
        this.setState({
            todoItems: this.state.todoItems
        });
    
}

    // change the argument saved in the model
    // === is identify,  == is equal，
    // it is a Conditional statements if aItem.id always equals to value id change
    // it statement to “done”， otherwise it is value
    //
    onDoneTodo(aItem) {
        const newState = this.state.todoItems.map((value) => {
            return aItem.id === value.id ? {...value, done: true} : value;
        })
        this.setState({
            todoItems: newState
        });
    }
    // the slash is another method of writing html tags
    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <TodoList
                    items={this.state.todoItems}
                    onRemoveTodo={this.onRemoveTodo}
                    onDoneTodo={this.onDoneTodo}
                />
                <AddTodo onAddTodo={this.onAddTodo} />
            </div>
        );
    }
}
