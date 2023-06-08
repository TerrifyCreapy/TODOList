import { FC, useState } from "react";
import styles from "./AddTodoForm.module.scss";
import Button from "../Button";

interface IAddForm {
    onToggleForm: () => void;
    onComplete: (title: string, content: string) => Promise<void>;
}

const AddTodoForm: FC<IAddForm> = ({ onToggleForm, onComplete }) => {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");

    async function makeAction() {
        setTitle("");
        setContent("");
        onToggleForm();
        await onComplete(title, content);
    }

    return (
        <div className={styles.todo_form}>
            <div className={styles.text__wrapper}>
                <input
                    type="text"
                    placeholder="task title"
                    className={styles.title_area}
                    maxLength={100}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    className={styles.content_area}
                    placeholder="description"
                    name="content"
                    cols={30}
                    rows={10}
                    maxLength={256}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>

            <div className={styles.button_area}>
                <Button text="add" style="add" onClick={makeAction} />
                <Button
                    text="cancel"
                    style="add"
                    variant="inversion"
                    onClick={onToggleForm}
                />
            </div>
        </div>
    );
};
export default AddTodoForm;
