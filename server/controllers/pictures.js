import pictureModel from '../models/pictureModel.js';

export const getPictures = async (req, res) => {
    try {
        const pictures = await pictureModel.find();

        console.log(pictures);

        res.status(200).json(pictures);
    } catch(error) {
        res.status(404).json({message: error.message})
    }
}

export const createPicture = async (req, res) => {
    const pictureData = req.body;
    const newPicture = new pictureModel(pictureData)
    try {
        await newPicture.save();

        res.status(201).json(newPicture)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}