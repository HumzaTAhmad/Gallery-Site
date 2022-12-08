import React, { useEffect, useState} from 'react';
import { Container, AppBar, Typography, Grow, Grid, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { getAlbums } from './actions/albums.js'
import { getPictures } from './actions/pictures.js'
import gal from './images/gal.png'
import Albums from './components/Albums/Albums.js';
import Pictures from './components/Pictures/Pictures.js';
import Graphs from './components/Graphs/Graphs.js'
import AlbumForm from './components/Form/AlbumForm.js';
import PictureForm from './components/Form/PictureForm.js';
import useStyles from './styles.js'
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const App = () => {
    const [currentId, setCurrentId] = useState(0)
    const [currentPictureId, setCurrentPictureId] = useState(0) //for update picture
    const [currentAlbumId, setCurrentAlbumId] = useState(0) // for update album
    const [showBack, setShowBack] = useState(false)
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAlbums());
        dispatch(getPictures());
    }, [currentId, currentPictureId, currentAlbumId, dispatch])
    
    return(
        <Router>
        {showBack==true?<Button href="/albums" className={classes.buttonBack} variant="contained" color="primary" size="large" onClick={() => {}}>
            <ArrowBackIcon fontSize="default" />
        </Button>:null}
            <Container maxidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center">Gallery-site</Typography>
                    <img className={classes.img} src={gal} alt="gal" height="60" />
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={4}>
                                {!currentId.length ? <AlbumForm currentAlbumId={currentAlbumId} setCurrentAlbumId={setCurrentAlbumId} setShowBack={setShowBack}/>:<PictureForm currentPictureId={currentPictureId} setCurrentPictureId={setCurrentPictureId} currentId={currentId}/>}
                            </Grid>
                            <Grid item xs={12} sm={7}>
                                <Routes>
                                    <Route path="/albums" element={<Albums setCurrentAlbumId={setCurrentAlbumId} currentId={currentId} setCurrentId={setCurrentId} setShowBack={setShowBack}/>}/>
                                    <Route path="/pictures" element={<Pictures setCurrentPictureId={setCurrentPictureId} currentId={currentId} setCurrentId={setCurrentId}/>}/>
                                    <Route path="/statistics" element={<Graphs setShowBack={setShowBack}/>}/>
                                </Routes>
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </Router>
    )
}

export default App;