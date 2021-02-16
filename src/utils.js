const getRandomNum = (min, max) => {
  return Math.random() * (max - min + 1) + min;
};

export {getRandomNum};
