import { FC } from "react";
import styles from "./DeleteButton.module.scss";

import { ReactComponent as DeleteLogo } from "../../assets/Delete.svg";

interface IDeleteButton {
    onDelete: () => Promise<void>;
}

const DeleteButton: FC<IDeleteButton> = ({ onDelete }) => {
    return (
        <button className={styles.delete_button} onClick={() => onDelete()}>
            <DeleteLogo />
            <span>Delete</span>
        </button>
    );
};
export default DeleteButton;
