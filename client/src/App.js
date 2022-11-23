import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPictures } from './actions/pictures';
import Pictures from './components/Pictures/Pictures';
import Form from './components/Form/Form';
import image from './images/image.png';
import useStyles from './styles.js';


const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();


useEffect(() => {
        dispatch(getPictures());
    }, [dispatch]);


    return ( 
    <Container maxidth="lg">
    
    <AppBar className={classes.appBar} position="static" color="inherit">
    
        <Typography className={classes.heading} variant="h2" align="center">Gallery-Site</Typography>
    
{/* image for the header */}
        <img className={classes.image} src={image} alt="image" height="60" width="60" /> 
    </AppBar>
    <Grow in>
        <Container>
        <Grid Container className={classes.box} justify="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Pictures />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form />
                            </Grid>
                        </Grid>
        </Container>
    </Grow>
</Container>);
}
 
export default App;