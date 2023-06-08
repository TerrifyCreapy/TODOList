import { FC } from "react";
import styles from "./CompletedCount.module.scss";

interface ICompleted {
    count: number;
    completedCount: number;
}

const CompletedCount: FC<ICompleted> = ({ count, completedCount }) => {
    return (
        <div className={styles.completed}>
            {completedCount}/{count} completed
        </div>
    );
};

export default CompletedCount;
