import { FC } from "react";
import styles from "./Title.module.scss";

interface ITitle {
    text: string;
    variant?: string;
}

const Title: FC<ITitle> = ({ text, variant }) => {
    return (
        <div className={`${styles.title} ${variant ? styles[variant] : ""}`}>
            {text}
        </div>
    );
};
export default Title;
