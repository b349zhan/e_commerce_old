import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute } from '@angular/router';
import firebase from 'firebase/compat/app';
import { DataSnapshot } from 'firebase/database';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$:Observable<firebase.User|null>;

  constructor(private auth: AngularFireAuth, private route: ActivatedRoute, private user_service: UserService) { 
    this.user$ = auth.authState;
  }

  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl',returnUrl);
    this.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.auth.signOut();
  }

  get appUser$(){
    return this.user$.pipe(switchMap(
      (user)=>{
        if (user) return this.user_service.get(user.uid);
        return of();
      }
    ));
  }
}
