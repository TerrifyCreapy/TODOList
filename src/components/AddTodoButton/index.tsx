import { FC } from "react";
import { ReactComponent as AddIcon } from "../../assets/Add.svg";
import styles from "./AddTodoButton.module.scss";

interface ITodoButton {
    onClick: () => void;
}

const AddTodoButton: FC<ITodoButton> = ({ onClick }) => {
    return (
        <button className={styles.add} onClick={() => onClick()}>
            <AddIcon />
            <span>add task</span>
        </button>
    );
};
export default AddTodoButton;
