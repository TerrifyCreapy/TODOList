import { FC, useState } from "react";
import styles from "./Calendar.module.scss";
import { useSearchParams } from "react-router-dom";

const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

function new_date(value: Date, forward = false): Date {
    if (forward) {
        const newYear =
            value.getMonth() + 2 >= 12
                ? value.getFullYear() + 1
                : value.getFullYear();
        const newMonth = value.getMonth() + 2 >= 12 ? 1 : value.getMonth() + 2;
        return new Date(`${newYear}-${newMonth}-01`);
    } else {
        const newYear =
            value.getMonth() === 0
                ? value.getFullYear() - 1
                : value.getFullYear();
        const newMonth = value.getMonth() !== 0 ? value.getMonth() : 12;
        return new Date(`${newYear}-${newMonth}-01`);
    }
}

function daysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate();
}

const Calendar: FC = () => {
    const [params, setParams] = useSearchParams();

    const dateParam =
        params.get("date") !== null
            ? new Date(params.get("date") as string)
            : new Date();

    const [date, setDate] = useState<Date>(dateParam);
    const [daysPage, setDaysPage] = useState<number>(
        Math.floor(date.getDate() / 12),
    );

    function monthAgo() {
        const d = new_date(date);
        setDate(d);
        setDaysPage(0);
        setParams({
            date: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`,
        });
    }

    function monthForward() {
        const d = new_date(date, true);
        setDate(d);
        setDaysPage(0);
        setParams({
            date: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`,
        });
    }

    function daysPageForward() {
        setDaysPage((state) => (state === 2 ? 0 : state + 1));
    }

    function daysPageBack() {
        setDaysPage((state) => (state === 0 ? 2 : state - 1));
    }

    function setDay(day: number) {
        setDate(
            (value) => new Date(value.getFullYear(), value.getMonth() + 1, day),
        );
        setParams({
            date: `${date.getFullYear()}-${date.getMonth() + 1}-${day}`,
        });
    }

    return (
        <div className={styles.calendar}>
            <div className={styles.calendar__month}>
                <button
                    className={styles.calendar__left}
                    onClick={monthAgo}
                ></button>
                <span>{`${month[date.getMonth()]} ${date.getFullYear()}`}</span>
                <button
                    className={styles.calendar__right}
                    onClick={monthForward}
                ></button>
            </div>
            <div className={styles.calendar__days}>
                <button
                    className={styles.calendar__left}
                    onClick={daysPageBack}
                ></button>
                {new Array(daysInMonth(date.getMonth() + 1, date.getFullYear()))
                    .slice(daysPage * 12, (daysPage + 1) * 12)
                    .fill(undefined)
                    .map((e, index) => (
                        <span
                            className={`${styles.day} ${
                                date.getDate() === index + 1 + daysPage * 12
                                    ? styles.active
                                    : ""
                            }`}
                            onClick={() => setDay(index + 1 + daysPage * 12)}
                            key={index}
                        >
                            {index + 1 + daysPage * 12}
                        </span>
                    ))}
                <button
                    className={styles.calendar__right}
                    onClick={daysPageForward}
                ></button>
                <div className={styles.line}></div>
            </div>
        </div>
    );
};
export default Calendar;
