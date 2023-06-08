import { FC, ReactNode } from "react";

interface ITodosComponent {
    children: ReactNode;
}

const TodosComponent: FC<ITodosComponent> = ({ children }) => {
    return <div>{children}</div>;
};

export default TodosComponent;
