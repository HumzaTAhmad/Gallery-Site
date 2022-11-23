import React from 'react';
import Picture from './Picture/Picture.js';
import useStyles from './styles.js'

const Pictures = () => {
    const classes = useStyles();

    return (
        <>
            <h1>Pictures</h1>
            <Picture />
            <Picture />
        </>
    )
}

export default Pictures