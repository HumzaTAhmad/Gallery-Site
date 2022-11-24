import React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import useStyles from './styles.js'


const Picture = ({ picture }) => {
    const classes = useStyles();
    
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={picture.image} title={picture.name}/>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => {}}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <CardContent>
                <Typography className={classes.title} variant="h5" gutterBottom>Picture Name: {picture.name}</Typography>
                <Button variant="outlined" color="secondary" onClick={() => {}}><Typography className={classes.title} variant="h5" gutterBottom>Enter Picture</Typography></Button>
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

export default Picture