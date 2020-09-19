import React,{useState}from 'react'
import {Grid  } from '@material-ui/core';
import Videoitem from './Videoitem';


const Videolist = ({ videos ,onVideoSelect }) => {
    
    const listofvideo = (videos.map((video, id) => <Videoitem onVideoSelect={onVideoSelect} key={id} video={video} />));
    
    return (
        <Grid container >
             {listofvideo}  
        </Grid>
    )
}

export default Videolist
