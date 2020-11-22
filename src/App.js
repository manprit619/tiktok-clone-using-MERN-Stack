import './App.css';
import Video from "./Video"
import axios from "./axios";
import React, { useEffect, useState } from "react";

function App() {
 const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);

      return response;
    }
     
    fetchPosts();
  }, []);


console.log(videos);


  return (
    <div className="app">
      


<div className="app_videos">
    {videos.map(
      ({ url, channel, description, song, likes, messages, shares }) => (
        <Video
          url={url}
          channel={channel}
          song={song}
          likes={likes}
          messages={messages}
          description={description}
          shares={shares}
          />








      )


    )
    }




{/*<Video url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  channel="manprit007"
  description=" Yo this works!"
  song="99 problems but REACT AINT ONE!"
  likes={123}
  messages={456}
  shares={789}


/>
  <Video
  url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
  channel="vsingh007"
  description=" this is insane!"
  song="I hate you like I love you"
  likes={234}
  messages={762}
  shares={789}/> */}

</div>
   
      {/* app container */}
      {/* videos */}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}




    </div>
  );
}

export default App;
