import { combineReducers } from 'redux';

import albums from './albums.js'
import pictures from './pictures.js'

export default combineReducers({
    albums,
    pictures
})