import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { ThemeProvider, StyleReset } from 'atomize';

// Fonts used
import './fonts/Neue Haas Unica/NeueHaasUnica.css';
import './fonts/Walcot/Walcot.css'

// Base CSS
import './index.css';

const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
const engine = new Styletron();
const theme = {
  colors: {
    primary: 'tomato',
    accent: 'yellow',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <ThemeProvider theme={theme}>
        <StyleReset />
        <div>Ola</div>
      </ThemeProvider>
    </StyletronProvider>
  </React.StrictMode>,
  document.getElementById('root')
);