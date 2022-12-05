import React from 'react';
import moment from 'moment';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import useStyles from './styles.js'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { deletePicture } from '../../../actions/pictures.js'

const Picture = ({ picture, setCurrentPictureId }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const navigate = useNavigate()


    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={picture.image} title={picture.name}/>
            <div className={classes.overlay}>
                <Typography variant="body2">{moment(picture.foundAt).fromNow()}</Typography>
            </div>
            <CardContent>
                <Typography className={classes.title} variant="h5" gutterBottom>Title: {picture.name}</Typography>
                <Typography className={classes.title} variant="h5" gutterBottom>Dimensions: {picture.width}px X {picture.height}px</Typography>
                <Typography className={classes.title} variant="h5" gutterBottom>Photographer: {picture.photographerName}</Typography>
                <Typography className={classes.title} variant="h5" gutterBottom>Description: {picture.description}</Typography>
                <a style={{textDecoration: 'none'}} href={picture.link}><Button variant="contained" className={classes.buttonEnter}><Typography className={classes.title} variant="h5" gutterBottom>Link to Image</Typography></Button></a>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button style={{color: 'purple'}} size="small" color="primary" onClick={() => dispatch(deletePicture(picture._id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
                <Button style={{color: 'purple'}} size="small" onClick={() => setCurrentPictureId(picture._id)}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </CardActions>
        </Card>
    )
}

export default Picture