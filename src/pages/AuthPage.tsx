import { FC, useContext, useEffect } from "react";
import Auth from "../components/Auth";
import Card from "../components/Card";
import { StoreProvider } from "../main";
import { useNavigate } from "react-router";
import { todos_path } from "../constants/routes";

const AuthPage: FC = () => {
    const rootStore = useContext(StoreProvider);

    const nav = useNavigate();

    useEffect(() => {
        if (rootStore?.userStore.isAuth) {
            nav(todos_path);
        }
    }, []);

    const onLogIn = async (authMethod: string): Promise<void> => {
        let isAuth: boolean | undefined = false;
        console.log(authMethod.toLowerCase() === "github");
        if (authMethod === "google") {
            isAuth = await rootStore?.userStore.setUser(true);
        } else if (authMethod === "github") {
            isAuth = await rootStore?.userStore.setUser();
        }
        if (isAuth) nav(todos_path);
    };

    return (
        <>
            <Auth>
                <Card onLogIn={onLogIn} />
            </Auth>
        </>
    );
};
export default AuthPage;
