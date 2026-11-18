import { ExternalLink } from 'lucide-react'

export function FeaturedProject() {
  const inventorySearchExample = `export async function searchInventory(query) {
  const baseUrl = process.env.MABAWA_BASE_URL;
  const accessToken = process.env.MABAWA_ACCESS_TOKEN;

  if (!baseUrl || !accessToken) {
    throw new Error("Missing Mabawa API configuration");
  }

  const url = new URL("/v1/inventory/search", baseUrl);
  url.searchParams.set("q", query);
  url.searchParams.set("page", "1");
  url.searchParams.set("pageSize", "24");

  const response = await fetch(url, {
    headers: { Authorization: \`Bearer \${accessToken}\` },
  });

  if (!response.ok) {
    throw new Error(\`Inventory search failed: \${response.status}\`);
  }

  return response.json();
}`

  return (
    <section className="featured-project" id="featured">
      <h2 className="heading">Selected <span className="accent">work</span></h2>

      <div className="featured-shell">
        <div className="featured-preview" aria-label="Mabawa Creations website preview">
          <div className="browser-mock">
            <div className="browser-bar"><i /><i /><i /></div>
            <div className="mock-nav">
              <img className="mock-logo" src="/mabawa-logo.png" alt="Mabawa Creations" />
              <span>Shop&nbsp;&nbsp;&nbsp; Categories&nbsp;&nbsp;&nbsp; RFQ&nbsp;&nbsp;&nbsp; Account</span>
            </div>
            <div className="mock-hero">
              <img src="/mabawa-hero.webp" alt="Safety engineer inspecting industrial equipment at Mabawa Creations" loading="lazy" />
              <strong>Industrial procurement made simpler.</strong>
            </div>
          </div>
        </div>

        <div className="featured-copy">
          <span className="project-kicker">Production marketplace</span>
          <h3>Mabawa Creations</h3>
          <p>
            I designed and developed Mabawa Creations end to end: a commerce platform for PPE and industrial procurement across buyers, suppliers, and operations.
          </p>
          <div className="project-meta">
            <div>
              <span>Type</span>
              <strong>B2B marketplace</strong>
            </div>
            <p className="project-role">
              <strong>My role:</strong> Sole developer · product, frontend, backend, integrations, deployment, and maintenance
            </p>
            <div>
              <span>Status</span>
              <strong>Live</strong>
            </div>
          </div>
          <ul className="feature-list">
            <li>Product catalog</li>
            <li>Supplier workspace</li>
            <li>RFQ and bulk enquiry</li>
            <li>Cart and checkout</li>
            <li>Inventory workflows</li>
            <li>Order tracking</li>
          </ul>
          <div className="engineering-notes">
            <span>Engineering focus</span>
            <p>Separate frontend and backend repositories · role-aware workflows · external service integrations · responsive, maintainable user interfaces</p>
          </div>
          <div className="project-action-row">
            <a
              href="https://mabawacreations.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Live platform
              <ExternalLink className="svg-icon-sm" aria-hidden="true" />
            </a>
            <a href="/contact" className="btn-outline">
              Discuss private code review
            </a>
          </div>
        </div>
      </div>

      <section className="code-sample" aria-labelledby="code-sample-title">
        <div className="code-sample-copy">
          <span className="project-kicker">Developer experience</span>
          <h3 id="code-sample-title">A small example of the API</h3>
          <p>
            This illustrative Node.js example follows the inventory search flow documented in the Mabawa Developer Platform. It is not copied from the private project repositories.
          </p>
          <ul className="code-principles">
            <li>Credentials are read from server-side environment variables</li>
            <li>Search and pagination are explicit</li>
            <li>Non-success responses fail clearly</li>
          </ul>
          <a
            href="https://www.mabawacreations.com/developer"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Explore the developer docs
            <ExternalLink className="svg-icon-sm" aria-hidden="true" />
          </a>
        </div>
        <div className="code-window">
          <div className="code-window-bar">
            <div className="code-dots" aria-hidden="true"><i /><i /><i /></div>
            <span>Node.js · inventory-client.js</span>
            <span className="code-language">JavaScript</span>
          </div>
          <pre><code>{inventorySearchExample}</code></pre>
        </div>
      </section>
    </section>
  )
}
