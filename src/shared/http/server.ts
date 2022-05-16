import 'reflect-metadata';
import express, { NextFunction, Request, response, Response } from 'express';
import cors from 'cors';
import { routes } from './routes';
import { AppError } from '@/shared/errors/AppError';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(
    (error: Error, request: Request, reponse: Response, next: NextFunction) => {
        if (error instanceof AppError) {
            return response.status(error.statusCode).json(error.getError());
        }

        return response.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    },
);

app.listen(3333);
