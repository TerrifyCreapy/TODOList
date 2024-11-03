import { FC, useContext, useEffect, useState } from "react";
import TodosHeader from "../components/TodosHeader";

import { observer } from "mobx-react-lite";

import { StoreProvider } from "../main";
import { useNavigate } from "react-router";
import {
    auth_path,
    todos_path,
    upcoming_path,
    yesterday_path,
} from "../constants/routes";
import SideBar from "../components/SideBar";
import SideBarLink from "../components/SidebarLinks";

import Loader from "../components/Loader";

import { ReactComponent as TodayLogo } from "../assets/CalendarToday.svg";
import { ReactComponent as YesterdayLogo } from "../assets/CalendarYesterday.svg";

import styles from "./Page.module.scss";
import useTodos from "../hooks/useTodos";
import { useLocation } from "react-router";
import { Outlet } from "react-router";
import { useSearchParams } from "react-router-dom";

function whatDate(path: string): Date {
    if (path.endsWith("yesterday")) {
        const date = new Date();
        date.setDate(date.getDate() - 1);
        return date;
    } else {
        return new Date();
    }
}

function toNumberDate(date: Date): number {
    const day = `${date.getDate()}`;
    const mm = `${date.getMonth()}`;
    const year = `${date.getFullYear()}`;
    const result = `${year}${mm.length === 1 ? "0" + mm : mm}${
        day.length === 1 ? "0" + day : day
    }`;
    return +result;
}

const TodosPage: FC = observer(() => {
    const rootStore = useContext(StoreProvider);
    const user = rootStore?.userStore.user;
    const nav = useNavigate();
    const location = useLocation();
    const [params, _] = useSearchParams();

    

    const [activeLink, setActiveLink] = useState<number>(
        location.pathname.endsWith("yesterday") ? 1 : 0,
    );

    const { todos, loading } = useTodos(
        params.get("date")
            ? new Date(params.get("date") as string)
            : whatDate(location.pathname),
        user?.uid || "",
    );

    async function onLogOut() {
        await rootStore?.userStore.logOut();
        nav(auth_path);
    }

    async function onAddTodo(title: string, content: string): Promise<void> {
        await rootStore?.todoStore.addTodo(
            title,
            content,
            toNumberDate(
                params.get("date")
                    ? new Date(params.get("date") as string)
                    : new Date(),
            ),
        );
    }

    async function onDelete(id: string): Promise<void> {
        await rootStore?.todoStore.deleteTodo(id);
    }

    async function onCompleted(id: string): Promise<void> {
        await rootStore?.todoStore.toggleComplete(id);
    }

    useEffect(() => {
        if (!loading) rootStore?.todoStore.setTodos(todos);
    }, [loading, todos]);

    if (loading) return <Loader />;

    return (
        <div className={styles.page}>
            <TodosHeader
                displayName={user?.displayName}
                photoURL={user?.photoURL}
                logOut={onLogOut}
            />
            <SideBar>
                <SideBarLink
                    index={0}
                    setActive={setActiveLink}
                    text="today"
                    isActive={activeLink === 0}
                    path={todos_path}
                >
                    <TodayLogo />
                </SideBarLink>
                <SideBarLink
                    index={1}
                    setActive={setActiveLink}
                    text="yesterday"
                    isActive={activeLink === 1}
                    path={yesterday_path}
                >
                    <YesterdayLogo />
                </SideBarLink>
                <SideBarLink
                    index={2}
                    setActive={setActiveLink}
                    text="upcoming"
                    isActive={activeLink === 2}
                    path={upcoming_path}
                >
                    <YesterdayLogo />
                </SideBarLink>
            </SideBar>
            <Outlet
                context={{
                    todo: rootStore?.todoStore.currentTodos,
                    addTodo: onAddTodo,
                    onToggleComplete: onCompleted,
                    onDelete,
                }}
            />
        </div>
    );
});
export default TodosPage;
