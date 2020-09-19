import React, { Component } from "react";
import { Grid ,Typography} from "@material-ui/core";
import youtube from "./Api/youtube";
import Searchbar from "./Components/Searchbar";
import Videodetails from "./Components/Videodetails";
import Videolist from "./Components/Videolist";

export default class App extends Component {

  state = {
    videos : [],
    selectedVideo: null
  }
  onVideoSelect = (video) =>{
      this.setState({selectedVideo: video});
  }
  componentDidMount(){
    this.handleSubmit('react js')
  }
  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: { 
        part:'snippet',
        maxResults:5,
        key: process.env.REACT_APP_API_KEY,
        q: searchTerm
       },
    });
    console.log(response);
    this.setState({videos: response.data.items, selectedVideo : response.data.items[0]})
  };
  render() {
    const {selectedVideo , videos} = this.state;
    return (
      <Grid justify="center" container spacing={2}>
        <Grid item xs={12}>
          <Grid  container spacing={5}>
            <Grid item xs={12}>
              <Searchbar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <Videodetails video={selectedVideo}/>
            </Grid>
            <Grid item xs={3}>
              <Videolist videos={videos} onVideoSelect={this.onVideoSelect}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
