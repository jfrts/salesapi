type appErrorResponse = {
    status: string;
    message: string;
};

class AppError {
    public readonly statusCode: number;
    public readonly message: string;

    constructor(statusCode: number, message: string) {
        this.statusCode = statusCode;
        this.message = message;
    }

    getError(): appErrorResponse {
        return {
            status: 'error',
            message: this.message,
        };
    }
}

export { AppError };
