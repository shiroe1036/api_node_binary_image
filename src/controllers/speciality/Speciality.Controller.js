import mongoose from 'mongoose';
import {
    SpecialitySchema
} from '../../models/speciality';
import { FindSpeciality } from './work/Speciality.Find.Controller';

const Speciality = mongoose.model('Speciality', SpecialitySchema);

class SpecialityController
{
    FindSpeciality(req, res){
        return FindSpeciality(req, res, Speciality);
    }
}

export default new SpecialityController();