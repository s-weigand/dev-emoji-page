import React from 'react';

import { createRoot } from 'react-dom/client';

import { App } from './App';

const root = createRoot(document.querySelector('main'));
root.render(<App />);
