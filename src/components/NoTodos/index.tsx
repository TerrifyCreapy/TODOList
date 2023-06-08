import { FC } from "react";
import styles from "./NoTodos.module.scss";

const NoTodos: FC = () => {
    return (
        <div className={styles.no_todos}>
            You have no Todos for this day! =(
        </div>
    );
};
export default NoTodos;
