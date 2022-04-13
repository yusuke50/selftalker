import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

const container = document.getElementById('root');
const rt = createRoot(container);

rt.render(<App />);
