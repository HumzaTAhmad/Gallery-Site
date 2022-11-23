import React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import useStyles from './styles.js'


const Album = ({ album }) => {
    const classes = useStyles();
    
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={album.image} title={album.name}/>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => {}}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <CardContent>
                <Typography className={classes.title} variant="h5" gutterBottom>Album Name: {album.name}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => {}}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Album