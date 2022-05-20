import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { routes } from './routes';
import { AppError } from '@/shared/errors/AppError';
import { AppDataSource } from '@/shared/typeorm';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(
    (
        error: Error,
        request: Request,
        response: Response,
        next: NextFunction,
    ) => {
        if (error instanceof AppError) {
            return response.status(error.statusCode).json(error);
        }

        return response.status(500).json({
            response: 'Error',
            statusCode: 500,
            message: 'Internal server error',
        });
    },
);

app.listen(3333);
