export class AppError {
    public readonly statusCode: number;
    public readonly message: string;

    constructor(statusCode: number, message: string) {
        this.message = message;
        this.statusCode = statusCode;
    }
}
