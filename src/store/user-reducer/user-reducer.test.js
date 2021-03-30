import userReducer from './user-reducer';
import {ActionType} from '../action';
import {APIRoute, AuthorizationStatus} from "../../const";
import {checkAuth} from '../api-actions';
import {createApi} from '../../services/api';
import MockAdapter from 'axios-mock-adapter';

const api = createApi(() => {});
const apiMock = new MockAdapter(api);
const dispatch = jest.fn();

describe(`Reducer "User"`, () => {
  it(`should return initial state without additional parameters`, () => {
    expect(userReducer(undefined, {}))
      .toEqual({authorizationStatus: AuthorizationStatus.WAITING_AUTH});
  });

  it(`should update user's authorization status`, () => {
    const state = {authorizationStatus: AuthorizationStatus.WAITING_AUTH};
    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTH,
      payload: AuthorizationStatus.NO_AUTH,
    };
    expect(userReducer(state, requiredAuthorizationAction))
      .toEqual({authorizationStatus: AuthorizationStatus.NO_AUTH});
  });
});

describe(`Reducer "User" async`, () => {
  it(`should make a correct API call to /login`, () => {
    const checkAuthLoader = checkAuth();

    apiMock.onGet(APIRoute.LOGIN).reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTH,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

});
