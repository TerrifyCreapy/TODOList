import { makeAutoObservable } from "mobx";
import UserStore from "./UserStore";
import TodoStore from "./TodoStore";


class Store {
    userStore: UserStore;
    todoStore: TodoStore;
    constructor() {
        makeAutoObservable(this);
        this.userStore = new UserStore(this);
        this.todoStore = new TodoStore(this);
    }
}

export default Store;