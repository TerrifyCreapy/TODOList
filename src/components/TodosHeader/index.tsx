import { FC } from "react";

import styles from "./TodosHeader.module.scss";
import HeaderLogo from "../HeaderLogo";
import User from "../User";
import { todos_path } from "../../constants/routes";

interface ITodosHeader {
    displayName?: string;
    photoURL?: string;
    logOut: () => Promise<void>;
}

const TodosHeader: FC<ITodosHeader> = ({ displayName, photoURL, logOut }) => {
    return (
        <header className={styles.header}>
            <HeaderLogo inverse={true} to={todos_path} />
            <User
                displayName={displayName}
                photoURL={photoURL}
                onLogOut={logOut}
            />
        </header>
    );
};
export default TodosHeader;
