import { IUser } from "../interfaces/enteties/IUser";
import firebase_config from "../constants/firebase_config";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";

const { auth, firestore, firebase } = firebase_config;

class FireBaseApi {
    static async logInGoogle(): Promise<IUser | null> {
        const provider = new firebase.auth.GoogleAuthProvider();
        const { user } = await auth.signInWithPopup(provider);
        if (!user) return null
        return {
            uid: (user as IUser).uid,
            email: (user as IUser).email,
            displayName: (user as IUser).displayName,
            photoURL: (user as IUser).photoURL
        }
    }
    static async logInGitHub(): Promise<IUser | null> {
        const provider = new firebase.auth.GithubAuthProvider();
        const { user } = await auth.signInWithPopup(provider);
        if (!user) return null
        return {
            uid: (user as IUser).uid,
            email: (user as IUser).email,
            displayName: (user as IUser).displayName,
            photoURL: (user as IUser).photoURL
        }
    }
    static async logout(): Promise<number> {
        await auth.signOut();
        return 200;
    }

    static async addTodo(title: string, content: string, date: number, userId: unknown) {
        const data = await firestore.collection("todos").add({
            uid: userId,
            title,
            content,
            completed: false,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            date
        });
        return data;
    }

    static async deleteTodo(id: string) {
        await deleteDoc(doc(firestore, "todos", id));
    }

    static async toggleComplete(id: string, value: boolean) {
        const docRef = doc(firestore, "todos", id);
        updateDoc(docRef, {
            completed: value,
        });
    }
}

export default FireBaseApi;