import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./route/router.tsx";
import { Provider } from "react-redux";
import { persis, store } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persis}>
        <RouterProvider router={router} />
      </PersistGate>
      <Toaster/>
    </Provider>
  </React.StrictMode>
);
