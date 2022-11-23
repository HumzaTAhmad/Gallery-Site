import React, { useState } from 'react';
import { TextField, Button, Typography, Paper} from '@material-ui/core';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { createPicture, updatePicture } from '../../actions/pictures';

const Form = () => {
    const [pictureData, setPictureData] =  useState ({image: '', size: '', foundAt: '',});
    const classes = useStyles();
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPicture(pictureData));

    }

    const clear = () => {

    }


    return ( 
    <Paper className={classes.paper}>
        <form autoComplete="off" noValidate  className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6" > Search </Typography>
        <TextField 
        name='image' 
        variant= 'outlined' 
        label='Keyword' 
        fullWidth
        value={pictureData.image}
        onChange={(e) => setPictureData ({ ...pictureData, image: e.target.value})}
        />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
    </Paper> 
    );
}
 
export default Form;