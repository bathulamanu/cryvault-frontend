import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './reducers/HomePageReducer';
import plansReducer from './reducers/PlansReducer';
import userReducer from './reducers/UserReducer';
import paymentReducer from './reducers/PaymentReducer';
import dashboardReducer from './reducers/DashboardReducer';

export  const store = configureStore({
    reducer: {
        home: homeReducer,
        plans: plansReducer,
        user:userReducer,
        payment:paymentReducer,
        dashboard:dashboardReducer
    },
});
export default  store