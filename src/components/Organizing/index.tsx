import { FC } from "react";
import { useNavigate } from "react-router";

import Container from "../Container";
import Title from "../Title";
import Button from "../Button";

import styles from "./Orginizing.module.scss";
import img from "../../assets/main__picture.png";

const Organizing: FC = () => {
    const navigate = useNavigate();

    const onGetStartedClick = (): void => {
        navigate("/auth");
    };

    return (
        <div className={styles.organizing}>
            <Container>
                <div className={styles.organizing__wrapper}>
                    <Title text="Organizing your day activity with Todo Daily" />
                    <Button
                        text="Get started"
                        style="started"
                        onClick={onGetStartedClick}
                    />
                </div>
            </Container>
            <img className={styles.organizing__image} src={img} alt="person" />
        </div>
    );
};
export default Organizing;
