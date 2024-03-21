import { legacy_createStore as createStore } from "redux";
import reducers from "./reducers";
const store = createStore(reducers, {}, window.__REDUX_DETOOLS_EXTENSION__ && window.REDUX__DEVTOOLS__EXTENSION())
export default store;

