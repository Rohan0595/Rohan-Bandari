import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

/**
 * Mount React once the #root element is available.
 * This avoids “Target container is not a DOM element.”
 */
function mountReact() {
  const rootEl = document.getElementById("root")
  if (!rootEl) {
    console.error("❌  #root element not found – React not mounted.")
    return
  }

  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

// If the document is still loading, wait; otherwise mount immediately.
if (document.readyState === "loading") {
  window.addEventListener("DOMContentLoaded", mountReact, { once: true })
} else {
  mountReact()
}
