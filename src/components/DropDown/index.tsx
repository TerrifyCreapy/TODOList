import { FC, ReactNode } from "react";
import styles from "./DropDown.module.scss";
interface IDropDown {
    children: ReactNode;
    active: boolean;
}

const DropDown: FC<IDropDown> = ({ children, active }) => {
    return (
        <div className={`${styles.dropdown} ${active ? styles.active : ""}`}>
            {children}
        </div>
    );
};
export default DropDown;
