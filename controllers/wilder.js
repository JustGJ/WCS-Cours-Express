//Create, Read, Update, Delete
import { listErrors } from '../utils/tools';
import WilderModel from './../models/WilderModel';
import mongoose from 'mongoose';

export default {
    create: (req, res) => {
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
    all: (req, res) => {
        WilderModel.find()
            .then((result) => {
                res.json({ success: true, result });
            })
            .catch((err) => {
                res.json({ success: false, result: listErrors(err) });
            });
    },
    delete: (req, res) => {
        const { _id } = req.body;
        WilderModel.deleteOne({ _id })
            .then((result) => {
                if (result.deletedCount === 0) {
                    return res.json({
                        success: false,
                        result: "Cet identifiant n'existe pas",
                    });
                }
                res.json({
                    success: true,
                    result,
                });
            })
            .catch((err) => {
                res.json({ success: false, result: listErrors(err) });
            });
    },
    update: (req, res) => {
        const { _id, name, city, skills } = req.body;
        WilderModel.updateOne({ _id }, { name, city, skills }).then((result) => {
            if (result.matchedCount === 0) {
                return res.json({
                    success: false,
                    result: "Cet identifiant n'existe pas",
                });
            }
            res.json({ success: true, result }).catch((err) => {
                res.json({ success: false, result: listErrors(err) });
            });
        });
    },
    find: (req, res) => {
        const { _id } = req.params;
        WilderModel.findOne({ _id })
            .then((result) => {
                if (!result) {
                    return res.json({ success: false, result: "cet id n'exit pas" });
                }
                res.json({ success: true, result });
            })
            .catch((err) => {
                console.log(err);
            });
    },
};
