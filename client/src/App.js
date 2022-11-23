import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getAlbums } from './actions/albums.js'
import gal from './images/gal.png'
import Albums from './components/Albums/Albums.js';
import Pictures from './components/Pictures/Pictures.js';
import Form from './components/Form/Form.js';
import useStyles from './styles.js'


const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAlbums());
    }, [dispatch])

    return(
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Gallery-site</Typography>
                <img className={classes.img} src={gal} alt="gal" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <Albums />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;