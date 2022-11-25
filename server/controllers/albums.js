import albumModel from '../models/albumModel.js';
import axios from 'axios'

export const getAlbums = async (req, res) => {
    try {
        const albums = await albumModel.find();
        console.log("Get albums ran");

        res.status(200).json(albums);
    } catch(error) {
        res.status(404).json({message: error.message})
    }
}

export const createAlbum = async (req, res) => {
    const image = "https://kinsta.com/wp-content/uploads/2020/04/Photo%20Gallery%20by%20GT3.jpg"
    const name = req.body.name

    try {
        const albumData = new albumModel({
            image: image,
            name: name
        })

        await albumData.save();

        res.status(201).json(albumData)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}