import express from 'express'
import { router } from './router';
import { sequelize } from './database';

class App{
    express: express.Application
    
    constructor(){
        this.express = express();
        this.database();
        this.middleware();
        this.router();
    }

    private database(){
        sequelize.authenticate()
            .then(() => {
                console.log('Connected to database');
            }).catch(error => { 
                console.error('Unable to connect to the database:', error);
            })
    }

    private middleware(): void{
        this.express.use(express.json())
    }

    private router(){
        this.express.use(router);
    }

}

export default new App().express;