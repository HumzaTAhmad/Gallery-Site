import React, {useEffect} from 'react';
import { Grid, CircularProgress} from '@material-ui/core'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getPictures } from '../../actions/pictures.js'

import Picture from './Picture/Picture.js';
import useStyles from './styles.js'

const Pictures = ({setCurrentPictureId, currentId, setCurrentId}) => {
    const pictures = useSelector((state) => state.pictures.filter((picture) => currentId == picture.id))
    const classes = useStyles();
    const dispatch = useDispatch();
    console.log(currentId)
    console.log(pictures)
    return (
        !pictures.length ? <CircularProgress/> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {pictures.map((picture) =>(
                    <Grid key={picture._id} item xs={12} sm={6}>
                        <Picture picture={picture} setCurrentPictureId={setCurrentPictureId}/>
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Pictures