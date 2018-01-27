//This file is the component of the to do list

//The reason why we need export is that we need the outer file can view the inner variables
export class TodoModel {
    constructor(name, done = false) {
        TodoModel.generaterId ++;
        this.id = TodoModel.generaterId;
        this.name = name;
        this.done = done;
        this.type = "type"
    }
}

TodoModel.generaterId = 0;