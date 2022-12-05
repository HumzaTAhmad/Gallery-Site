import mongoose from 'mongoose';
import internal from 'stream';


const pictureSchema = mongoose.Schema({
    id: String,
    name: String,
    height: Number,
    width: Number,
    image: String,
    foundAt: {
        type: Date,
    },
    photographerName: String,
    link: String,
    description: String
});

const pictureModel = mongoose.model('pictureModel', pictureSchema);

export default pictureModel;