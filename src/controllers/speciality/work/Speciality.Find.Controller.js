const diacriticSensitiveRegex = (string = '') => {
    return string.replace(/a/g, '[a,á,à,ä]')
       .replace(/e/g, '[e,é,ë]')
       .replace(/i/g, '[i,í,ï]')
       .replace(/o/g, '[o,ó,ö,ò]')
       .replace(/u/g, '[u,ü,ú,ù]');
}

export const FindSpeciality = async (req, res, Speciality) => {
    try {
        const search = req.query.search;

        const speciality = await Speciality.find({
            nameSpeciality: { $regex: diacriticSensitiveRegex(search), $options: 'i' }
        });

        res.status(200).json({
            error: false,
            message: speciality
        });
    } catch (error) {
        return res.status(400).json({
            error: true,
            message:error.message
        });
    }
} 