import mongoose from 'mongoose';
import internal from 'stream';


const pictureSchema = mongoose.Schema({
    image: String,
    foundAt: {
        type: Date,
    },
    size: Number
});

const pictureModel = mongoose.model('accountModel', pictureSchema);

export default pictureModel;