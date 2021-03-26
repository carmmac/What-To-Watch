import {
  ActionType,
  clearData,
  genreSelect,
} from './action';

describe(`Action creators testing`, () => {
  it(`Action creator genre selection should return correct action`, () => {
    const expectedAction = {
      type: ActionType.GENRE_SELECT,
      payload: `Drama`,
    };
    expect(genreSelect(`Drama`)).toEqual(expectedAction);
  });

  it(`Action creator clearing data should return correct action`, () => {
    const expectedAction = {
      type: ActionType.CLEAR_DATA,
    };
    expect(clearData()).toEqual(expectedAction);
  });
});
