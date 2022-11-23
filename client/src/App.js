import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import gal from './images/gal.png'
import Pictures from './components/Pictures/Pictures.js';
import Form from './components/Form/Form.js';

const App = () => {
    return(
        <Container maxidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Gallery-site</Typography>
                <img src={gal} alt="gal" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <Pictures />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;