export class User {
    private _login: string;
    private _id: number;
    private _type: string;
    private _company: string;
    private _bio: string;
    private _location: string;
    private _avatar: string;

    constructor(){}

    get login(){
        return this.login;
    }

    set login(v: string){
        this.login = v;
    }
}