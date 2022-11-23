import React from 'react';
import { useSelector } from 'react-redux';
import Picture from './Picture/Picture';
import useStyles from './styles';
import {Grid, CircularProgress} from '@material-ui/core';

const Pictures = () => {
    const pictures = useSelector((state) => state.pictures)
    const classes = useStyles();

    console.log(pictures);

    return ( 
        !pictures.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {pictures.map((picture) => (
                <Grid key={picture._id} item xs={12} sm={6}>
                    <Picture picture={picture} />
                </Grid>
            ))}
        </Grid>
        )
    );
}
 
export default Pictures; 