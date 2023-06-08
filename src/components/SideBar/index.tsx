import { FC, ReactNode, useState } from "react";
import styles from "./SideBar.module.scss";

interface ISidebar {
    children: ReactNode;
}

const SideBar: FC<ISidebar> = ({ children }) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    return (
        <>
            <div
                className={`${styles.sidebar} ${
                    isOpened ? styles.is_opened : ""
                }`}
                onClick={() => setIsOpened(!isOpened)}
            >
                <div className={styles.sidebar__content}>{children}</div>
            </div>
            <div
                className={`${styles.sidebar__burger} ${
                    isOpened ? styles.is_opened : ""
                }`}
                onClick={() => setIsOpened((state: boolean) => !state)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    );
};
export default SideBar;
