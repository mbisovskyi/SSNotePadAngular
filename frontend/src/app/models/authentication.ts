export class LoginRequest {
    userName: string = "";
    password: string = "";
    isPasswordConfirmed: boolean = false;
}

export class LoginResponse {
    userId: number = 0;
    userName: string = "";
    firstName: string = "";
    isOwnerOperator: boolean = false;
    token: string = "";
}