import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';


export class App{
    private express: express.Application;
    private porta = 9000;

    constructor() {
        this.express = express();
        this.listen();
        this.middlewares();
        this.database();
    }
    public getApp(): express.Application {
        return this.express;
    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
    }

    private listen(): void {
        this.express.listen(this.porta, () => {
            console.log('Servidor iniciado na porta ' + this.porta);
        });
    }
    private database(): void {
        mongoose.connect('mongodb+srv://samuka:Senha@cluster0.sxsxfww.mongodb.net/?retryWrites=true&w=majority');
    }
}