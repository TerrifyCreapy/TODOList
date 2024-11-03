import { IBrowserRouter } from "../interfaces/common/IBrowserRouter";
import MainPage from "../pages/MainPage";
import {
    auth_path,
    main_path,
    todos_path,
    upcoming_path,
    yesterday_path,
} from "../constants/routes";
import AuthPage from "../pages/AuthPage";
import TodosPage from "../pages/TodosPage";
import Close from "../components/Close";

export const routes: IBrowserRouter[] = [
    {
        path: main_path,
        exact: true,
        element: <MainPage />,
    },
    {
        path: auth_path,
        exact: true,
        element: <AuthPage />,
    },
];

export const private_routes: IBrowserRouter[] = [
    {
        path: todos_path,
        exact: true,
        element: <TodosPage />,
        outlet: [
            {
                path: todos_path,
                exact: true,
                element: <Close text="today" />,
            },
            {
                path: yesterday_path,
                exact: true,
                element: <Close text="yesterday" />,
            },
            {
                path: upcoming_path,
                exact: true,
                element: <Close text="upcoming" />,
            },
        ],
    },
];
