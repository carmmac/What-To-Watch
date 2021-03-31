import {ActionType} from '../action';
import {initialState} from './utility-reducer';
import utilityReducer from './utility-reducer';

describe(`Reducer "Utility"`, () => {
  it(`should return initial state without additional parameters`, () => {
    expect(utilityReducer(undefined, {}))
      .toEqual(initialState);
  });

  it(`should update current genre in state`, () => {
    const state = {currentGenre: `Genre`};
    const genreSelectAction = {
      type: ActionType.GENRE_SELECT,
      payload: `Drama`,
    };
    expect(utilityReducer(state, genreSelectAction))
      .toEqual({currentGenre: `Drama`});
  });
});
