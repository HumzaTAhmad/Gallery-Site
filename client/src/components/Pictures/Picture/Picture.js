import React from 'react';
import moment from 'moment';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import useStyles from './styles.js'
import { useDispatch } from 'react-redux'

import { deletePicture } from '../../../actions/pictures.js'

const Picture = ({ picture }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={picture.image} title={picture.name}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{picture.name}</Typography>
                <Typography variant="body2">{moment(picture.foundAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => {}}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <CardContent>
                <Typography className={classes.title} variant="h5" gutterBottom>Picture height: {picture.height} px</Typography>
                <Typography className={classes.title} variant="h5" gutterBottom>Picture width: {picture.width} px</Typography>
                <Typography className={classes.title} variant="h5" gutterBottom>Photographer: {picture.photographerName}</Typography>
                <Typography className={classes.title} variant="h5" gutterBottom>Description: {picture.description}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button style={{color: 'purple'}} size="small" color="primary" onClick={() => dispatch(deletePicture(picture._id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
                <Button style={{color: 'purple'}} size="small" onClick={() => {}}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </CardActions>
        </Card>
    )
}

export default Picture