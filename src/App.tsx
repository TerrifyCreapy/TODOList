import { FC, useContext, useEffect } from "react";
import { Routes, Route } from "react-router";
import { Navigate } from "react-router-dom";
import mapRoutes from "./utils/mapRoutes";
import { private_routes, routes } from "./routes";
import { useNavigate } from "react-router";
import { StoreProvider } from "./main";
import useAuth from "./hooks/useAuth";
import { IUser } from "./interfaces/enteties/IUser";
import { main_path, todos_path } from "./constants/routes";
import Loader from "./components/Loader";
import { observer } from "mobx-react-lite";
import { useLocation } from "react-router";

const App: FC = observer(() => {
    const navigate = useNavigate();

    const rootStore = useContext(StoreProvider);
    const { user, loading, errors } = useAuth();

    const location = useLocation();
    useEffect(() => {
        rootStore?.userStore.checkAuthUser(user as IUser);
        if (user && location.pathname === "/") {
            navigate(todos_path);
        }
    }, [user]);

    if (loading) {
        return <Loader />;
    }
    const privateRoutes = mapRoutes(private_routes);
    return (
        <Routes>
            {mapRoutes(routes)}
            {user && privateRoutes}
            {user ? (
                <Route
                    path="*"
                    element={<Navigate to={todos_path} replace />}
                />
            ) : (
                <Route path="*" element={<Navigate to={main_path} replace />} />
            )}
        </Routes>
    );
});

export default App;
