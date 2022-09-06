import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const SpecialitySchema = new Schema({
    nameSpeciality: {
        type: String,
        required: "Nom du spécialité obligatoire"
    },
}, {
    timestamps: true
});