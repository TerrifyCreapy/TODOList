import { FC } from "react";
import Container from "../Container";

import img from "../../assets/working.png";

import styles from "./Working.module.scss";
import Title from "../Title";
import Button from "../Button";
import { useNavigate } from "react-router";

const Working: FC = () => {
    const navigate = useNavigate();

    const onGetStarted = (): void => {
        navigate("/auth");
    };

    return (
        <div className={styles.working}>
            <Container>
                <div className={styles.wrapper}>
                    <img className={styles.img} src={img} alt="working_man" />
                    <div className={styles.achieve}>
                        <Title
                            text="Achieve your target and won your life"
                            variant="text-align"
                        />
                        <Button
                            text="Get started"
                            style="started"
                            onClick={onGetStarted}
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};
export default Working;
