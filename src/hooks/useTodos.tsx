import { useCollection } from "react-firebase-hooks/firestore";
import firebase_config from "../constants/firebase_config";
import { query, where, collection, doc } from "firebase/firestore";
import { ITodo } from "../interfaces/enteties/ITodo";

function toNumberDate(date: Date): number {
    const day = `${date.getDate()}`;
    const mm = `${date.getMonth()}`;
    const year = `${date.getFullYear()}`;
    const result = `${year}${mm.length === 1 ? "0" + mm : mm}${
        day.length === 1 ? "0" + day : day
    }`;
    return +result;
}

const useTodos = (date: Date, userId: string) => {
    const { firestore, firebase } = firebase_config;
    let q = null;
    let day: Date | number =
        firebase.firestore.Timestamp.fromDate(date).toDate();
    day = toNumberDate(day);
    q = query(
        collection(firestore, "todos"),
        where("date", "==", day),
        where("uid", "==", userId),
    );
    const [value, loading, error] = useCollection(q);

    return { todos: value, loading };
};

export default useTodos;
