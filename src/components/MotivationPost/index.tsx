import { FC, ReactNode } from "react";
import styles from "./MotivationPost.module.scss";

interface IMotivationPost {
    children: ReactNode;
    text: string;
}

const MotivationPost: FC<IMotivationPost> = ({ children, text }) => {
    return (
        <div className={styles.Motivation__post}>
            {children}
            <div className={styles.motivation__text}>{text}</div>
        </div>
    );
};
export default MotivationPost;
