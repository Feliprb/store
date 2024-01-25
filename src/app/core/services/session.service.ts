import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IUser } from 'src/app/shared/interfaces/user.interface';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private helper = new JwtHelperService();

  get token(){
    return this.storageService.getToken();
  }

  constructor(private storageService: StorageService) { }

  //métodos asociados al token

  private getUserData():IUser{
    //const token = this.storageService.getToken();
    if(this.token){
      return (this.helper.decodeToken(this.token))
    }
    return this.helper.decodeToken();
  }

  getRol():string{
    return this.getUserData().rol;
  }

  isAuthenticated():boolean{
    return  Boolean(this.token && this.isTokenExpired());
  }

  isTokenExpired(): boolean{
    return this.helper.isTokenExpired(this.token);
  }



}
