import ReactDOM from "react-dom/client";
import "./Talwind.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { StyledEngineProvider } from "@mui/material";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <Router>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </Router>
  </Provider>
);
