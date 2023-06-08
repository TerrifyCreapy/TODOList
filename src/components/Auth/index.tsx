import { FC, ReactNode } from "react";

import styles from "./Auth.module.scss";

interface IAuth {
    children: ReactNode;
}

const Auth: FC<IAuth> = ({ children }) => {
    return <div className={styles.auth}>{children}</div>;
};
export default Auth;
