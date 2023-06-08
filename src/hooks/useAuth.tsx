import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "../constants/firebase_config";

const useAuth = () => {
    const { auth } = firebase;
    const [user, loading, errors] = useAuthState(auth as any);
    return { user, loading, errors };
};

export default useAuth;
