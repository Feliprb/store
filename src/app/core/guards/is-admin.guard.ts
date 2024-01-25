import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ERol } from 'src/app/shared/constants/rol.enum';
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {
  
  constructor(private sessionService: SessionService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree > | Promise<boolean | UrlTree > | boolean | UrlTree {
    if (this.sessionService.getRol() === ERol.ADMIN){
      return true;
    }else{
      //redirecion para nuevo logueo 
      this.router.navigateByUrl('portal/home');
      return false;
    }
  }
  
}
