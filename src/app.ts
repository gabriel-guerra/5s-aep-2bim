import express from 'express'
import { router } from './router';
import { sequelize } from './database';
import path from 'path';

class App{
    express: express.Application
    
    constructor(){
        this.express = express();
        this.database();
        this.middleware();
        this.router();
        this.exposePublic();
    }

    private database(){
        sequelize.authenticate()
            .then(() => {
                console.log('Connected to database');
                sequelize.sync();
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

}

export default new App().express;