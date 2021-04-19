import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";
import "bootstrap";
import "../src/styles/scss/index.scss";
import { TokenProvider } from "./context/TokenProvider";

const root = document.getElementById("root")
ReactDOM.render(
    <TokenProvider>
        <App />
    </TokenProvider>
    ,root
);