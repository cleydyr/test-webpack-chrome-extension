import { createRoot } from 'react-dom/client'

import React from 'react'
import Test from './test'

export function main (): void {
  // Clear the existing HTML content
  document.body.innerHTML = '<div id="app"></div>'

  const rootDiv = document.getElementById('app')

  // Render your React component instead
  const root = createRoot(rootDiv as HTMLElement)

  root.render(React.createElement(Test))
}
