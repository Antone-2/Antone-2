export function ArchitecturalLoader() {
  return (
    <div className="architectural-loader" role="status" aria-label="Loading portfolio">
      <div className="architectural-loader-content">
        <svg
          className="architectural-loader-drawing"
          viewBox="0 0 320 210"
          fill="none"
          aria-hidden="true"
        >
          <path
            className="architectural-loader-line"
            style={{ animationDelay: '0ms' }}
            d="M38 81 160 24l122 57v83l-122 31-122-31V81Z"
          />
          <path
            className="architectural-loader-line architectural-loader-line--accent"
            style={{ animationDelay: '100ms' }}
            d="m38 81 122 34 122-34M160 115v80"
          />
          <path
            className="architectural-loader-line"
            style={{ animationDelay: '200ms' }}
            d="m61 92 31 9v43l-31-8V92Zm48 14 31 9v43l-31-8v-44Zm109-5 31-9v44l-31 8v-43Zm-48 14 31-9v44l-31 8v-43Z"
          />
          <path
            className="architectural-loader-line architectural-loader-line--accent"
            style={{ animationDelay: '300ms' }}
            d="m61 151 99 26 99-26M160 24v30m-10-25 10 5 10-10M25 181l135 25 135-25"
          />
          <path
            className="architectural-loader-line"
            style={{ animationDelay: '400ms' }}
            d="M133 108v38l27 7 27-7v-38m-54 19 27 7 27-7"
          />
        </svg>
        <p className="architectural-loader-name">Kesa Onyango</p>
        <span className="architectural-loader-caption">Full-stack engineer · Nairobi, Kenya</span>
      </div>
    </div>
  )
}
