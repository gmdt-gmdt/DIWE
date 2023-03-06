import { configureStore } from "@reduxjs/toolkit";

import packageReducer from "./slices/package-slice";
import userReducer from "./slices/user-slice";
import guideReducer from "./slices/guide-slice";
import authReducer from "./slices/auth-slice";
import destinationReducer from "./slices/destination-slice";
import serviceReducer from "./slices/service-slice";

export default configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: {
    package: packageReducer,
    auth: authReducer,
    users: userReducer,
    destinations: destinationReducer,
    services: serviceReducer,
    guides: guideReducer,
  },
});
