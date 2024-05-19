import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './reducers/HomePageReducer';

export  const store = configureStore({
    reducer: {
        home: homeReducer,
    },
});
export default  store