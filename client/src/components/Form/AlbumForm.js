import React, {useState} from 'react';
import { TextField, Button, Typography, Paper} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import useStyles from './styles.js'
import { createAlbum } from '../../actions/albums.js'

const AlbumForm = () => {
    const [albumData, setAlbumData] = useState({
        name:''
    })
    const classes = useStyles();

    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createAlbum(albumData));
    }

    const clear = () => {

    }

    return (
        <Paper className={classes.paper}>
            <form autocomplete="off" noValidate className={`${classes.form} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Add an Album</Typography>
                <TextField name="name" variant="outlined" label="Name" fullWidth value={albumData.name} onChange={(e) => setAlbumData({ ...albumData, name: e.target.value })}/>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button className={classes.secondButton} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default AlbumForm