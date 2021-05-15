import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component{
    state = { videos : []};

    onInputSubmit = async input=>{
        const response = await youtube.get('/search',
        {
            params:{
                q: input
            }
        });
        this.setState({videos: response.data.items})
    };

    render(){
        return <div className="ui container"> 
        <SearchBar onFormSubmit={this.onInputSubmit} />
        {this.state.videos.length} videos.
         </div>;
    }
}

export default App;