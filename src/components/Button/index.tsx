import { FC } from "react";
import styles from "./Button.module.scss";

interface IButton {
    text: string;
    style: string;
    onClick?: () => unknown;
    variant?: "inversion";
}

function what_style(style: string): string {
    if (style == "started") return "get__started";
    else if (style == "add") return "";
    else return "";
}

const Button: FC<IButton> = ({ text, style, onClick, variant }) => {
    style = what_style(style);
    console.log(onClick);
    return (
        <button
            className={`${styles.button} ${styles[style]} ${
                variant ? styles[variant] : ""
            }`}
            onClick={(e) => {
                if (onClick) {
                    onClick();
                } else {
                    return;
                }
                e.stopPropagation();
            }}
        >
            {text}
        </button>
    );
};
export default Button;
