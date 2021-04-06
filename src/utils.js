import dayjs from 'dayjs';
import {DEBOUNCE_INTERVAL, FilmRatingLevel, FilmRatingText} from './const';

const getRandomNum = (min, max) => {
  return Math.random() * (max - min + 1) + min;
};

const humanizeDate = (format, date) => {
  return dayjs(date).format(format);
};

const parseFilmDuration = (duration) => {
  const hours = Math.trunc(duration / 60);
  const minutes = duration % 60;
  return {
    hours,
    minutes,
  };
};

const humanizeTimeForDescription = (duration) => {
  const time = parseFilmDuration(duration);
  if (time.hours > 0) {
    return `${time.hours}h ${time.minutes}m`;
  }
  return `${time.minutes}m`;
};

const humanizeFilmTotalDurationForPlayer = (duration) => {
  const time = parseFilmDuration(duration);
  if (time.hours > 0) {
    return `${time.hours}:${time.minutes}:00`;
  }
  return `${time.minutes}:00`;
};

const humanizeTimeForPlayer = (timeInSeconds) => {
  const minutes = Math.trunc(timeInSeconds / 60);
  const hours = Math.trunc(minutes / 60);
  const seconds = Math.trunc(timeInSeconds % 60);

  return (
    `${
      Math.trunc(hours)
    }:${
      Math.trunc(minutes)
        .toLocaleString(`en-US`, {
          minimumIntegerDigits: 2,
          useGrouping: false
        })
    }:${
      Math.trunc(seconds)
        .toLocaleString(`en-US`, {
          minimumIntegerDigits: 2,
          useGrouping: false
        })
    }`);
};

const humanizeFilmRating = (ratingScore) => {
  if (ratingScore <= FilmRatingLevel.BAD) {
    return FilmRatingText.BAD;
  }
  if (ratingScore > FilmRatingLevel.BAD && ratingScore <= FilmRatingLevel.NORMAL) {
    return FilmRatingText.NORMAL;
  }
  if (ratingScore > FilmRatingLevel.NORMAL && ratingScore <= FilmRatingLevel.GOOD) {
    return FilmRatingText.GOOD;
  }
  if (ratingScore > FilmRatingLevel.GOOD && ratingScore < FilmRatingLevel.AWESOME) {
    return FilmRatingText.VERY_GOOD;
  }
  if (ratingScore === FilmRatingLevel.AWESOME) {
    return FilmRatingText.AWESOME;
  }
  return ``;
};

const getNewTimeForPlayer = (togglerPositionInPercent, totalRunTime) => {
  return Math.floor((totalRunTime * togglerPositionInPercent) / 100);
};

const getValuePercentFromTotal = (value, totalValue) => {
  return (value * 100) / totalValue;
};

const debounce = (callback) => {
  let lastTimeout = null;
  return (...params) => {
    if (lastTimeout) {
      clearTimeout(lastTimeout);
    }
    lastTimeout = setTimeout(() => {
      callback(...params);
    }, DEBOUNCE_INTERVAL);
  };
};

const adaptFilmToClient = (film) => {
  const adaptedFilm = Object.assign(
      {},
      film,
      {
        posterImage: film.poster_image,
        previewImage: film.preview_image,
        backgroundImage: film.background_image,
        backgroundColor: film.background_color,
        scoresCount: film.scores_count,
        runTime: film.run_time,
        isFavorite: film.is_favorite,
        videoLink: film.video_link,
        previewVideoLink: film.preview_video_link,
      }
  );
  delete adaptedFilm.poster_image;
  delete adaptedFilm.preview_image;
  delete adaptedFilm.background_image;
  delete adaptedFilm.background_color;
  delete adaptedFilm.scores_count;
  delete adaptedFilm.run_time;
  delete adaptedFilm.is_favorite;
  delete adaptedFilm.video_link;
  delete adaptedFilm.preview_video_link;

  return adaptedFilm;
};

const adaptFilmToServer = (film) => {
  const adaptedFilm = Object.assign(
      {},
      film,
      {
        "poster_image": film.posterImage,
        "preview_image": film.previewImage,
        "background_image": film.backgroundImage,
        "background_color": film.backgroundColor,
        "scores_count": film.scoresCount,
        "run_time": film.runTime,
        "is_favorite": film.isFavorite,
        "video_link": film.videoLink,
        "preview_video_link": film.previewVideoLink,
      }
  );
  delete adaptedFilm.posterImage;
  delete adaptedFilm.previewImage;
  delete adaptedFilm.backgroundImage;
  delete adaptedFilm.backgroundColor;
  delete adaptedFilm.scoresCount;
  delete adaptedFilm.runTime;
  delete adaptedFilm.isFavorite;
  delete adaptedFilm.videoLink;
  delete adaptedFilm.previewVideoLink;

  return adaptedFilm;
};

export {
  getRandomNum,
  humanizeDate,
  adaptFilmToClient,
  adaptFilmToServer,
  humanizeTimeForDescription,
  humanizeFilmTotalDurationForPlayer,
  humanizeTimeForPlayer,
  humanizeFilmRating,
  getNewTimeForPlayer,
  getValuePercentFromTotal,
  debounce,
};
