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
    console.log("create albums ran")
    const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_AOKi5KBBmGziHk2ejFnksQbfzU-FGuEAdg&usqp=CAU.png"
    const name = "flowers"

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