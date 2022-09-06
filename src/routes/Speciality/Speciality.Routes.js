import SpecialityController from "../../controllers/Speciality/Speciality.Controller";

export const SpecialityRoutes = (app) => {
    app.get('/speciality/find', SpecialityController.FindSpeciality);
}