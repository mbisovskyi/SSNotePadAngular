
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest, LoginResponse } from 'src/app/models/authentication';
import { CommonApi } from 'src/app/services/commonApi';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public loginRequestObj: LoginRequest = new LoginRequest();
  public loginResponseObj: LoginResponse = new LoginResponse();
  public confirmPasswordInput: string = "";

  constructor(private router: Router, private commonApiService: CommonApi) {}

  ngOnInit(): void {}

  public loginUser(): void {
    this.loginRequestObj.isPasswordConfirmed = this.loginRequestObj.password == this.confirmPasswordInput ? true : false;
    this.commonApiService.loginUser(this.loginRequestObj).subscribe({
      next: (response: LoginResponse) => {
        this.catchLoginResponse(response);
        sessionStorage.setItem('userInfo', JSON.stringify(response));
        this.router.navigateByUrl("Home");
      }
    })

  }

  private catchLoginResponse(apiResponse: object): void {
    this.loginResponseObj = JSON.parse(JSON.stringify(apiResponse));
  }
}
