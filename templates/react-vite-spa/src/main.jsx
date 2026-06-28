import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <main className="app-shell">
      <section className="panel">
        <p className="eyebrow">React Vite SPA</p>
        <h1>Ready to build.</h1>
        <p>
          This template starts with AGENTS workflow, lean context docs, and a
          minimal React/Vite application surface.
        </p>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
