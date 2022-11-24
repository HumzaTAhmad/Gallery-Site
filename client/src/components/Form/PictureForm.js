import React, {useState} from 'react';
import { TextField, Button, Typography, Paper} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import useStyles from './styles.js'
import { createPicture } from '../../actions/pictures.js'

const PictureForm = ({ currentId }) => {
    const [pictureData, setPictureData] = useState({
        name:'',
        id: currentId
    })
    const classes = useStyles();

    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPicture(pictureData));
    }

    const clear = () => {

    }

    return (
        <Paper className={classes.paper}>
            <form autocomplete="off" noValidate className={`${classes.form} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Add a Picture</Typography>
                <TextField name="name" variant="outlined" label="Name" fullWidth value={pictureData.name} onChange={(e) => setPictureData({ ...pictureData, name: e.target.value })}/>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default PictureForm