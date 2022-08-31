import React from 'react';
import {
  createRoot
} from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'

const content = document.getElementById('root');
const root = createRoot(content);


root.render(<App name='App' />);