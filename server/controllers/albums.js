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
     /*const client = createClient('563492ad6f91700001000001fc4cccc90e4a427b9d40abbcad65306f');
    const query = req.body.name
    
    const apiReq = await client.photos.search({ query, per_page: 1 })
    const img_id = apiReq.photos[0].id
    const image = `https://images.pexels.com/photos/${img_id}/pexels-photo-${img_id}.jpeg`
    const name = req.body.name
    const desc = req.body.description*/
    
    const image = "https://kinsta.com/wp-content/uploads/2020/04/Photo%20Gallery%20by%20GT3.jpg"
    const name = req.body.name
    const desc = req.body.description

    try {
        const albumData = new albumModel({
            image: image,
            name: name,
            description: desc
        })

        await albumData.save();

        res.status(201).json(albumData)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}