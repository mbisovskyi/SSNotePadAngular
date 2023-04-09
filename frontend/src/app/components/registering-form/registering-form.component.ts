import { Component, OnInit} from '@angular/core';
import { transition, trigger, style, animate, state } from '@angular/animations';
import { RegisterRequest, RegisterResponse } from 'src/app/models/authentication';
import { Router } from '@angular/router';
import { CommonApi } from 'src/app/services/commonApi';


@Component({
  selector: 'app-registering-form',
  templateUrl: './registering-form.component.html',
  styleUrls: ['./registering-form.component.css'],
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
    trigger('openInput4', [
      state('Closed', style({ left: 0 })),
      state('Opened', style({ left: '11rem' })),
      transition('* => *', animate('0.3s ease-in-out')),
    ]),
  ],
})
export class RegisteringFormComponent implements OnInit{

  public registerRequestObj: RegisterRequest = new RegisterRequest();
  public confirmPasswordInput: string = "";
  public inputBoolStatesArray: boolean[] = [false, false, false, false];
  public isUsernameInputEmpty: boolean = true;
  private inputFieldsNamesArray: string[] = ['username', 'password', 'confirm-password', 'email'];
  
  constructor(private router: Router, private commonApiService: CommonApi) {}

  ngOnInit(): void {}

  public handleOnSubmitRegisterForm(): void {
    this.registerRequestObj.isPasswordConfirmed = this.registerRequestObj.password == this.confirmPasswordInput ? true : false;
    this.commonApiService.registerUser(this.registerRequestObj).subscribe({
      next: (response: RegisterResponse) => {
        console.log(response);
      }
    })
  }

  public handleClickInputAnimation(inputIndex: number): void {
    this.inputBoolStatesArray[inputIndex] = !this.inputBoolStatesArray[inputIndex];
    let inputHtmlElement: HTMLElement = document.getElementsByName(this.inputFieldsNamesArray[inputIndex]).item(0);
    this.inputBoolStatesArray[inputIndex] ? inputHtmlElement.focus() : inputHtmlElement.blur();
  }

  public handleInputAnimation(inputIndex: number, eventType: 'blur' | 'focus'): void {
    this.registerRequestObj.userName == "" ? (this.registerRequestObj.password = "", this.confirmPasswordInput = "") : null;
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
    this.isUsernameInputEmpty = this.registerRequestObj.userName == "" ? true : false;
  }
}
