import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {  unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import Histories from './Components/History';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HistoryRouter history={Histories}>
        <App />
    </HistoryRouter>
);
