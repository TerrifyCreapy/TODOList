import { FC } from "react";
import styles from "./Yesterday.module.scss";
import TodosTitle from "../TodosTitle";
import CompletedCount from "../CompletedCount";
import TodosItem from "../TodosItem";
import { ITodo } from "../../interfaces/enteties/ITodo";
import { useOutletContext } from "react-router";
import NoTodos from "../NoTodos";
import AddTodo from "../AddTodo";
import Calendar from "../Calendar";

type today_yesterday_upcoming = "today" | "yesterday" | "upcoming";

interface IClose {
    text: today_yesterday_upcoming;
}

const Close: FC<IClose> = ({ text }) => {
    const { todo, addTodo, onToggleComplete, onDelete } = useOutletContext();

    const todosLength = todo.length;
    const completedLength = todo.filter((e: ITodo) => e.completed).length;
    const todoMapped = todo.map((e: ITodo) => {
        return (
            <TodosItem
                key={e.id + e.title + e.completed}
                id={e.id}
                completed={e.completed}
                title={e.title}
                content={e.content}
                onComplete={onToggleComplete}
                onDelete={onDelete}
            />
        );
    });

    return (
        <div className={styles.close}>
            <TodosTitle text={text} />
            {text === "upcoming" && <Calendar />}
            {todoMapped.length ? (
                <>
                    <CompletedCount
                        count={todosLength}
                        completedCount={completedLength}
                    />
                    {todoMapped}
                </>
            ) : (
                <NoTodos />
            )}
            <AddTodo addTodo={addTodo} />
        </div>
    );
};
export default Close;
