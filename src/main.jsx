import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'

// Latin subsets only, to keep the font payload small on mobile data.
import '@fontsource/sora/latin-600.css'
import '@fontsource/sora/latin-700.css'
import '@fontsource/sora/latin-800.css'
import '@fontsource/inter/latin-400.css'
import '@fontsource/inter/latin-500.css'
import '@fontsource/inter/latin-600.css'
import '@fontsource/jetbrains-mono/latin-500.css'

import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <App page={root.dataset.page} />
  </StrictMode>
)

// Production HTML is prerendered (scripts/prerender.mjs); the dev server is not.
// (In dev the root only holds the <!--app--> comment, so check for elements.)
if (root.firstElementChild) hydrateRoot(root, app)
else createRoot(root).render(app)
