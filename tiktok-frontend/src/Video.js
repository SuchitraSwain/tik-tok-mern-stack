import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({ url, channel, description, song, likes, messages, shares }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleVideoPress = () => {
    //   if the video is playing
    // stop it...

    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }

    // otherwise if its not playing
    // play it
  };

  return (
    <div className="video">
      {/* <video src="https://v16.tiktokcdn.com/f0b00a77e4a06d0924b4a84ccf21520f.5f50173b/video/tos/usesdt2a/tos-useast2a-ve-0068c003/17791fe438be4573994ff56ebd54a762/?a=1233&br=2618&bt=1309&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009021605210101902092163013B973&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=anRnbGY6bHlsdzMzNzczM0ApOzU3aWRlNWQ6N2Q50jM4NmdzNWRwZ2liaTBfLS1eMTZzczYwYzBjMGIwMy9gMzVeLjM6Yw%3D%3D&vl=&vr="></video> */}

      <video
        onClick={handleVideoPress}
        ref={videoRef}
        className="video__player"
        loop
        src={url}
      ></video>

      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Video;
