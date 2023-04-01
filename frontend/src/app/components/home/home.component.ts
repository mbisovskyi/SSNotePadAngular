import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from 'src/app/models/authentication';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterContentInit {

  public userInfoObj: LoginResponse = new LoginResponse();

  constructor(private router: Router) {}

  ngAfterContentInit(): void {
    this.userInfoObj = JSON.parse(JSON.stringify(sessionStorage.getItem('userInfo')));
    this.userInfoObj == null ? this.router.navigateByUrl("Login") : null;
  }

  ngOnInit(): void {}

}
