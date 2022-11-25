import mongoose from 'mongoose';
import internal from 'stream';


const pictureSchema = mongoose.Schema({
    id: String,
    image: String,
    foundAt: {
        type: Date,
    },
    size: Number
});

const pictureModel = mongoose.model('pictureModel', pictureSchema);

export default pictureModel;