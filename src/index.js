import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { ThemeProvider, StyleReset } from 'atomize';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// Fonts used
import './fonts/Neue Haas Unica/NeueHaasUnica.css';
import './fonts/Walcot/Walcot.css'

// Base CSS
import './index.css';

// Import Pages
import Login from './pages/Login';

const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
const engine = new Styletron();
const theme = {
  colors: {
    primary: '#000000',
    accent: '#f7f3e9',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <ThemeProvider theme={theme}>
        <StyleReset />
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/login" element={<Login />} />
            {/* <Route path="/portfolio" element={<PortfolioMain />} />
            <Route exact path="/blog" render={() => ( window.location = "https://rafaeljesusaraiva.pt") } />
            <Route path="/sobre-mim" element={<AboutMe />} />
            <Route path="/contacta-me" element={<ContactMe />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} /> */}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StyletronProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();