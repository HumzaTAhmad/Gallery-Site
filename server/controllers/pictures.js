import pictureModel from '../models/pictureModel.js';
import axios from 'axios'

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
    const keyWord = "blue+balloon"
    const requestOne = await axios.get(`https://pixabay.com/api/?key=31235838-bd5758a4f626905b90d3a2998&q=${keyWord}&image_type=photo`);
    console.log(requestOne.data.hits)
    const image = requestOne.data.hits[1].userImageURL
    const size = requestOne.data.hits[1].imageSize
    const foundAt = new Date()
    try {
        const pictureData = new pictureModel({
            image: image,
            size: size,
            foundAt: foundAt
        })

        await pictureData.save();

        res.status(201).json(pictureData)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}