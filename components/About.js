function About() {
  try {
    return (
      <section id="about" className="section-padding bg-white" data-name="about" data-file="components/About.js">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-8">
              About Us
            </h2>
            
            <div className="bg-gradient-to-br from-[var(--secondary-color)] to-white rounded-2xl p-8 lg:p-12 border border-[var(--border-color)]">
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                We are a trusted offshore accounting support firm helping UK-based accountancy practices reduce operational workload and scale efficiently — all while maintaining full compliance and quality. We understand your clients, software stack (Xero, Capium, Zoho etc.), and reporting standards. Whether you're a sole practitioner or a growing multi-partner firm, we support you at every stage.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--primary-color)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="icon-award text-2xl text-white"></div>
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Trusted Partner</h3>
                <p className="text-[var(--text-secondary)]">Reliable offshore support for UK accounting practices</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--accent-color)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="icon-shield-check text-2xl text-white"></div>
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Full Compliance</h3>
                <p className="text-[var(--text-secondary)]">Maintaining quality and regulatory standards</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="icon-trending-up text-2xl text-white"></div>
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Scale Efficiently</h3>
                <p className="text-[var(--text-secondary)]">Supporting growth from sole practitioners to multi-partner firms</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}