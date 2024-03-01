import { configureStore } from '@reduxjs/toolkit';
import { positionReducer } from './positions/position-reducers';
import { filterReducer } from './filters/filter-reducer';

const store = configureStore({
  reducer: {
    positions: positionReducer,
    filters: filterReducer,
  },
  devtools:
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
});
export default store;

// import { createStore } from 'redux';

// import { rootReducer } from './root-reducer';

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;
