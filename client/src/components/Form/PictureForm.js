import React, {useState, useEffect} from 'react';
import { TextField, Button, Typography, Paper} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import useStyles from './styles.js'
import { createPicture, updatePicture } from '../../actions/pictures.js'

const PictureForm = ({ currentPictureId, setCurrentPictureId, currentId }) => {
    const [pictureData, setPictureData] = useState({
        name:'',
        description:'',
        id: currentId
    })
    const picture = useSelector((state) => currentPictureId ? state.pictures.find((p) => p._id === currentPictureId): null);
    const classes = useStyles();

    const dispatch = useDispatch();
    
    useEffect(() => {
        if(picture) setPictureData(picture);
    }, [picture])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentPictureId) {
            dispatch(updatePicture(currentPictureId, pictureData))
        }else{
            dispatch(createPicture(pictureData));
        }
        clear();
    }

    const clear = () => {
        setCurrentPictureId(null)
        setPictureData({name:'', description:'', id: currentId})
    }

    return (
        <Paper className={classes.paper}>
            <form autocomplete="off" noValidate className={`${classes.form} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentPictureId ? 'Editing' : 'Creating'} a Picture</Typography>
                <TextField name="name" variant="outlined" label="Name" fullWidth value={pictureData.name} onChange={(e) => setPictureData({ ...pictureData, name: e.target.value })}/>
                <TextField name="description" variant="outlined" label="Description" fullWidth value={pictureData.description} onChange={(e) => setPictureData({ ...pictureData, description: e.target.value })}/>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button className={classes.secondButton} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default PictureForm