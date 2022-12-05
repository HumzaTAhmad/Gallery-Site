import React, { useEffect, useState }from 'react';
import { useDispatch } from 'react-redux';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import useStyles from './styles.js'
import { getPictures } from '../../../actions/pictures.js'
import { useNavigate } from 'react-router-dom'

import { deleteAlbum } from '../../../actions/albums.js'

const Album = ({ album, setCurrentAlbumId, currentId, setCurrentId, setShowBack }) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const navi = () => {
        setCurrentId(album.name)
        setShowBack(true)
        navigate('/pictures')
    }

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={album.image} title={album.name}/>
            <div className={classes.overlay2}>
            </div>
            <CardContent>
                <Typography className={classes.title} variant="h5" gutterBottom>Album Name: {album.name}</Typography>
                <Typography className={classes.title} variant="h5" gutterBottom>Description: {album.description}</Typography>
                <Button variant="contained" className={classes.buttonEnter} onClick={navi}><Typography className={classes.title} variant="h5" gutterBottom>Enter album</Typography></Button>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button style={{color: 'purple'}} size="small" onClick={() => dispatch(deleteAlbum(album._id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
                <Button style={{color: 'purple'}} size="small" onClick={() => setCurrentAlbumId(album._id)}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </CardActions>
        </Card>
    )
}

export default Album