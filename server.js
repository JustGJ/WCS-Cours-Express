import express from 'express';
import mongoose from 'mongoose';
import wilderController from './controllers/wilder';
import { wilderValidation } from './validations';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// autoIndex = vérifie si l'index dans la db est unique afin de ne pas duppliquer (accélération des données)

mongoose
    .connect(process.env.MONGO_URI, { autoIndex: true })
    .then(() => console.log('connecté à la db'))
    .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use('/wild', wildRoutes);

// routes
app.post('/api/wilder/create', wilderValidation.create, wilderController.create);

// Si route n'exite pas
app.use((req, res) => {
    res.send("Route qui n'existe pas", 404);
});

app.listen(3000, () => console.log('Server lancé sur le port 3000'));
