import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  appUser: any;
  constructor(private auth:AuthService) {
    auth.appUser$.subscribe(user=>{
      this.appUser = user.val();
    })
  }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout();
    this.appUser = null;
  }
}
