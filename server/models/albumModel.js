import mongoose from 'mongoose';
import internal from 'stream';


const albumSchema = mongoose.Schema({
    image: String,
    name: String,
    description: String
});

const albumModel = mongoose.model('albumModel', albumSchema);

export default albumModel;