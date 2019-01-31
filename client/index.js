import React from "react";
import { hydrate } from "react-dom";
import App from "./App";

const state = window.__STATE__;

delete window.__STATE__;

hydrate(<App {...state} />, document.getElementById("root"));
