import {MockFilmsNum, RatingScore} from "../const";
import {getRandomNum} from "../utils";

const reviews = [
  {
    "id": Math.floor(getRandomNum(MockFilmsNum.MIN, MockFilmsNum.MAX)),
    "user": {
      "id": 3,
      "name": `Corey`
    },
    "rating": getRandomNum(RatingScore.MIN, RatingScore.MAX).toFixed(1),
    "comment": `Poised to be an instant classic, almost everything about this film is phenomenal - the acting, the cinematography, the discography, etc.`,
    "date": `2021-01-29T08:36:38.668Z`
  },
  {
    "id": Math.floor(getRandomNum(MockFilmsNum.MIN, MockFilmsNum.MAX)),
    "user": {
      "id": 5,
      "name": `Mike`
    },
    "rating": getRandomNum(RatingScore.MIN, RatingScore.MAX).toFixed(1),
    "comment": `I personally found this movie to be boring. Definitely one of the most boring movies I've ever seen.`,
    "date": `2021-02-06T08:36:38.668Z`
  },
  {
    "id": Math.floor(getRandomNum(MockFilmsNum.MIN, MockFilmsNum.MAX)),
    "user": {
      "id": 9,
      "name": `Jane`
    },
    "rating": getRandomNum(RatingScore.MIN, RatingScore.MAX).toFixed(1),
    "comment": `This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`,
    "date": `2021-02-07T08:36:38.668Z`
  },
  {
    "id": Math.floor(getRandomNum(MockFilmsNum.MIN, MockFilmsNum.MAX)),
    "user": {
      "id": 21,
      "name": `Andrew`
    },
    "rating": getRandomNum(RatingScore.MIN, RatingScore.MAX).toFixed(1),
    "comment": `I really find it difficult to believe this movie is rated highly by people. It's hands down the worst movie I've seen in my life`,
    "date": `2021-01-13T05:16:38.668Z`
  },
  {
    "id": Math.floor(getRandomNum(MockFilmsNum.MIN, MockFilmsNum.MAX)),
    "user": {
      "id": 16,
      "name": `Thomas`
    },
    "rating": getRandomNum(RatingScore.MIN, RatingScore.MAX).toFixed(1),
    "comment": `A movie that will take you to another world full of emotions.`,
    "date": `2021-01-14T02:54:38.668Z`
  },
  {
    "id": Math.floor(getRandomNum(MockFilmsNum.MIN, MockFilmsNum.MAX)),
    "user": {
      "id": 33,
      "name": `Kate`
    },
    "rating": getRandomNum(RatingScore.MIN, RatingScore.MAX).toFixed(1),
    "comment": `This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`,
    "date": `2021-02-06T08:36:38.668Z`
  },
  {
    "id": Math.floor(getRandomNum(MockFilmsNum.MIN, MockFilmsNum.MAX)),
    "user": {
      "id": 1,
      "name": `Bill`
    },
    "rating": getRandomNum(RatingScore.MIN, RatingScore.MAX).toFixed(1),
    "comment": `The editing is a mess, and the transitions of the plot or characters are rather strange. There is no narrative focus and the storytelling is unbalanced. I cannot really understand why such a bad movie received an overwhelming approval from the critics. `,
    "date": `2021-02-07T08:36:38.668Z`
  },
  {
    "id": Math.floor(getRandomNum(MockFilmsNum.MIN, MockFilmsNum.MAX)),
    "user": {
      "id": 46,
      "name": `Jack`
    },
    "rating": getRandomNum(RatingScore.MIN, RatingScore.MAX).toFixed(1),
    "comment": `I really find it difficult to believe this movie is rated highly by people. It's hands down the worst movie I've seen in my life.`,
    "date": `2021-02-01T08:36:38.668Z`
  },
];

export default reviews;
