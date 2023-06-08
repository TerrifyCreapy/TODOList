import { FC } from "react";

import styles from "./HaveAccount.module.scss";
import { NavLink } from "react-router-dom";
import { auth_path } from "../../constants/routes";

interface IHaveAccount {
    isLogIn: boolean;
    onSignUp: () => void;
}

const HaveAccount: FC<IHaveAccount> = ({ isLogIn, onSignUp }) => {
    return (
        <div className={styles.have__account}>
            <span className={styles.have__account_text}>
                {isLogIn ? "Not" : "Already"} have account ?{" "}
            </span>
            <NavLink
                to={isLogIn ? auth_path : auth_path + "?login=true"}
                onClick={onSignUp}
            >
                {isLogIn ? "Signup" : "Signin"}
            </NavLink>
        </div>
    );
};
export default HaveAccount;
