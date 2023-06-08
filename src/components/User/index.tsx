import { FC, useState } from "react";
import styles from "./User.module.scss";

import DropDown from "../DropDown";
import ActionLink from "../ActionLink";
import Profile from "../MainIcons/Profile";
import SettingsIcons from "../MainIcons/SettingsIcon";
import LogoutIcon from "../MainIcons/LogOutIcon";

interface IUser {
    displayName?: string;
    photoURL?: string;

    onLogOut: () => Promise<void>;
}

const User: FC<IUser> = ({ displayName, photoURL, onLogOut }) => {
    const [dropDown, setDropDown] = useState<boolean>(false);
    return (
        <div
            className={styles.user}
            onClick={() => setDropDown((value) => !value)}
        >
            <span>{displayName || "unknown"}</span>
            {<img src={photoURL} alt="photo" /> || (
                <div className={styles.no_img}></div>
            )}
            <DropDown active={dropDown}>
                <div className={styles.drop_bottom}>
                    <ActionLink text="logout" action={onLogOut} variant="red">
                        <LogoutIcon />
                    </ActionLink>
                </div>
            </DropDown>
        </div>
    );
};
export default User;
