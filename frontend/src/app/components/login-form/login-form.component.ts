
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
  public inputBoolStatesArray: boolean[] = [false, false, false];
  public isUsernameInputEmpty: boolean = true;
  public isSignInArrowShown: boolean = false;
  private inputFieldsNamesArray: string[] = ['username', 'password', 'confirm-password'];
  

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

  public handleClickInputAnimation(inputIndex: number): void {
    this.inputBoolStatesArray[inputIndex] = !this.inputBoolStatesArray[inputIndex];
    let inputHtmlElement: HTMLElement = document.getElementsByName(this.inputFieldsNamesArray[inputIndex]).item(0);
    this.inputBoolStatesArray[inputIndex] ? inputHtmlElement.focus() : inputHtmlElement.blur();
  }

  public handleInputAnimation(inputIndex: number, eventType: 'blur' | 'focus'): void {
    this.loginRequestObj.userName == "" ? (this.loginRequestObj.password = "", this.confirmPasswordInput = "") : null;
    switch(eventType){
      case 'blur':
        this.inputBoolStatesArray[inputIndex] = false;
        break;
      case 'focus':
        this.inputBoolStatesArray[inputIndex] = true;
        break;
    }
  }

  public handleUsernameEmptyStatus(): void {
    this.isUsernameInputEmpty = this.loginRequestObj.userName == "" ? true : false;
  }

  public handleSignInBtnDisplay(): void{
    if(this.loginRequestObj.userName != "" && this.loginRequestObj.password != "" && this.confirmPasswordInput != ""){
      this.isSignInArrowShown = true;
    } else {
      this.isSignInArrowShown = false;
    }
  }
}
