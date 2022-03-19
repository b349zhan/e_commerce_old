import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { AppUser } from './models/app-user';
import { UserService } from './user.service';
import firebase from 'firebase/compat/app';
@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private user_service: UserService) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.auth.appUser$.pipe(
      map(user=>{
        return user.val().isAdmin;
      })
    )
  }
}
