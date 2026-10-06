import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

// Used at build time only, to write each page into its dist HTML file.
export function render(page) {
  return renderToString(
    <StrictMode>
      <App page={page} />
    </StrictMode>,
  )
}
