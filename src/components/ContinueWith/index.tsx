import { FC } from "react";

import styles from "./ContinueWith.module.scss";

interface IContinueWith {
    img: string;
    network: string;
    onClick?: (str: string) => Promise<void>;
}

const ContinueWith: FC<IContinueWith> = ({ img, network, onClick }) => {
    return (
        <button
            onClick={(e) => (onClick ? onClick(network.toLowerCase()) : null)}
            className={styles.continue__with}
        >
            <img className={styles.icon} src={img} alt="network" />
            <span className={styles.continue__with__text}>
                Continue using {network}
            </span>
        </button>
    );
};

export default ContinueWith;
