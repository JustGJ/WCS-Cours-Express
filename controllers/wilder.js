//Create, Read, Update, Delete
import { listErrors } from '../utils/tools';
import WilderModel from './../models/WilderModel';

export default {
    create: (req, res, next) => {
        //post
        const { name, city, skills } = req.body;

        WilderModel.init().then(() => {
            const wilder = new WilderModel({
                name,
                city,
                skills,
            });
            wilder
                .save()
                .then((result) => {
                    res.json({ success: true, result });
                })
                .catch((err) => {
                    res.status(400).json({
                        success: false,
                        result: listErrors(err),
                    });
                });
        });
    },
};
