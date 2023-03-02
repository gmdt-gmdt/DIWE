import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/user-slice";
import destinationReducer from "./slices/destination-slice";
import serviceReducer from "./slices/service-slice";

export default configureStore({
  reducer: {
    users: userReducer,
    destinations: destinationReducer,
    services: serviceReducer,
  },
});
