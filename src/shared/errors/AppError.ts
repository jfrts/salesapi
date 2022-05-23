export class AppError {
    public readonly response: string;
    public readonly statusCode: number;
    public readonly message: string;

    constructor(statusCode = 400, message: string) {
        this.response = 'Error';
        this.statusCode = statusCode;
        this.message = message;
    }
}
