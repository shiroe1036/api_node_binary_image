import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import fs from 'fs';
import routes from './src/routes/routes';

dotenv.config();

const app = express();

var corsOptions = {
    origin: "http://localhost:8080"
};

mongoose.Promise = global.Promise;
mongoose.connect(process.env.URL_MONGODB).then(
    console.log('Notre base de donnée marche bien :) ;) ')
).catch(error => {
    console.log("mongo error ", error.message);
});

app.use(cors(corsOptions));
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

//notre lien initiale
app.get('/', (req, res) =>
    res.send(`notre serveur a été demarer sur le port : ${process.env.PORT}`)
);

app.listen(process.env.PORT || 8000, () => {
    const dir = './uploads'
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true }, err => console.log(err))
    }

    console.log(`Notre serveur est en marche dans le port ${process.env.PORT}`)
});