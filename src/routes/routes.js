import testImageBRoute from "./imageBinary/imageBinary.routes";
import { SpecialityRoutes } from "./Speciality/Speciality.Routes";

const routes = (app) => {
    SpecialityRoutes(app);
    testImageBRoute(app);
};

export default routes;