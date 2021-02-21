import dayjs from 'dayjs';

const getRandomNum = (min, max) => {
  return Math.random() * (max - min + 1) + min;
};

const humanizeDate = (format, date) => {
  return dayjs(date).format(format);
};

const parseFilmDuration = (duration) => {
  const hours = Math.trunc(duration / 60);
  const minutes = duration % 60;
  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m`;
};

export {
  getRandomNum,
  humanizeDate,
  parseFilmDuration,
};
