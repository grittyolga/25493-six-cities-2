import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api";
import {ActionType, ActionCreator} from "./auth";

const Operation = {
  saveAuth: () => (dispatch, _getState, api) => {
    return api.post(`/login`)
      .then((response) => {
        dispatch(ActionCreator.saveAuth(response.data));
      });
  },
};

describe(`Reducer works correctly`, () => {
  it(`Should make a correct API call to login`, function () {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const authLoader = Operation.saveAuth();

    apiMock
      .onAny()
      .reply(200, [{fake: true}]);

    return authLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SAVE_AUTH,
          payload: [{fake: true}],
        });
      });
  });
});
