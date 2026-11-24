import "./style.css";

const builtAt = new Date().toISOString();

document.querySelector("#app").innerHTML = `
  <section class="card">
    <p class="eyebrow">savvie deploy probe</p>
    <h1>Tiny Static Site</h1>
    <p>Built with Vite. Autodeploy check — if you see this stamp on-chain, webhook worked.</p>
    <p class="meta">build stamp: <code>${builtAt}</code></p>
  </section>
`;
