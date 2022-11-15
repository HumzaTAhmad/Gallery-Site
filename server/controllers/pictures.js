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
    const keyWord = "yellow-balloon"
    const requestOne = await axios.get(`https://pixabay.com/api/?key=31235838-bd5758a4f626905b90d3a2998&q=${keyWord}&image_type=photo`);
    console.log(requestOne.data.hits[1])
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

export const updatePicture = async(req, res) => {
    console.log(req.params)
    const {id} = req.params
    const picture = req.body;
    
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No pic with that id');

    const updatedPicture = await accountModel.findByIdAndUpdate(id, picture, {new: true});
    
    res.json(updatedPicture);
}

export const deletePicture = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No acc with that id');

    await accountModel.findByIdAndRemove(id);


    res.json({ message: 'Picture deleted successfully' })
}