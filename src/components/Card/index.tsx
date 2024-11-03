import { FC, useState } from "react";

import styles from "./Card.module.scss";
import HeaderLogo from "../HeaderLogo";
import ContinueWith from "../ContinueWith";

import google from "../../assets/flat-color-icons_google.png";
import github from "../../assets/Github.png";
import HaveAccount from "../HaveAccount";
import { useSearchParams } from "react-router-dom";

interface ICard {
    onLogIn: (authMethod: string) => Promise<void>;
}

const Card: FC<ICard> = ({ onLogIn }) => {
    const [params, _] = useSearchParams();
    const [isLogIn, setIsLogIn] = useState<boolean>(
        params.get("login") ? true : false,
    );

    const onSetLogIn = (): void => {
        setIsLogIn((value) => !value);
    };

    return (
        <div className={styles.card}>
            <HeaderLogo />
            <div className={styles.sign}>{isLogIn ? "Signin" : "Signup"}</div>
            <div className={styles.continue__with}>
                <ContinueWith img={google} network="Google" onClick={onLogIn} />
                <ContinueWith img={github} network="GitHub" onClick={onLogIn} />
            </div>
            <HaveAccount isLogIn={isLogIn} onSignUp={onSetLogIn} />
        </div>
    );
};
export default Card;
