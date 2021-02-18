import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

const PlayerPreview = ({previewImage, previewVideoLink}) => {
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.play();
    return () => {
      videoRef.current.pause();
      videoRef.current = null;
    };
  });

  return (
    <video
      className="player__video"
      src={previewVideoLink}
      poster={previewImage}
      ref={videoRef}
      muted={true}>
    </video>
  );
};

PlayerPreview.propTypes = {
  previewImage: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
};

export default PlayerPreview;
