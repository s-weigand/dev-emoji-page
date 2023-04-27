import React from 'react';

import { createRoot } from 'react-dom/client';

import { IconCards } from './card-container';

const root = createRoot(document.querySelector('main'));
root.render(<IconCards />);
