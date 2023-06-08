import { FC } from "react";
import MainPageHeader from "../components/MainPageHeader";
import Organizing from "../components/Organizing";
import DontLet from "../components/DontLet";
import Working from "../components/Working";

const MainPage: FC = () => {
    return (
        <>
            <MainPageHeader />
            <Organizing />
            <DontLet />
            <Working />
        </>
    );
};
export default MainPage;
