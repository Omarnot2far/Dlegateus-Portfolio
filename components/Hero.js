function Hero() {
  try {
    const scrollToPortfolio = () => {
      const element = document.getElementById('portfolio');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <section className="pt-24 pb-16 bg-gradient-to-br from-[var(--secondary-color)] to-white" data-name="hero" data-file="components/Hero.js">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6">
                Your Trusted Partner for UK Accounting & Compliance
              </h1>
              <p className="text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">
                See how we manage a company's finances from A to Z — the right way. We package real compliance work into an elegant, annual-report style portfolio you can explore.
              </p>
              <button 
                onClick={scrollToPortfolio}
                className="btn-primary inline-flex items-center gap-2"
              >
                Explore our work
                <div className="icon-arrow-down text-lg"></div>
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-[var(--border-color)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                    <div className="icon-chart-bar text-xl text-white"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)]">Dlegateus Portfolio Preview</h3>
                    <p className="text-sm text-[var(--text-secondary)]">Annual report with charts and graphs</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2 border-b border-[var(--border-color)]">
                    <span className="text-sm text-[var(--text-secondary)]">VAT Compliance</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[var(--accent-color)] rounded-full"></div>
                      <span className="text-sm font-medium">Active</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-[var(--border-color)]">
                    <span className="text-sm text-[var(--text-secondary)]">Payroll Processing</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[var(--accent-color)] rounded-full"></div>
                      <span className="text-sm font-medium">Active</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-[var(--text-secondary)]">Annual Accounts</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[var(--accent-color)] rounded-full"></div>
                      <span className="text-sm font-medium">Complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}