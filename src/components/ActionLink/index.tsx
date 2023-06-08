import { FC, ReactNode } from "react";
import styles from "./ActionLink.module.scss";

interface IActionLink {
    text: string;
    action: () => Promise<void>;
    children: ReactNode;
    variant?: string;
}

function whatStyle(variant: string | undefined) {
    if (variant === "dark") return styles.dark;
    if (variant === "red") return styles.red;
    if (!variant) return "";
}

const ActionLink: FC<IActionLink> = ({ text, action, children, variant }) => {
    return (
        <div
            className={`${styles.action__link} ${whatStyle(variant)}`}
            onClick={() => action()}
        >
            {children}
            <span>{text}</span>
        </div>
    );
};

export default ActionLink;
