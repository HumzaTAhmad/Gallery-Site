import React from 'react';
import { Grid, CircularProgress} from '@material-ui/core'
import { useSelector } from 'react-redux';

import Album from './Album/Album.js';
import useStyles from './styles.js'

const Albums = ({setCurrentAlbumId, currentId, setCurrentId, setShowBack}) => {
    const albums = useSelector((state) => state.albums)
    const classes = useStyles();

    console.log("The state is", albums)

    return (
        !albums.length ? <CircularProgress/> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {albums.map((album) =>(
                    <Grid key={album._id} item xs={12} sm={6}>
                        <Album album={album} setCurrentAlbumId={setCurrentAlbumId} currentId={currentId} setCurrentId={setCurrentId} setShowBack={setShowBack}/>
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Albums