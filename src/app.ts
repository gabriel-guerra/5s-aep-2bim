import express from 'express'
import { router } from './router';
import { sequelize } from './database';
import path from 'path';
import fs from 'fs';
import bookService from "./service/book.service";
import { Book } from './model/book.model';
import { User } from './model/user.model';
import { Reading } from './model/reading.model';
import { Certificate } from './model/certificate.model';
import userService from './service/user.service';

class App{
    express: express.Application
    
    constructor(){
        this.express = express();
        this.database();
        this.middleware();
        this.router();
        this.exposePublic();
        this.fillUsers();
        this.fillDatabase();
    }

    private async database(){
        sequelize.authenticate()
            .then(() => {
                console.log('Connected to database');
            })
            .catch(error => { 
                console.error('Unable to connect to the database:', error);
            })
    }

    private middleware(): void{
        this.express.use(express.json())
    }

    private router(){
        this.express.use(router);
    }

    private exposePublic(){ 
        this.express.use(express.static(path.join(__dirname, '..', "public")))
    }

    private async fillUsers(){
        await User.sync();
        const filePath = path.join(__dirname, '/mock/users.mock.json');
        const f = await userService.findAll();
        if (f.length === 0){
            fs.readFile(filePath, 'utf8', (err: any | null, data: string) => {
                if (err) {
                    console.error('Erro ao ler o arquivo:', err.message || err);
                    return;
                }
                
                try {
                    const books = JSON.parse(data);
                    books.forEach((book: any) => {
                    fetch('http://localhost:3000/user/create', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(book)
                    })
                    });
                } catch (err: any) {
                    console.error('Erro ao analisar o JSON:', err.message || err);
                }
            })
        }
    } 

    private async fillDatabase(){
        await Book.sync();
        await Reading.sync();
        await Certificate.sync();
        const filePath = path.join(__dirname, '/mock/books.mock.json');
        const f = await bookService.findAll();
        if (f.length === 0){
            fs.readFile(filePath, 'utf8', (err: any | null, data: string) => {
                if (err) {
                    console.error('Erro ao ler o arquivo:', err.message || err);
                    return;
                }
                
                try {
                    const books = JSON.parse(data);
                    books.forEach((book: any) => {
                    fetch('http://localhost:3000/book/create', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(book)
                    })
                    });
                } catch (err: any) {
                    console.error('Erro ao analisar o JSON:', err.message || err);
                }
            })
        }
    } 

}

export default new App().express;