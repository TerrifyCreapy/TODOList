import { FC, ReactNode, Dispatch, SetStateAction } from "react";
import styles from "./SidebarLink.module.scss";
import { NavLink } from "react-router-dom";

interface ISidebarLink {
    index: number;
    isActive: boolean;
    children: ReactNode;
    text: string;
    path: string;
    setActive: Dispatch<SetStateAction<number>>;
}

const SideBarLink: FC<ISidebarLink> = ({
    index,
    isActive,
    children,
    text,
    path,
    setActive,
}) => {
    function setActiveLink() {
        if (isActive) return;
        setActive(index);
    }

    return (
        <NavLink
            to={path}
            className={`${styles.sidebar__link} ${
                isActive ? styles.active : ""
            }`}
            onClick={setActiveLink}
        >
            {children}
            <span>{text}</span>
        </NavLink>
    );
};

export default SideBarLink;
