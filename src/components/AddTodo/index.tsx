import { FC, useState } from "react";
import AddTodoButton from "../AddTodoButton";
import AddTodoForm from "../AddTodoForm";

import styles from "./AddTodo.module.scss";

interface IAddTodo {
    addTodo: (title: string, content: string) => Promise<void>;
}

const AddTodo: FC<IAddTodo> = ({ addTodo }) => {
    const [isAdd, setIsAdd] = useState<boolean>(false);

    function onToggleForm(): void {
        setIsAdd((state) => !state);
    }

    return (
        <div className={styles.add__todo}>
            {isAdd ? (
                <AddTodoForm onToggleForm={onToggleForm} onComplete={addTodo} />
            ) : (
                <AddTodoButton onClick={onToggleForm} />
            )}
        </div>
    );
};
export default AddTodo;
