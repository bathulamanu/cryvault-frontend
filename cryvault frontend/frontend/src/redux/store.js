import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './reducers/HomePageReducer';
import plansReducer from './reducers/PlansReducer';
import userReducer from './reducers/UserReducer';

export  const store = configureStore({
    reducer: {
        home: homeReducer,
        plans: plansReducer,
        user:userReducer
    },
});
export default  store