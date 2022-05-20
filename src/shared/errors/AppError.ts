export class AppError {
    public readonly response: string;
    public readonly statusCode: number;
    public readonly message: string;

    constructor(message: string, statusCode = 400) {
        this.response = 'Error';
        this.statusCode = statusCode;
        this.message = message;
    }
}
