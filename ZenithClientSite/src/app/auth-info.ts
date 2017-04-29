
import {LoginModel} from './authentication/auth-model';

export class AuthInfo {

     static isAuth : boolean = false

     static userName : string = "Click here to Login"

     static isMemberOrAdmin : boolean = false

     constructor() {
         if(LoginModel.isAuth) {
             AuthInfo.isAuth = true;
             AuthInfo.userName = LoginModel.userName;
             AuthInfo.isMemberOrAdmin = LoginModel.isMA;
         }
     }
}
