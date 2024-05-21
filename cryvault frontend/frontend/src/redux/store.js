import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './reducers/HomePageReducer';
import plansReducer from './reducers/PlansReducer';

export  const store = configureStore({
    reducer: {
        home: homeReducer,
        plans: plansReducer,
    },
});
export default  store