import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { ENV } from './config/env.js';

const START_SERVER = () => {
    const app = express();

    const corsOptions = {
        origin: '*',
        credentials: true,
        optionSuccessStatus: 200
    };

    app.use(cors(corsOptions));
    app.use(bodyParser.json());


    app.listen(ENV.PORT, () => {
        console.log(`3. Back-end Server is running successfully at http://${ENV.HOST}:${ENV.PORT}`);
    });

    app.get('/', async (req, res) => {
        res.end('Hello World');
    });
};

(
    async () => {
        try {
            // Connecting Database
            // Connected Database
            START_SERVER();
        } catch (error) {
            console.log(error);
            process.exit(0);
        }
    }
)();

