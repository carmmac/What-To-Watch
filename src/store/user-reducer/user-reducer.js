import {createReducer} from "@reduxjs/toolkit";
import {AuthorizationStatus} from "../../const";
import {requireAuthorization} from "../action";

const initialState = {
  authorizationStatus: AuthorizationStatus.WAITING_AUTH,
};

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    return {
      ...state,
      authorizationStatus: action.payload,
    };
  });
});

export default userReducer;
