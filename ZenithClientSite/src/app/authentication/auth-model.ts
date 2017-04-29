export class AuthModel {
    userName: string
    passWord: string
}


export class LoginModel {
    public static isAuth: boolean = false;
    public static userName : string = "";
    public static isMA : boolean = false;
}