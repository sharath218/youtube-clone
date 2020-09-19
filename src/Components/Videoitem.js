import React from 'react'
import {Paper, Grid , Typography } from '@material-ui/core';

const Videoitem = ({video , onVideoSelect}) => {
    //console.log('video details',video)
    return (
        <div>
            <Grid item xs={12} spacing={4}>
                <Paper  onClick={() => {onVideoSelect(video)}}  style={{display: 'flex' , alignItems:'center' , cursor: 'pointer'}}>
                    <img  style={{marginRight: '20px' , width: '60%'}} alt="thumbnail" src={video.snippet.thumbnails.medium.url}/>
                    <p style={{ fontSize: '14px'}} >{video.snippet.title}</p>
                </Paper>
            </Grid>
        </div>
    )
}

export default Videoitem
