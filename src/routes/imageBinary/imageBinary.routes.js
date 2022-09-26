import multer from 'multer';
import { uploadB, fetchBinary, fetchAll } from '../../controllers/ImageBinaryController';

const storage = multer.memoryStorage();
const upload = multer({ storage });

const testImageBRoute = (app) => {
    app.route('/imageB/:idImage?')
        .post(upload.single('image'), uploadB)
        .get(fetchBinary)
    app.get('/images', fetchAll);
}

export default testImageBRoute;