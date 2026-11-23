import "./style.css";

const builtAt = new Date().toISOString();

document.querySelector("#app").innerHTML = `
  <section class="card">
    <p class="eyebrow">savvie deploy probe</p>
    <h1>Tiny Static Site</h1>
    <p>Built with Vite. If you can read this on-chain, publish worked.</p>
    <p class="meta">build stamp: <code>${builtAt}</code></p>
  </section>
`;
