import {
  ActionType,
  clearData,
  genreSelect,
} from './action';

describe(`Action creator`, () => {
  it(`"Genre Select" should return correct action`, () => {
    const expectedAction = {
      type: ActionType.GENRE_SELECT,
      payload: `Drama`,
    };
    expect(genreSelect(`Drama`)).toEqual(expectedAction);
  });

  it(`"Clear Data" should return correct action`, () => {
    const expectedAction = {
      type: ActionType.CLEAR_DATA,
    };
    expect(clearData()).toEqual(expectedAction);
  });
});
