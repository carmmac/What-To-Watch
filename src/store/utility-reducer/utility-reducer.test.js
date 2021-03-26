import {ActionType} from '../action';
import {initialState} from './utility-reducer';
import utilityReducer from './utility-reducer';

describe(`Reducer "Utility" testing`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(utilityReducer(undefined, {}))
      .toEqual(initialState);
  });

  it(`Reducer should update current genre in state`, () => {
    const state = {currentGenre: `Genre`};
    const genreSelectAction = {
      type: ActionType.GENRE_SELECT,
      payload: `Drama`,
    };
    expect(utilityReducer(state, genreSelectAction))
      .toEqual({currentGenre: `Drama`});
  });
});
