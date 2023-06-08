import { FC } from "react";
import styles from "./AuthLink.module.scss";
import { NavLink } from "react-router-dom";

interface IAuthLink {
    path: string;
    text: string;
}

const AuthLink: FC<IAuthLink> = ({ path, text }) => {
    return (
        <NavLink to={path} className={styles.auth__link}>
            {text}
        </NavLink>
    );
};
export default AuthLink;
