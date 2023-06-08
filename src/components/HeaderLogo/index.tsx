import { FC } from "react";
import styles from "./HeaderLogo.module.scss";
import { NavLink } from "react-router-dom";
import { main_path } from "../../constants/routes";

interface IHeader {
    inverse?: boolean;
    to?: string;
}

const HeaderLogo: FC<IHeader> = ({ inverse, to }) => {
    return (
        <div
            className={`${styles.header__logo} ${
                inverse ? styles.inversion : ""
            }`}
        >
            <NavLink to={to || main_path} className={`${styles.logo}`}>
                <svg
                    width="41"
                    height="41"
                    viewBox="0 0 41 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect width="41" height="41" rx="3" fill="#FF4F5A" />
                    <rect
                        x="15.375"
                        y="10.25"
                        width="21.7812"
                        height="5.125"
                        fill="white"
                    />
                    <rect
                        x="15.375"
                        y="19.2188"
                        width="21.7812"
                        height="5.125"
                        fill="white"
                    />
                    <rect
                        x="15.375"
                        y="28.1875"
                        width="21.7812"
                        height="5.125"
                        fill="white"
                    />
                </svg>
            </NavLink>
            <span>Todo Daily</span>
        </div>
    );
};
export default HeaderLogo;
