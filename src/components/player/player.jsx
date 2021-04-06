import React, {useEffect, useMemo, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {makeGetFilm, makeGetIsFilmLoadedIndicator} from '../../store/data-reducer/selectors';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFilm} from '../../store/api-actions';
import Loading from '../loading/loading';
import {humanizeTimeForPlayer, humanizeFilmTotalDurationForPlayer, getNewTimeForPlayer, getValuePercentFromTotal} from '../../utils';
import {PlayerStyle} from './player-style';

const Player = ({match: {params}, onExitBtnClick}) => {
  const dispatch = useDispatch();

  const getIsFilmLoadedIndicator = useMemo(makeGetIsFilmLoadedIndicator, []);
  const isFilmLoaded = useSelector((state) => getIsFilmLoadedIndicator(state));

  const getFilm = useMemo(makeGetFilm, []);
  const film = useSelector((state) => getFilm(state));

  const videoRef = useRef();
  const progressBarRef = useRef();
  const togglerRef = useRef();
  const playerTimeRef = useRef();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(null);
  const [playerTime, setPlayerTime] = useState(humanizeTimeForPlayer(0));
  const [togglerStyle, setTogglerStyle] = useState({left: `0%`});
  // console.log(togglerStyle);

  const onVideoStartPlaying = () => {
    setIsLoading(false);
    setIsPlaying(true);
  };

  const onVideoTimeUpdate = () => {
    setPlayerTime(humanizeTimeForPlayer(videoRef.current.duration - videoRef.current.currentTime));
    setTogglerStyle({left: `${getValuePercentFromTotal(videoRef.current.currentTime, videoRef.current.duration)}%`});
  };

  const onVideoLoading = () => {
    setIsLoading(true);
  };

  const onFilmLoad = () => {
    if (!isFilmLoaded) {
      dispatch(fetchFilm(params.id));
    } else {
      setPlayerTime(humanizeFilmTotalDurationForPlayer(film.runTime));
    }
  };

  useEffect(() => {
    onFilmLoad();
  }, [isFilmLoaded]);

  const renderPlayBtn = () => {
    return isPlaying
      ? <>
        <svg viewBox="0 0 14 21" width="14" height="21">
          <use xlinkHref="#pause"></use>
        </svg>
        <span>Pause</span>
      </>
      : <>
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </>;
  };

  const onPlayBtnClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
      return;
    }
    videoRef.current.pause();
    setIsPlaying(false);
  };

  const onFullScreenBtnClick = () => {
    videoRef.current.requestFullscreen();
  };

  const timeChangeHandler = (evt) => {
    evt.preventDefault();
    const maxTime = progressBarRef.current.offsetWidth;
    let startCoords = evt.clientX;
    const moveAt = (value) => {
      setTogglerStyle({left: `${getValuePercentFromTotal(value, maxTime)}%`});
    };

    const mouseMoveHandler = (moveEvt) => {
      moveEvt.preventDefault();
      let togglerShift = Math.floor(getValuePercentFromTotal(togglerRef.current.offsetLeft, maxTime));
      videoRef.current.currentTime = getNewTimeForPlayer(togglerShift, videoRef.current.duration);
      const shift = startCoords - moveEvt.clientX;
      startCoords = moveEvt.clientX;
      let moveValue = togglerRef.current.offsetLeft - shift;
      if (moveValue > 0 && moveValue < (maxTime)) {
        moveAt((moveValue));
      } else {
        moveAt((moveValue) > 0 ? maxTime : 0);
      }
    };

    const mouseUpHandler = (upEvt) => {
      upEvt.preventDefault();
      document.removeEventListener(`mousemove`, mouseMoveHandler);
      document.removeEventListener(`mouseup`, mouseUpHandler);
    };

    document.addEventListener(`mousemove`, mouseMoveHandler);
    document.addEventListener(`mouseup`, mouseUpHandler);
  };

  if (!isFilmLoaded) {
    return <Loading />;
  }

  return (
    <div className="player">
      <video
        className="player__video"
        poster={film.backgroundImage}
        onPlaying={onVideoStartPlaying}
        onTimeUpdate={onVideoTimeUpdate}
        onLoadStart={onVideoLoading}
        autoPlay={true}
        ref={videoRef}
        src={film.videoLink}>
      </video>

      {
        isLoading &&
        <div style={PlayerStyle.LOADING_CONTAINER}>
          <Loading/>
        </div>
      }

      <button type="button" className="player__exit" onClick={() => {
        videoRef.current.pause();
        videoRef.current = null;
        onExitBtnClick();
      }}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" ref={progressBarRef}></progress>
            <div className="player__toggler" style={togglerStyle} ref={togglerRef} onMouseDown={timeChangeHandler}>Toggler</div>
          </div>
          <div className="player__time-value" ref={playerTimeRef}>{playerTime}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={onPlayBtnClick}>
            {renderPlayBtn()}
          </button>
          <div className="player__name">{film.name}</div>

          <button type="button" className="player__full-screen" onClick={onFullScreenBtnClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  match: PropTypes.object.isRequired,
  onExitBtnClick: PropTypes.func.isRequired,
};

export default Player;
