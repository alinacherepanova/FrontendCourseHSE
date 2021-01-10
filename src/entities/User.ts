// @ts-ignore
import * as Firebase from "./firebase/firebase";

export interface IUser {
    id: string;
    email: string;
    name: string;
}

export interface IUerHash {
    [key: string]: IUser;
}

export default class User implements IUser {
    public email: string;
    public id: string;
    public name: string;

    constructor(user: Firebase.User) {
        this.id = user.uid;
        this.email = user.email || '';
        this.name = user.displayName || '';
    }
}