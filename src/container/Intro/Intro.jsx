import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();//it is used for controlling the video //vidRef.current.play()/pause()

  return (
    <div className="app__video">
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false} //this is for multiple controls over video like(volume,fullscreen, mute,forward)
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={() => {
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
            setPlayVideo(!playVideo);
          }}
          
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;