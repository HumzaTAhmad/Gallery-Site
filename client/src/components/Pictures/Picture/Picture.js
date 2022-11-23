import React from 'react';
import useStyles from './styles';
import {Card, CardActions, CardContent, CardMedia, Button, Typography, Icon} from '@material-ui/core';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import moment from 'moment';
import delete_logo from '../../../images/delete_logo.svg'

const Picture = ({ picture}) => {
    const classes = useStyles();
    return ( 
        <Card  className={classes.card}>
           <CardMedia className={classes.media} image={picture.image}/>
           <div className={classes.overlay}>
               
                <Typography variant="body2">{moment(picture.foundAt).fromNow()}</Typography>
           </div>
           <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => {}}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
           <CardContent>
                <Typography className={classes.title} variant="h8" gutterBottom>Imagesize: {picture.size}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => {}}>
                    <FavoriteIcon fontSize='small'/>
                     
                </Button>
                <Button size="small" color="primary" onClick={() => {}}>
                    <ThumbDownAltIcon fontSize='small'/>
                     
                </Button>
                <Button size="small" color="primary" onClick={() => {}}>
                    <Icon fontSize='large'>
                        <img src={delete_logo} height={40} width={20} alt=""/> Delete
                    </Icon>
                </Button>
            </CardActions>

        </Card>
    );
}
 
export default Picture; 