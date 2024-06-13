import { store } from "../Redux/store";
import authActions from "../Redux/Auth/action";

// this is the first api called whenever browser is refreshed or anything happens
// to check that access is authrorized or not.

export default () =>
  new Promise(() => {
    store.dispatch(authActions.checkAuthorization());
  });
