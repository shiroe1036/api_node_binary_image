import mongoose from 'mongoose';
import { ImageBinarySchema } from '../models/ImageBinary';
import sharp from 'sharp';

const ImageB = mongoose.model('ImageB', ImageBinarySchema);

export const uploadB = async (req, res) => {
    try {
        const MIME_TYPES = {
            'image/jpg': 'jpg',
            'image/jpeg': 'jpg',
            'image/png': 'png'
        };

        const { buffer, originalname, mimetype } = req.file;
        const name = originalname.split(' ').join('_')
        const extension = MIME_TYPES[mimetype];

        const timestamp = new Date().toISOString();
        const ref = `${timestamp}-${name}.${extension}`;

        const bufferSharp = await sharp(buffer)
            .jpeg({ quality: 20 })
            .toBuffer();

        const dataToSave = {
            imageB: bufferSharp
        };

        const dataImageB = new ImageB(dataToSave);
        const saveIB = await dataImageB.save();

        res.status(201).json(saveIB);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

export const fetchBinary = async (req, res) => {
    try {
        const idImage = req.params.idImage;

        const image = await ImageB.findOne({ _id: idImage });
        const valueImg = image.imageB;
        const buffer = Buffer.from(valueImg);
        res.header('Content-Type', 'image/png');
        res.send(valueImg)
        // const imgData = new Blob(buffer, { type: 'application/octet-binary' });
        // let link = URL.createObjectURL(imgData);

        // let img = new Image();
        // img.onload = () => URL.revokeObjectURL(link);
        
        // res.send(img.src = link)
    } catch (error) {
        return res.status(400).json(error.message);
    }
}