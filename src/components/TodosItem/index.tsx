import { FC, useState } from "react";
import styles from "./TodosItem.module.scss";

import { ReactComponent as CompletedArrow } from "../../assets/Completed.svg";
import DeleteButton from "../DeleteButton";

interface ITodosItem {
    id: string;
    completed: boolean;
    title: string;
    content: string;
    onComplete: (id: string) => Promise<void>;
    onDelete: (id: string) => Promise<void>;
}

const TodosItem: FC<ITodosItem> = ({
    completed,
    title,
    content,
    id,
    onComplete,
    onDelete,
}) => {
    console.log(id);
    return (
        <div className={styles.todo_container}>
            <div
                onClick={() => onComplete(id)}
                className={`${styles.complete_checkbox} ${
                    completed ? styles.completed : ""
                }`}
            >
                <CompletedArrow />
            </div>
            <div className={styles.todo__content}>
                <div className={styles.todo__content_title}>{title}</div>
                <div className={styles.todo__content_content}>{content}</div>
                <DeleteButton onDelete={() => onDelete(id)} />
            </div>
        </div>
    );
};
export default TodosItem;
