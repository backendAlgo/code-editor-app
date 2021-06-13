import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import Loader from "../components/common/Loader";
import store, { persistor } from "./store";

const ReduxProvider = (props: PropsWithChildren<{}>) => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={<Loader />}>
                {props.children}
            </PersistGate>
        </Provider>
    );
};

export default ReduxProvider;
