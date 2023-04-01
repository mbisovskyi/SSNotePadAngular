import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from 'src/app/models/authentication';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterContentChecked {

  public activePath: string = "";
  public isLoggedIn: boolean = false;
  protected userInfoObj?: LoginResponse;

  constructor(private router: Router) { }

  ngOnInit(): void {}

  ngAfterContentChecked(): void {
    this.activePath = window.location.pathname.replace("/", "");
  }

  public handleLogout(): void {
    sessionStorage.removeItem('userInfo');
    this.isLoggedIn = false;
    this.router.navigateByUrl("Login");
  }
}
