import { Injectable } from '@angular/core';
import { User } from '../model/user';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserService {

  constructor() { }

  getSessionUser(): User{
    const decoded = jwt_decode(localStorage.getItem("access_token"));
    if (!decoded || decoded.exp === undefined) {
      return null;
    }

    const user = new User()
    user.isAdmin = decoded.isAdmin
    user.username = decoded.name

    return user;
  }
}