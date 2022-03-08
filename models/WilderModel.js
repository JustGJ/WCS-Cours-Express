import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const WilderSchema = new Schema(
    {
        name: {
            //Forme longue
            type: String,
            unique: true,
            required: [true, 'Le nom est requis !'],
        },
        // name:  String // Forme courte
        city: { type: String, required: [true, 'La ville est requise !'] },
        skills: [
            {
                // Chaque skills pourra contenir un titre de type string et les votes de type number
                title: String,
                votes: Number,
            },
        ],
    },
    {
        versionKey: false,
    }
);

export default mongoose.model('wilder', WilderSchema); //ES6 type module

// module.exports = mongoose.model("Wilder", WilderSchema) //ES5
