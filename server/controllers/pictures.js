import pictureModel from '../models/pictureModel.js';
import { createClient } from 'pexels'
import axios from 'axios'
import mongoose from 'mongoose';

export const getPictures = async (req, res) => {
    try {
        const pictures = await pictureModel.find();
        res.status(200).json(pictures);
    } catch(error) {
        res.status(404).json({message: error.message})
    }
}

/*export const createPicture = async (req, res) => {
    console.log(req.body.name)
    const keyWord = req.body.name
    const requestOne = await axios.get(`https://pixabay.com/api/?key=31235838-bd5758a4f626905b90d3a2998&q=${keyWord}&image_type=photo`);
    
    const image = requestOne.data.hits[1].userImageURL
    const size = Math.floor((requestOne.data.hits[1].imageSize) / 1000);
    const foundAt = new Date()
    const id = req.body.id
    try {
        const pictureData = new pictureModel({
            image: image,
            size: size,
            foundAt: foundAt,
            id: id
        })

        await pictureData.save();

        res.status(201).json(pictureData)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}*/

export const createPicture = async (req, res) => {
    const client = createClient('563492ad6f91700001000001fc4cccc90e4a427b9d40abbcad65306f');
    const query = req.body.name
    const desc = req.body.description
    
    const apiReq = await client.photos.search({ query, per_page: 1 })
    console.log(apiReq)
    const name = apiReq.photos[0].alt
    const updateName = name.split(" ").join("-").toLowerCase();
    const height = apiReq.photos[0].height
    const width = apiReq.photos[0].width
    const avgColor = apiReq.photos[0].avg_color
    const img_id = apiReq.photos[0].id
    const image = `https://images.pexels.com/photos/${img_id}/pexels-photo-${img_id}.jpeg`
    const foundAt = new Date()
    const photographerName = apiReq.photos[0].photographer
    const link = apiReq.photos[0].url
    const id = req.body.id

    try {
        const pictureData = new pictureModel({
            id: id,
            name: name,
            height: height,
            width: width,
            description: desc,
            image: image,
            foundAt: foundAt,
            link: link,
            photographerName: photographerName
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

    const updatedPicture = await pictureModel.findByIdAndUpdate(id, picture, {new: true});
    
    res.json(updatedPicture);
}

export const deletePicture = async(req, res) => {
    console.log("This runs")
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No acc with that id');

    await pictureModel.findByIdAndRemove(id);

    

    res.json({ message: 'Picture deleted successfully' })
}
