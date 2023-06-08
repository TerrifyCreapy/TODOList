import { makeAutoObservable } from "mobx";
import { IUser } from "../interfaces/enteties/IUser";
import FireBaseApi from "../api/firebase.api";

class UserStore {

    user:IUser|null|undefined = null;
    isAuth = false;

    rootStore: unknown;

    constructor(rootStore: unknown) {
        makeAutoObservable(this);
        this.rootStore = rootStore;
    }

    async setUser(isGoogle = false) {
        let user = null;
        console.log("awdwd", isGoogle)
        if(isGoogle)
            {user = await FireBaseApi.logInGoogle();}
        else{
            console.log("github")
            user = await FireBaseApi.logInGitHub();
        }
        this.user = user;
        
        if(user) {
            this.isAuth = true;
            return true;
        }
        return false;
    }

    async logOut() {
        const logOut = await FireBaseApi.logout();
        if(logOut === 200) {
            this.user = null;
            this.isAuth = false;
        }
        return logOut;
    }

    checkAuthUser(user: IUser | null | undefined) {
        if(!user) return;
        this.user = user;
        this.isAuth = true;
    }

    getAuth() {
        return this.isAuth;
    }

}

export default UserStore;