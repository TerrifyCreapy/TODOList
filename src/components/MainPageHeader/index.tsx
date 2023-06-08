import { FC } from "react";
import Container from "../Container";
import styles from "./MainPageHeader.module.scss";
import HeaderLogo from "../HeaderLogo";
import AuthLink from "../AuthLink";

const MainPageHeader: FC = () => {
    return (
        <header className={styles.main_page_header}>
            <Container>
                <HeaderLogo />
                <div className={styles.auth__links}>
                    <AuthLink path="#" text="Login" />
                    <AuthLink path="#" text="Signup" />
                </div>
            </Container>
        </header>
    );
};
export default MainPageHeader;
