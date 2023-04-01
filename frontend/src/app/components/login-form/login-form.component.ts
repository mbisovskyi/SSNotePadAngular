
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { transition, trigger, style, animate, state } from '@angular/animations';
import { LoginRequest, LoginResponse } from 'src/app/models/authentication';
import { CommonApi } from 'src/app/services/commonApi';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  animations: [
    trigger('openInput1', [
      state('Closed', style({ left: 0 })),
      state('Opened', style({ left: '11rem' })),
      transition('* => *', animate('0.3s ease-in-out')),
    ]),
    trigger('openInput2', [
      state('Closed', style({ left: 0 })),
      state('Opened', style({ left: '11rem' })),
      transition('* => *', animate('0.3s ease-in-out')),
    ]),
    trigger('openInput3', [
      state('Closed', style({ left: 0 })),
      state('Opened', style({ left: '11rem' })),
      transition('* => *', animate('0.3s ease-in-out')),
    ]),
  ],
})
export class LoginFormComponent implements OnInit{

  public loginRequestObj: LoginRequest = new LoginRequest();
  public loginResponseObj: LoginResponse = new LoginResponse();
  public confirmPasswordInput: string = "";
  public isInput1Open: boolean = false;
  public isInput2Open: boolean = false;
  public isInput3Open: boolean = false;
  

  constructor(private router: Router, private commonApiService: CommonApi) {}

  ngOnInit(): void {}

  public loginUser(): void {
    this.loginRequestObj.isPasswordConfirmed = this.loginRequestObj.password == this.confirmPasswordInput ? true : false;
    this.commonApiService.loginUser(this.loginRequestObj).subscribe({
      next: (response: LoginResponse) => {
        this.catchLoginResponse(response);
        sessionStorage.setItem('userInfo', JSON.stringify(response));
        this.router.navigateByUrl("Home", {state: {isLoggedIn: true}});
      }
    })

  }

  private catchLoginResponse(apiResponse: object): void {
    this.loginResponseObj = JSON.parse(JSON.stringify(apiResponse));
  }

  public handleOpenInputAnimation(inputNumber: number): void {
    switch (inputNumber) {
      case 1:
        this.isInput1Open = !this.isInput1Open;
        break;
      case 2:
        this.isInput2Open = !this.isInput2Open;
        break;
      case 3:
        this.isInput3Open = !this.isInput3Open;
        break;
    }
  }
}
