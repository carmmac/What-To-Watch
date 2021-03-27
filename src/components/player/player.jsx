import React, {useEffect, useMemo, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {makeGetFilm, makeGetIsFilmLoadedIndicator} from '../../store/data-reducer/selectors';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFilm} from '../../store/api-actions';
import Loading from '../loading/loading';
import {useHistory} from 'react-router';
import {humanizeTimeForPlayer} from '../../utils';

const Player = ({match: {params}}) => {
  const dispatch = useDispatch();

  const getIsFilmLoadedIndicator = useMemo(makeGetIsFilmLoadedIndicator, []);
  const isFilmLoaded = useSelector((state) => getIsFilmLoadedIndicator(state));

  const getFilm = useMemo(makeGetFilm, []);
  const film = useSelector((state) => getFilm(state));

  const history = useHistory();
  const videoRef = useRef();

  const [isPlaying, setIsPlaying] = useState(false);

  const onFilmLoad = () => {
    if (!isFilmLoaded) {
      dispatch(fetchFilm(params.id));
    }
  };

  useEffect(() => {
    onFilmLoad();

    return () => {
      videoRef.current.pause();
    };
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

  const onExitBtnClick = () => {
    history.push(`/films/${params.id}`);
  };

  if (!isFilmLoaded) {
    return <Loading />;
  }

  return (
    <div className="player">
      <video ref={videoRef} src={film.videoLink} className="player__video" poster={film.backgroundImage}></video>

      <button type="button" className="player__exit" onClick={onExitBtnClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler">Toggler</div>
          </div>
          <div className="player__time-value">{humanizeTimeForPlayer(film.runTime)}</div>
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
};

export default Player;
