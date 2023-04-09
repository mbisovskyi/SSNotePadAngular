export class LoginRequest {
    userName: string = "";
    password: string = "";
    isPasswordConfirmed: boolean = false;
}

export class LoginResponse {
    userId: number = 0;
    userName: string = "";
    token: string = "";
}

export class RegisterRequest extends LoginRequest {
    email: string = "";
}

export class RegisterResponse {
    userId: number = 0;
    userName: string = "";
    email: string = "";
}