import { FC } from "react";
import styles from "./Todostitle.module.scss";

interface ITodosTitle {
    text: string;
}

const TodosTitle: FC<ITodosTitle> = ({ text }) => {
    return <div className={styles.todos__title}>{text}</div>;
};

export default TodosTitle;
