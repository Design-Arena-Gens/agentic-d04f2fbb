export default function BrandBoard() {
  return (
    <div className="brand-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="primary-logo">
          <h1 className="itaf-logo">ITAFCOUTURE</h1>
          <p className="tagline">Digital Fashion Maison</p>
        </div>
      </section>

      {/* Monogram Section */}
      <section className="section monogram-section">
        <div className="section-header">
          <h2>Monogram</h2>
        </div>
        <div className="monogram-container">
          <div className="monogram-primary">
            <svg viewBox="0 0 200 200" className="monogram-svg">
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#C9A961" />
                </linearGradient>
              </defs>
              <rect x="20" y="20" width="160" height="160" fill="none" stroke="url(#goldGradient)" strokeWidth="0.5" />
              <path d="M 60 60 L 60 140" stroke="#1A1A1A" strokeWidth="2" fill="none" />
              <path d="M 100 60 Q 120 60 130 80 Q 140 100 130 120 Q 120 140 100 140" stroke="#1A1A1A" strokeWidth="2" fill="none" />
              <circle cx="100" cy="100" r="50" fill="none" stroke="url(#goldGradient)" strokeWidth="0.3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Color Palette Section */}
      <section className="section color-section">
        <div className="section-header">
          <h2>Color Palette</h2>
        </div>
        <div className="color-grid">
          <div className="color-card">
            <div className="color-swatch" style={{backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5'}}></div>
            <div className="color-info">
              <p className="color-name">Pure White</p>
              <p className="color-hex">#FFFFFF</p>
            </div>
          </div>
          <div className="color-card">
            <div className="color-swatch" style={{backgroundColor: '#1A1A1A'}}></div>
            <div className="color-info">
              <p className="color-name">Ink Black</p>
              <p className="color-hex">#1A1A1A</p>
            </div>
          </div>
          <div className="color-card">
            <div className="color-swatch" style={{backgroundColor: '#2B2B2B'}}></div>
            <div className="color-info">
              <p className="color-name">Deep Charcoal</p>
              <p className="color-hex">#2B2B2B</p>
            </div>
          </div>
          <div className="color-card">
            <div className="color-swatch" style={{backgroundColor: '#D4AF37'}}></div>
            <div className="color-info">
              <p className="color-name">Soft Gold</p>
              <p className="color-hex">#D4AF37</p>
            </div>
          </div>
          <div className="color-card">
            <div className="color-swatch" style={{backgroundColor: '#9B9B9B'}}></div>
            <div className="color-info">
              <p className="color-name">Warm Gray</p>
              <p className="color-hex">#9B9B9B</p>
            </div>
          </div>
          <div className="color-card">
            <div className="color-swatch" style={{backgroundColor: '#B8B8B8'}}></div>
            <div className="color-info">
              <p className="color-name">Technical Silver</p>
              <p className="color-hex">#B8B8B8</p>
            </div>
          </div>
          <div className="color-card">
            <div className="color-swatch" style={{backgroundColor: '#F5F5F5'}}></div>
            <div className="color-info">
              <p className="color-name">Off White</p>
              <p className="color-hex">#F5F5F5</p>
            </div>
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="section typography-section">
        <div className="section-header">
          <h2>Typography System</h2>
        </div>
        <div className="typography-grid">
          <div className="type-sample serif-sample">
            <p className="type-label">Serif / Display</p>
            <h3 className="type-display">Couture Excellence</h3>
            <p className="type-body-serif">The art of precision tailoring meets digital innovation. Every stitch, every pattern line crafted with meticulous attention to detail.</p>
          </div>
          <div className="type-sample sans-sample">
            <p className="type-label">Sans-Serif / Body</p>
            <h4 className="type-heading-sans">TECHNICAL PRECISION</h4>
            <p className="type-body-sans">Modern functionality meets timeless design. Our digital patterns deliver couture-grade accuracy for the contemporary atelier.</p>
          </div>
        </div>
        <div className="type-hierarchy">
          <div className="type-spec">
            <span className="spec-label">H1 Display</span>
            <span className="spec-value">Didot / 72px / Light</span>
          </div>
          <div className="type-spec">
            <span className="spec-label">H2 Heading</span>
            <span className="spec-value">SF Pro / 48px / Thin</span>
          </div>
          <div className="type-spec">
            <span className="spec-label">Body Text</span>
            <span className="spec-value">SF Pro / 16px / Regular</span>
          </div>
          <div className="type-spec">
            <span className="spec-label">Caption</span>
            <span className="spec-value">SF Pro / 12px / Light</span>
          </div>
        </div>
      </section>

      {/* Textures & Materials */}
      <section className="section materials-section">
        <div className="section-header">
          <h2>Textures & Materials</h2>
        </div>
        <div className="materials-grid">
          <div className="material-card matte-paper">
            <div className="material-overlay">
              <p className="material-name">Matte Paper</p>
            </div>
          </div>
          <div className="material-card gold-foil">
            <div className="material-overlay">
              <p className="material-name">Gold Foil Emboss</p>
            </div>
          </div>
          <div className="material-card technical-grid">
            <div className="material-overlay">
              <p className="material-name">Technical Grid</p>
            </div>
          </div>
          <div className="material-card couture-stitch">
            <div className="material-overlay">
              <p className="material-name">Couture Stitching</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Patterns */}
      <section className="section patterns-section">
        <div className="section-header">
          <h2>Brand Patterns</h2>
        </div>
        <div className="patterns-grid">
          <div className="pattern-card pattern-cad">
            <svg viewBox="0 0 400 300" className="pattern-svg">
              <defs>
                <pattern id="cadPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="20" x2="40" y2="20" stroke="#D4AF37" strokeWidth="0.3" opacity="0.4" />
                  <line x1="20" y1="0" x2="20" y2="40" stroke="#D4AF37" strokeWidth="0.3" opacity="0.4" />
                  <circle cx="20" cy="20" r="1" fill="#D4AF37" opacity="0.6" />
                </pattern>
              </defs>
              <rect width="400" height="300" fill="url(#cadPattern)" />
              <path d="M 50 150 Q 150 50, 250 150 T 450 150" stroke="#1A1A1A" strokeWidth="0.5" fill="none" opacity="0.7" />
            </svg>
            <p className="pattern-label">CAD Pattern Lines</p>
          </div>
          <div className="pattern-card pattern-geometric">
            <svg viewBox="0 0 400 300" className="pattern-svg">
              <line x1="50" y1="50" x2="350" y2="50" stroke="#2B2B2B" strokeWidth="0.3" />
              <line x1="50" y1="100" x2="350" y2="100" stroke="#2B2B2B" strokeWidth="0.3" />
              <line x1="50" y1="150" x2="350" y2="150" stroke="#D4AF37" strokeWidth="0.5" />
              <line x1="50" y1="200" x2="350" y2="200" stroke="#2B2B2B" strokeWidth="0.3" />
              <line x1="50" y1="250" x2="350" y2="250" stroke="#2B2B2B" strokeWidth="0.3" />
              <circle cx="200" cy="150" r="80" fill="none" stroke="#D4AF37" strokeWidth="0.3" opacity="0.5" />
            </svg>
            <p className="pattern-label">Geometric Minimal</p>
          </div>
        </div>
      </section>

      {/* Imagery Direction */}
      <section className="section imagery-section">
        <div className="section-header">
          <h2>Imagery Direction</h2>
        </div>
        <div className="imagery-grid">
          <div className="image-card editorial-style">
            <div className="image-placeholder">
              <svg viewBox="0 0 400 600" className="editorial-svg">
                <rect width="400" height="600" fill="#F5F5F5" />
                <rect x="50" y="100" width="300" height="400" fill="#1A1A1A" opacity="0.1" />
                <line x1="200" y1="0" x2="200" y2="600" stroke="#D4AF37" strokeWidth="0.3" opacity="0.3" />
                <text x="200" y="550" textAnchor="middle" fill="#2B2B2B" fontSize="12" fontFamily="system-ui, -apple-system, sans-serif">EDITORIAL / BLACK & WHITE</text>
              </svg>
            </div>
          </div>
          <div className="image-card technical-style">
            <div className="image-placeholder">
              <svg viewBox="0 0 400 600" className="technical-svg">
                <rect width="400" height="600" fill="#FFFFFF" />
                <path d="M 100 150 L 200 100 L 300 150 L 300 450 L 200 500 L 100 450 Z" fill="none" stroke="#2B2B2B" strokeWidth="0.5" />
                <circle cx="200" cy="100" r="3" fill="#D4AF37" />
                <circle cx="200" cy="500" r="3" fill="#D4AF37" />
                <line x1="50" y1="300" x2="350" y2="300" stroke="#9B9B9B" strokeWidth="0.3" opacity="0.5" strokeDasharray="2,2" />
                <text x="200" y="550" textAnchor="middle" fill="#2B2B2B" fontSize="12" fontFamily="system-ui, -apple-system, sans-serif">TECHNICAL / GARMENT CLOSEUP</text>
              </svg>
            </div>
          </div>
        </div>
        <div className="imagery-guidelines">
          <div className="guideline-item">
            <h4>Photography Style</h4>
            <p>High-contrast black and white editorial imagery. Minimal, architectural composition with strong shadows and clean lines.</p>
          </div>
          <div className="guideline-item">
            <h4>Technical Documentation</h4>
            <p>Precise garment closeups showcasing construction details, seam work, and pattern precision. CAD-style technical flats with dimension lines.</p>
          </div>
          <div className="guideline-item">
            <h4>Treatment</h4>
            <p>Desaturated palette, ultra-sharp focus, minimal depth of field. Gold accent elements used sparingly for emphasis on key details.</p>
          </div>
        </div>
      </section>

      {/* Brand Applications */}
      <section className="section applications-section">
        <div className="section-header">
          <h2>Brand Applications</h2>
        </div>
        <div className="applications-grid">
          <div className="application-card business-card">
            <div className="card-front">
              <div className="card-logo-small">IC</div>
              <div className="card-info">
                <p className="card-name">ITAFCOUTURE</p>
                <p className="card-title">Digital Atelier</p>
              </div>
            </div>
          </div>
          <div className="application-card letterhead">
            <div className="letterhead-header">
              <span className="letterhead-logo">ITAFCOUTURE</span>
            </div>
            <div className="letterhead-body">
              <div className="letterhead-line"></div>
              <div className="letterhead-line short"></div>
              <div className="letterhead-line"></div>
            </div>
          </div>
          <div className="application-card packaging">
            <div className="package-design">
              <div className="package-seal">IC</div>
              <p className="package-text">ITAFCOUTURE</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="brand-footer">
        <div className="footer-line"></div>
        <p className="footer-text">ITAFCOUTURE — Digital Fashion Maison — Est. 2025</p>
      </footer>
    </div>
  )
}
