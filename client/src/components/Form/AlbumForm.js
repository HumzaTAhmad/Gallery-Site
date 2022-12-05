import React, {useState, useEffect} from 'react';
import { TextField, Button, Typography, Paper} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import useStyles from './styles.js';
import { createAlbum, updateAlbum} from '../../actions/albums.js';

const AlbumForm = ({currentAlbumId, setCurrentAlbumId}) => {
    const [albumData, setAlbumData] = useState({
        name:'',
        description: ''
    })
    const album = useSelector((state) => currentAlbumId ? state.albums.find((a) => a._id === currentAlbumId): null)
    const classes = useStyles()

    const dispatch = useDispatch()
    
    useEffect(() => {
        if(album) setAlbumData(album)
    }, [album])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentAlbumId) {
            dispatch(updateAlbum(currentAlbumId, albumData))
        }else{
            dispatch(createAlbum(albumData))
        }
        clear();
    }

    const clear = () => {
        setCurrentAlbumId(null)
        setAlbumData({name:'', description:''})
    }

    return (
        <Paper className={classes.paper}>
            <form autocomplete="off" noValidate className={`${classes.form} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentAlbumId ? 'Editing' : 'Creating'} an Album</Typography>
                <TextField name="name" variant="outlined" label="Name" fullWidth value={albumData.name} onChange={(e) => setAlbumData({ ...albumData, name: e.target.value })}/>
                <TextField name="description" variant="outlined" label="Description" fullWidth value={albumData.description} onChange={(e) => setAlbumData({ ...albumData, description: e.target.value })}/>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button className={classes.secondButton} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default AlbumForm