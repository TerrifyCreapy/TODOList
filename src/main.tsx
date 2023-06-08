import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";

import "./index.scss";

import Store from "./stores/Store.ts";

// Initialize Firebase

const store = new Store();

export const StoreProvider = createContext<typeof store | null>(null);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <StoreProvider.Provider value={store}>
                <App />
            </StoreProvider.Provider>
        </BrowserRouter>
    </React.StrictMode>,
);
