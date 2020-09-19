import React from 'react'
import {Paper, Typography } from '@material-ui/core';

const Videodetails = ({video}) => {
    if(!video){
        return <div>Search for the video</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <>
        <Paper elevation={6} style={{height: '40%' }}>
            <iframe frameBorder="0" height="100%" width="100%" title="video player" src={videoSrc}/>
            
        </Paper>
        <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h6">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
        </>
       
    )
}


export default Videodetails
