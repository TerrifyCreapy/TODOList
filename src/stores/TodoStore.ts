import { makeAutoObservable } from "mobx";

import { QuerySnapshot, DocumentData } from "firebase/firestore";


import { ITodo } from "../interfaces/enteties/ITodo";
import FireBaseApi from "../api/firebase.api";

class TodoStore {
    rootStore: unknown;
    currentTodos: ITodo[];
    constructor(rootStore: unknown) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
        this.currentTodos = [];
    }

    async setTodos(todos: QuerySnapshot<DocumentData> | undefined) {
        const todo: ITodo[] =
            todos?.docs.map((e): ITodo => {
                const data = e.data();
                return {
                    id: e.id,
                    title: data.title,
                    content: data.content,
                    completed: data.completed,
                };
            }) || [];
        console.log(1);
        this.currentTodos = todo;
    }

    async addTodo(title: string, content: string, date: number) {
        let userId = "unknown"
        if ((this.rootStore as any).userStore.user) {
            userId = (this.rootStore as any).userStore.user.uid;
            const data = await FireBaseApi.addTodo(title, content, date, userId);
            this.currentTodos.push({
                id: data.id,
                title,
                content,
                completed: false,
            })
        }
    }

    async deleteTodo(id: string) {
        if (!id) return;
        this.currentTodos = this.currentTodos.filter(e => e.id !== id);
        await FireBaseApi.deleteTodo(id);
    }

    async toggleComplete(id: string) {

        const el = this.currentTodos.filter(e => e.id === id);
        await FireBaseApi.toggleComplete(id, el ? !el[0].completed : false);
        this.currentTodos = this.currentTodos.map(e => e.id === id ? { ...e, completed: !e.completed } : e);

    }
}

export default TodoStore;