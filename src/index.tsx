import './index.css';
import App from './App';
import CompositeProvider from './components/CompositeProvider';
import React from 'react';
import { render } from "react-dom";

render((
    <React.StrictMode>
        <CompositeProvider>
            <App />
        </CompositeProvider>
    </React.StrictMode>), document.getElementById(`root`));
